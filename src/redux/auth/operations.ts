import axios, { AxiosError } from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface AuthState {
  user: {
    name: string | null;
    email: string | null;
    password: string | null;
  };
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export interface RefreshResponse {
  user: {
    name: string | null;
    email: string | null;
    password: string | null;
  };
}

interface Register {
  name?: string | null;
  email: string | null;
  password: string | null;
}

interface RegisterResponse {
  user: {
    name: string | null;
    email: string | null;
    password: string | null;
  };
  token: string | null;
}

interface Login {
  email: string | null;
  password: string | null;
}

interface LoginResponse {
  user: {
    name: string | null;
    email: string | null;
    password: string | null;
  };
  token: string | null;
}

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const register = createAsyncThunk<
  RegisterResponse,
  Register,
  { rejectValue: string }
>('auth/register', async (credentials, thunkApi) => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    setAuthHeader(data.token);
     Notiflix.Notify.success('Реєстрацію завершено успішно');
    return data;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 409
    ) {
      Notiflix.Notify.failure('Користувач з таким email вже існує');
    }
    else {
      const errorMessage = (error as AxiosError).message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
});

export const logIn = createAsyncThunk<
  LoginResponse,
  Login,
  { rejectValue: string }
>('auth/login', async (credentials, thunkApi) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 400
    ) {
      Notiflix.Notify.failure('Помилка: некоректні дані для входу');
    } else {
      const errorMessage = (error as AxiosError).message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
});

export const logOut = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    setAuthHeader(null);
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 400
    ) {
      Notiflix.Notify.failure('Помилка: некоректні дані для виходу');
    } else {
      const errorMessage = (error as AxiosError).message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
});

export const refreshUser = createAsyncThunk<
  RefreshResponse,
  void,
  { rejectValue: string }
>('auth/refresh', async (_, thunkApi) => {
  const state = thunkApi.getState() as { auth: AuthState };
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkApi.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 400
    ) {
      Notiflix.Notify.failure(
        'Помилка: некоректні дані для оновлення користувача'
      );
    } else {
      const errorMessage = (error as AxiosError).message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
});
