import { useForm } from 'react-hook-form';
import AuthFormWrapper from '../../utils/AuthFormWrapper';
import styles from './Login.module.scss';
import { TextField } from '@mui/material';

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <AuthFormWrapper header="Login">
      <form className={styles.form} onSubmit={() => handleSubmit({})}>
        <TextField required id="outlined-required" label="Email" />
        <TextField required id="outlined-required" label="Password" />
      </form>
    </AuthFormWrapper>
  );
};

export default Login;
