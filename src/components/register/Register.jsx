import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import AuthFormWrapper from '../../utils/AuthFormWrapper';
import styles from './Register.module.scss';

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <AuthFormWrapper header="Register">
      <form className={styles.form} onSubmit={() => handleSubmit({})}>
        <TextField required id="outlined-required" label="Username" />
        <TextField required id="outlined-required" label="Email" />
        <TextField required id="outlined-required" label="Password" />
      </form>
    </AuthFormWrapper>
  );
};

export default Register;
