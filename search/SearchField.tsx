import { IconButton } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useItems } from '../home/ItemsContext';

export function SearchField() {
  const { filters, setFilters } = useItems();
  const [text, setText] = useState(filters?.text);
  const router = useRouter();

  function submit(e:FormEvent) {
    e.preventDefault();
    setFilters((filters) => ({ ...filters, text: text || undefined }));
    router.push('/');
  }

  useEffect(() => {
    console.log('change text', filters);
    setText(() => filters?.text);
  }, [filters]);

  return (
    <form
      onSubmit={submit}
      className="max-w-md bg-white rounded-full text-black h-9 flex flex-row items-center overflow-hidden w-full flex-1 pl-3"
    >
      <input
        type="text"
        value={text || ''}
        className="w-full outline-none"
        onChange={(e) => setText(e.target.value)}
      />
      <IconButton type="submit" className="h-9">
        <FaSearch size={20} color="#999" />
      </IconButton>
    </form>
  );
}
