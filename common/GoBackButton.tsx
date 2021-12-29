import { Button } from '@mui/material';
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
    <Button
      onClick={handleClick}
    >
      <FaChevronLeft
        size={20}
        color={color || 'gray'}
        className="cursor-pointer"
      />
    </Button>
  );
}
