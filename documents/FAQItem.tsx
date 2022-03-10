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
    <>
      <dt className="flex flex-row items-center">
        {open
          ? <FaChevronDown size={12} />
          : <FaChevronRight size={12} />}
        <button
          type="button"
          aria-controls={id}
          aria-expanded={open}
          onClick={handleClick}
          className="text-lg"
        >
          {title}
        </button>
      </dt>
      <dd className={`mb-5 ${open ? '' : 'hidden'}`}>
        <p id={id}>
          {children}
        </p>
      </dd>
    </>
  );
}
