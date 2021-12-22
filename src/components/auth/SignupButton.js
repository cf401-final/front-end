import React from 'react';
import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

function SignupButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      id="profileBtn"
      variant="contained"
      color="primary"
      onClick={loginWithRedirect}
    >
      Signup
    </Button>
  );
}
export default SignupButton;