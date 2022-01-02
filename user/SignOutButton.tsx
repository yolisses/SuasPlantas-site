import { Button } from '@mui/material';
import { api } from '../api/api';
import { authStore } from '../auth/authStore';

export const SignOutButton = function () {
  return (
    <Button onClick={handleClick}>
      Sign out
    </Button>
  );
};
