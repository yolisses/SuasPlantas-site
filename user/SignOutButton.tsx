import { api } from '../api/api';
import { authStore } from '../auth/authStore';

export const SignOutButton = function () {
  async function handleClick() {
    authStore.user = undefined;
    return api.post('users/logout');
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white p-2 rounded-lg text-red hover:bg-black hover:bg-opacity-5 m-2 cursor-pointer select-none"
    >
      Sign out
    </div>
  );
};
