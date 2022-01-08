import { Button } from '@mui/material';
import { useState } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';

export function LikeButton() {
  const [isActive, setIsActive] = useState(false);
  const size = 20;

  function handleClick() {
    setIsActive((value) => !value);
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
