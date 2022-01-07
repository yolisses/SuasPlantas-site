import { useEffect, useRef, useState } from 'react';
import { generateRandomColors } from './utils/generateRandomColors';

export function DevPage() {
  const ref = useRef();
  const [observer, setObserver] = useState<IntersectionObserver>();

  const [items, setItems] = useState(
    // generateRandomColors(10),
    [],
  );

  function fetchData(values) {
    console.log('fetch', values);
    setItems(items.concat(
      generateRandomColors(10),
    ));
  }

  function handleItersection(e) {
    console.log('intersection', e);
    setItems((items) => items.concat(
      generateRandomColors(10),
    ));
  }

  function refresh(values) {
    setItems([]);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleItersection,
    );
    observer.observe(ref.current);
    setObserver(observer);
  }, []);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            className="p-10"
            key={item}
            style={{ backgroundColor: item }}
          >
            {index}
            {' '}
            {item}
          </li>
        ))}
      </ul>
      <div className="relative">
        <div ref={ref} className="absolute bottom-0 border-2 border-green-600 w-full h-96">
          Observer
        </div>
      </div>
    </div>
  );
}
