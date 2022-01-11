import { Button } from '@mui/material';
import { FaSearch } from 'react-icons/fa';

export function SearchField() {
  return (
    <div className="w-full max-w-md bg-white rounded-full text-black h-8 pl-3 flex flex-row items-center">
      <input type="text" className="w-full outline-none" />
      <Button>
        <FaSearch size={20} color="#999" />
      </Button>
    </div>
  );
}
