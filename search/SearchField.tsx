import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { filterStore } from './filtersStore';

export function SearchField() {
  const { register, handleSubmit } = useForm();

  function submit(data:any) {
    filterStore.query = { ...filterStore.query, text: data.q };
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full max-w-md bg-white rounded-full text-black h-9 pl-3 flex flex-row items-center overflow-hidden"
    >
      <input type="text" className="w-full outline-none" {...register('q')} />
      <Button onClick={handleSubmit(submit)} className="h-9">
        <FaSearch size={20} color="#999" />
      </Button>
    </form>
  );
}
