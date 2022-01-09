import { Button } from '@mui/material';
import { useState } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { api } from '../api/api';

interface LikeButtonProps{
  url:string
  active:boolean
}

export function LikeButton({ url, active }:LikeButtonProps) {
  const [isActive, setIsActive] = useState(active);
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
    <Button onClick={handleClick} variant="contained" className="flex flex-row items-center gap-2">
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
}
