import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import Register from '../../components/register/Register';
import Login from '../../components/login/Login';
import styles from './AuthPage.module.scss';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {isRegister ? <Register /> : <Login />}
        <Button sx={{ mt: '10px' }} onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Do you already have an account? Enter' : 'No account? Register'}
        </Button>
      </Grid>
    </div>
  );
};

export default AuthPage;
