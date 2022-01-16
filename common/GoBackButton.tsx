import { IconButton } from '@mui/material';
import Router from 'next/router';
import { FaChevronLeft } from 'react-icons/fa';

interface GoBackButtonProps {
  color?: string;
}

export function GoBackButton({ color }: GoBackButtonProps) {
  function handleClick() {
    Router.back();
  }

  return (
    <IconButton
      onClick={handleClick}
    >
      <div className="p-1">
        <FaChevronLeft
          size={20}
          color={color || 'gray'}
          className="transform"
        />
      </div>
    </IconButton>
  );
}
