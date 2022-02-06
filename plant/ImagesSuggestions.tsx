import { useEffect, useState } from 'react';
import { api } from '../api/api';

interface ImageSuggestion{
    original:string
    thumbnail?:string
}

export function ImagesSuggestions({ text }:{text:string}) {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<ImageSuggestion[]>();

  const badResults = images && (images.length < 4);

  async function refresh() {
    setLoading(true);
    try {
      const res = await api.get('images/suggest', { params: { text: `planta ${text}` } });
      setImages(res.data);
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

  if (badResults) {
    return <div>Sem imagens para sugerir</div>;
  }

  if (text) {
    return (
      <div>
        <div>Imagens sugeridas</div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-1">
          {images && images.map((image) => (
            <img
              alt="falha ao carregar"
              src={image.thumbnail || image.original}
              className="rounded-lg w-full aspect-square object-cover bg-gray-300 overflow-hidden"
            />
          ))}
        </div>

      </div>
    );
  }

  return null;
}
