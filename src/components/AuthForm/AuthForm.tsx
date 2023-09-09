import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { AuthFormStyle } from './AuthForm.styled';
import { register, logIn } from '../../redux/auth/operations';

import * as Notiflix from 'notiflix';

interface AuthFormProps {
  isRegistration: boolean;
}

interface AuthFormValues {
  name?: string | null;
  email: string;
  password: string;
}

const initialValues: AuthFormValues = {
  name: '',
  email: '',
  password: '',
};

const authSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
      'Password must contain at least one uppercase letter and one special character'
    ),
});

const AuthForm: React.FC<AuthFormProps> = ({ isRegistration }) => {
  useEffect(() => {
    async function breakFormikInputs() {
      await setValues({
        name: initialValues.name,
        email: initialValues.email,
        password: initialValues.password,
      });
    }
    async function breakFormikTouched() {
      await setTouched({
        name: false,
        email: false,
        password: false,
      });
    }

    breakFormikInputs();
    breakFormikTouched();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRegistration]);

  const onHandleSubmit = async (
    { name, email, password }: AuthFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      if (isRegistration) {
        await register({ name, email, password });
      }

      await logIn({ email, password });

      resetForm();
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        console.error('User already exists:', error.message);
        Notiflix.Notify.failure('User with this email already exists');
        // Обробляйте помилку 409 (користувач вже існує) тут
      } else {
        console.error('An error occurred:', error.message);
        Notiflix.Notify.failure('An error occurred');
        // Обробляйте інші помилки тут
      }
    }
  };

  const formDistributor = {
    passText: isRegistration ? 'Create a password' : 'Confirm your password',
    buttText: isRegistration ? 'Register Now' : 'Log in Now',
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setValues, // Додайте це
    setTouched, // Додайте це
  } = useFormik<AuthFormValues>({
    initialValues: initialValues,
    onSubmit: onHandleSubmit,
    validationSchema: authSchema,
  });

  return (
    <AuthFormStyle onSubmit={handleSubmit}>
      {isRegistration && (
        <Input
          name="name"
          type="text" // Змінено на "text"
          placeholder="Enter your name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name || ''}
        />
      )}
      {isRegistration && errors.name && touched.name ? (
        <span style={{ color: 'white' }}>{errors.name}</span>
      ) : null}

      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {errors.email && touched.email ? (
        <span style={{ color: 'white' }}>{errors.email}</span>
      ) : null}

      <Input
        name="password"
        type="password"
        placeholder={formDistributor.passText}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {errors.password && touched.password ? (
        <span style={{ color: 'white' }}>{errors.password}</span>
      ) : null}

      <Button type="submit">{formDistributor.buttText}</Button>
    </AuthFormStyle>
  );
};

export default AuthForm;
