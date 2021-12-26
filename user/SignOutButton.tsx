import { Button } from '@mui/material';
import { api } from '../api/api';
import { authStore } from '../auth/authStore';

export const SignOutButton = function () {
  async function handleClick() {
    authStore.user = undefined;
    authStore.token = undefined;
    return api.post('users/logout');
  }

  return (
    <Button onClick={handleClick}>
      Sign out
    </Button>
  );
};
