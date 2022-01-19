import { FormEvent, useEffect, useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
import Link from 'next/link';
import { api } from '../api/api';
import { mainColor } from '../common/mainColor';
import { Quest } from './Quest';
import { useQuests } from './questsContext';
import { Spinner } from '../common/Spinner';

export function QuestsEditPage() {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [selected, setSelected] = useState<Quest>();
  const valid = !!text.trim().length;

  const { reset } = useQuests();

  function handleSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!valid) return;

    if (selected) {
      selected.name = text;
      api.put(`/quests/${selected.id}`, selected);
      setQuests([...quests]);
      setSelected(undefined);
    } else {
      api.post('/quests', { name: text });
      setQuests((quests) => quests.concat({
        id: Math.random(),
        name: text.trim(),
      } as Quest));
    }
    setText('');
  }

  function handleSelect(value:Quest) {
    if (value === selected) {
      setSelected(undefined);
    } else {
      setSelected(value);
      setText(value.name);
    }
  }

  function handleRemove() {
    api.delete(`/quests/${selected?.id}`);
    setQuests(quests.filter((quest:Quest) => quest !== selected));
    setSelected(undefined);
  }

  useEffect(() => {
    if (!selected) {
      setText('');
    }
  }, [selected]);

  async function getInitialItems() {
    const res = await api.get('users/me/quests');
    setQuests(res.data);
    setLoading(false);
  }

  useEffect(
    () => { getInitialItems(); },
    [],
  );

  return (
    <div className="flex flex-col items-center">
      <Link href="/quests">
        <button onClick={reset} className="self-start">
          <h1 className="flex flex-row p-2 items-center text-lg gap-1 text-black">
            <div className="bg-gray-200 p-1 rounded-lg">
              <FaQuestion color={mainColor} />
            </div>
            Procurando
          </h1>
        </button>
      </Link>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="w-full max-w-lg flex flex-col items-center" style={{ minHeight: '25vh' }}>
          {loading && <Spinner />}
          {quests.length ? (
            <div className="flex flex-row flex-wrap gap-1 justify-center">
              {quests.map((item) => (
                <button
                  onClick={() => handleSelect(item)}
                  key={item.id}
                  className={`bg-gray-300 p-2 rounded-lg md:px-4 border-2 ${
                    selected === item
                      ? ' border-green-500'
                      : 'text-black border-gray-300'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )
            : (
              <div className="text-lg text-gray-500 text-center">
                Adicione o nome das plantas que estiver procurando
              </div>
            )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 max-w-sm w-full p-2"
        >
          {!!selected
          && (
          <div className="flex flex-row items-center justify-between">
            <div>
              <span className="text-green-700">
                Editando:
              </span>
              {' '}
              {selected.name}
            </div>
            <button className="text-red-600" onClick={handleRemove} type="button">
              Remover
            </button>
          </div>
          )}
          <input
            type="text"
            value={text}
            disabled={loading}
            placeholder="Nome da planta"
            className="p-4 border border-gray-400 rounded-lg"
            onChange={(e) => setText(e.target.value)}
          />
          {selected
            ? (
              <div className="flex flex-row gap-2">
                <button className="main-button flex-1" disabled={!valid}>Salvar</button>
                <button onClick={() => setSelected(undefined)}>cancelar</button>
              </div>
            )
            : <button className="main-button flex-1" disabled={!valid || loading}>Adicionar</button>}
        </form>
      </div>
    </div>
  );
}
