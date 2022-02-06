import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { api } from '../api/api';

export interface ImageSuggestion{
    original:string
    thumbnail?:string
}

export interface ImagesSuggestionsProps{
  onSelect?:(image:string)=>void
  text?:string
}

export function ImagesSuggestions({ text, onSelect }:ImagesSuggestionsProps) {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<ImageSuggestion[]>();
  const [blackList, setBlackList] = useState<string[]>([]);

  async function refresh() {
    setLoading(true);
    try {
      const { data } = await api.get('images/suggest', {
        params: { text: `planta ${text}` },
      });
      setImages(data);
    } catch (err:any) {
      console.error(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (text) {
      refresh();
    } else if (images && !loading) {
      setImages(undefined);
    }
  }, [text]);

  if (loading) {
    return (
      <div>
        Carregando imagens sugeridas...
      </div>
    );
  }

  if (text) {
    if (!images || images?.length < 4) {
      return <div>Sem imagens para sugerir</div>;
    }
    return (
      <div>
        <div>Imagens sugeridas</div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-1 ring ring-blue-400 rounded-md">
          {images && images.map((image, index) => {
            const selected = blackList && blackList.includes(image.original);
            return (
              <button
                onClick={() => {
                  if (onSelect) {
                    onSelect(image.original);
                    setBlackList((old) => [...old, image.original]);
                  }
                }}
                disabled={selected}
                className={`scale-active p-0 ${
                  index === 3 ? 'hidden sm:inline-flex' : ''
                }`}
              >
                <img
                  alt="falha ao carregar"
                  src={image.thumbnail || image.original}
                  className={`rounded-lg aspect-square object-cover bg-gray-300 overflow-hidden ${
                    selected ? 'brightness-75' : ''
                  }`}
                />
                {!!selected
                && <FaCheck color="#0a0" className="absolute" size={30} />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}
