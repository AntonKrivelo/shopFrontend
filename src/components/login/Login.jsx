import { useForm } from 'react-hook-form';
import { useState } from 'react';
import AuthFormWrapper from '../../utils/AuthFormWrapper';
import styles from './Login.module.scss';
import { Button, TextField, Typography } from '@mui/material';
import axiosBase from '../../api/axiosBase';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    setError('');
    try {
      const res = await axiosBase.post('/login', {
        email: data.email,
        password: data.password,
      });

      localStorage.setItem('token', res.data.token);

      localStorage.setItem('user', JSON.stringify(res.data.user));

      alert('Success!');
      console.log('User:', res.data.user);
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <AuthFormWrapper header="Login">
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-required"
          label="Email"
          {...register('email', {
            required: 'Email is required.',
            message: 'Email is required.',
          })}
          error={!!errors.Email}
          helperText={errors.Email ? errors.Email.message : ''}
        />
        <TextField
          id="outlined-required"
          label="Password"
          {...register('password', {
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
