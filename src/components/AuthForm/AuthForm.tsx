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



const AuthForm: React.FC<AuthFormProps> = ({ isRegistration }) => {
  const formDistributor = {
    passText: isRegistration ? 'Create a password' : 'Confirm your password',
    buttText: isRegistration ? 'Register Now' : 'Log in Now',
  };

  const authSchema = Yup.object().shape({
  name: isRegistration ? Yup.string() : Yup.string().strip(),
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

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik<AuthFormValues>({
      initialValues: initialValues,
      onSubmit: async ({ name, email, password }, { resetForm }) => {
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
          } else {
            console.error('An error occurred:', error.message);
            Notiflix.Notify.failure('An error occurred');
          }
        }
      },
      validationSchema: authSchema,
    });

  useEffect(() => {
    if (isRegistration) {
      // Скидання значень полів форми для реєстрації
      values.name = initialValues.name;
    }
  }, [isRegistration, values]);

  return (
    <AuthFormStyle onSubmit={handleSubmit}>
      {isRegistration && (
        <Input
          name="name"
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name || ''}
        />
      )}
      {isRegistration && errors.name && touched.name ? (
        <span style={{ color: 'red' }}>{errors.name}</span>
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
        <span style={{ color: 'red' }}>{errors.email}</span>
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
        <span style={{ color: 'red' }}>{errors.password}</span>
      ) : null}

      <Button type="submit">{formDistributor.buttText}</Button>
    </AuthFormStyle>
  );
};

export default AuthForm;
