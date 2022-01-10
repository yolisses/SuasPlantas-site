import { Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { api } from '../api/api';
import { requireLogin } from '../auth/requireLogin';

interface LikeButtonProps{
  url:string
  active?:boolean
}

export const LikeButton = observer(({ url, active }:LikeButtonProps) => {
  const [isActive, setIsActive] = useState(active || false);
  const size = 20;

  async function handleClick() {
    setIsActive((value) => !value);
    if (!isActive) {
      await api.post(url);
    } else {
      await api.delete(url);
    }
  }

  return (
    <Button
      variant="contained"
      className="flex flex-row items-center gap-2"
      onClick={requireLogin(handleClick)}
    >
      {!isActive
        ? <FaRegThumbsUp size={size} color="white" />
        : (
          <FaThumbsUp
            size={size}
            color="white"
          />
        )}
      {isActive ? 'Curtido' : 'Curtir'}
    </Button>
  );
});
