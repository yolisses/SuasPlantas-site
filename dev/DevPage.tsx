import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormValues{
  name:string
  description:string
}

export function DevPage() {
  const { handleSubmit, register } = useForm<FormValues>();
  const [show, setShow] = useState(false);

  function submit(data:FormValues) {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder="massa" {...register('name')} />
        {show && <input type="text" placeholder="massa" {...register('description')} />}
        <button onClick={(e) => {
          e.preventDefault();
          console.log('misterio');
        }}
        >
          oie

        </button>
        <input type="submit" value="coisa" />
      </form>
      <button onClick={() => setShow((value) => !value)}>oie</button>
    </>
  );
}
