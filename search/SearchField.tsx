import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { filterStore } from './filtersStore';

export function SearchField() {
  const {
    register, handleSubmit,
  } = useForm({
    defaultValues: {
      text: filterStore.query?.text,
    },
  });
  const router = useRouter();

  function submit(data:any) {
    router.push('/');
    filterStore.query = { ...filterStore.query, ...data };
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="max-w-md bg-white rounded-full text-black h-9 flex flex-row items-center overflow-hidden w-full flex-1 pl-3"
    >
      <input
        type="text"
        className="w-full outline-none"
        {...register('text')}
      />
      <IconButton onClick={handleSubmit(submit)} className="h-9">
        <FaSearch size={20} color="#999" />
      </IconButton>
    </form>
  );
}
