import { Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import AuthFormWrapper from '../../utils/AuthFormWrapper';
import styles from './Register.module.scss';

const Register = () => {
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

    try {
      console.log(data);
    } catch {
      console.log('error');
    } finally {
      reset();
    }
  };

  return (
    <AuthFormWrapper header="Register">
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-required"
          label="Username"
          {...register('username', {
            required: 'Username is required.',
            minLength: {
              value: 2,
              message: 'The name must contain at least 2 characters.',
            },
          })}
          error={!!errors.username}
          helperText={errors.username ? errors.username.message : ''}
        />
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
          {...register('password', {
            required: 'Password is required.',
            minLength: {
              value: 8,
              message: 'The password must contain at least 8 characters.',
            },
          })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
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
          Register
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

export default Register;
