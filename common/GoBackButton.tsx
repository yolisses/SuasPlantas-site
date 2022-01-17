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
    <button
      className="icon-button"
      onClick={handleClick}
    >
      <div className="p-1">
        <FaChevronLeft
          size={20}
          color={color || 'gray'}
          className="transform"
        />
      </div>
    </button>
  );
}
