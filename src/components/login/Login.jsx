import { useForm } from 'react-hook-form';
import { useState } from 'react';
import AuthFormWrapper from '../../utils/AuthFormWrapper';
import styles from './Login.module.scss';
import { Button, TextField, Typography } from '@mui/material';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState('');

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setError('');
  };

  return (
    <AuthFormWrapper header="Login">
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-required"
          label="Email"
          {...register('Email', {
            required: 'Email is required.',
            message: 'Email is required.',
          })}
          error={!!errors.Email}
          helperText={errors.Email ? errors.Email.message : ''}
        />
        <TextField
          id="outlined-required"
          label="Password"
          {...register('Password', {
            required: 'Password is required.',
            message: 'Password is required.',
          })}
          error={!!errors.Password}
          helperText={errors.Password ? errors.Password.message : ''}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            height: 40,
            position: 'relative',
            marginTop: '20px',
          }}
        >
          Login
        </Button>
        {error && (
          <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </form>
    </AuthFormWrapper>
  );
};

export default Login;
