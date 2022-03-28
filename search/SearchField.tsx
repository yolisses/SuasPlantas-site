import { useRouter } from 'next/router';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { FormEvent, useEffect, useState } from 'react';
import { useTextSearchContext } from './TextSearchContext';

export function SearchField() {
  const router = useRouter();
  const { text: searchText, setText: setSearchText } = useTextSearchContext();
  const [text, setText] = useState(searchText);

  function submit(e:FormEvent) {
    e.preventDefault();
    setSearchText(text || undefined);
    const path = window.location.pathname;
    if (path !== '/' && path !== '/quests' && path !== '/users') {
      router.push('/');
    }
  }

  function handleReset() {
    setText(undefined);
    setSearchText(undefined);
  }

  useEffect(() => {
    setText(searchText);
  }, [searchText]);

  return (
    <div className="flex flex-row w-full">
      <form
        onSubmit={submit}
        className="flex flex-row flex-1 bg-white rounded-full h-9 items-center overflow-hidden pl-3 border border-gray-300"
      >
        <input
          type="text"
          data-hj-allow
          value={text || ''}
          className="w-full outline-none bg-transparent"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="icon-button h-9 p-0"
        >
          <FaSearch size={20} />
        </button>
      </form>
      {!!text
      && (
      <button className="icon-button p-2" onClick={handleReset}>
        <FaTimes size={20} />
      </button>
      )}
    </div>
  );
}
