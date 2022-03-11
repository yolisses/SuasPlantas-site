import { Dispatch, ReactNode, SetStateAction } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

interface FAQItemProps{
    id:string
    title:string
    current:string
    children:ReactNode
    setCurrent:Dispatch<SetStateAction<string>>
}

export function FAQItem({
  current, id, setCurrent, title, children,
}:FAQItemProps) {
  const open = current === id;

  function handleClick() {
    setCurrent((old) => (old === id ? '' : id));
  }

  return (
    <dl>
      <dt>
        <button
          type="button"
          aria-controls={id}
          aria-expanded={open}
          onClick={handleClick}
          className="text-x highlight p-2 rounded-lg cursor-pointer center-row gap-1"
        >
          {open
            ? <FaChevronDown size={12} />
            : <FaChevronRight size={12} />}
          {title}
        </button>
      </dt>
      <dd className={`bg-gray-100 p-2 rounded-lg shadow-lg ${open ? '' : 'hidden'}`}>
        <p id={id}>
          {children}
        </p>
      </dd>
    </dl>
  );
}
