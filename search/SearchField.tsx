import { FaSearch, FaTimes } from 'react-icons/fa';
import {
  Dispatch, FormEvent, SetStateAction, useEffect, useState,
} from 'react';
import { useRouter } from 'next/router';
import { Filters } from '../pagination/PaginationProvider';

interface SearchFieldProps{
  filters?:Filters
  setFilters:Dispatch<SetStateAction<Filters|undefined>>
  path:string
}

export function SearchField({ filters, setFilters, path }:SearchFieldProps) {
  const [text, setText] = useState(filters?.text);
  const router = useRouter();

  function submit(e:FormEvent) {
    e.preventDefault();
    setFilters((filters) => ({ ...filters, text: text || undefined }));
    router.push(path);
  }

  function handleReset() {
    setFilters((filters) => ({ ...filters, text: undefined }));
  }

  useEffect(() => {
    setText(() => filters?.text);
  }, [filters]);

  return (
    <div className="flex flex-row items-center w-full max-w-md">
      <form
        onSubmit={submit}
        className="w-full bg-white rounded-full text-black h-9 flex flex-row items-center overflow-hidden flex-1 pl-3 border border-gray-300"
      >
        <input
          type="text"
          value={text || ''}
          className="w-full outline-none"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="icon-button h-9 p-0"
        >
          <FaSearch size={20} color="#999" />
        </button>
      </form>
      {!!text
      && (
      <button className="icon-button p-2" onClick={handleReset}>
        <FaTimes color="black" />
      </button>
      )}
    </div>
  );
}
