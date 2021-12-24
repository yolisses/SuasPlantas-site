import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Sending } from '../upload/upload';

interface SelectedImageProps {
  id: any;
  file: File;
  onRemoveClick: (id: any) => void;
}

export function SelectedImage({ id, file, onRemoveClick }: SelectedImageProps) {
  const [src, setSrc] = useState<string>();
  const [_, setRefreshValue] = useState(0);
  function refresh() {
    setRefreshValue(Math.random());
  }
  const [sending] = useState<Sending>(new Sending(file, refresh));

  function handleRemoveClick() {
    sending.cancel();
    onRemoveClick(id);
  }

  function getImageSrc() {
    const reader = new FileReader();
    reader.onload = function (e) {
      const src = e.target!.result;
      setSrc(src as string);
    };
    reader.readAsDataURL(file);
  }

  useEffect(() => {
    getImageSrc();
    if (!sending.sent) sending.send();
  }, [file]);

  return (
    <div className="flex-shrink-0">
      <div className="relative z-10">
        <FaTimes
          size={26}
          color="#000"
          onClick={handleRemoveClick}
          className="bg-white absolute right-1 top-1 rounded-full p-1 shadow-lg cursor-pointer hover:bg-gray-100"
        />
      </div>
      <div>
        <img
          alt=""
          src={src}
          className="flex-shrink-0 rounded-lg shadow-md"
          style={{
            width: '100%',
            height: 0,
            paddingBottom: '100%',
            backgroundColor: 'gray',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${src})`,
          }}
        />
      </div>
      <div className="overflow-hidden">{sending.getLinkPreview}</div>
      <div>{sending.progressPercentage}</div>
      <div>{`${sending.sent}`}</div>
    </div>
  );
}
