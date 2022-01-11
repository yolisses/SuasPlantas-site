import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';

export function SearchField() {
  const { register, handleSubmit } = useForm();

  function submit(data:any) {
    console.log(data);
  }

  return (
    <div className="w-full max-w-md bg-white rounded-full text-black h-9 pl-3 flex flex-row items-center overflow-hidden">
      <input type="text" className="w-full outline-none" {...register('q')} />
      <Button onClick={handleSubmit(submit)} className="h-9">
        <FaSearch size={20} color="#999" />
      </Button>
    </div>
  );
}
