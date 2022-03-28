import {
  useState,
  useEffect,
} from 'react';
import { FaTimes } from 'react-icons/fa';
import { Sending } from '../upload/Sending';

interface SelectedImageProps {
  id: any;
  sending:Sending
  onRemoveClick: (id:any) => void;
}

export function SelectedImage({
  id, onRemoveClick, sending,
}: SelectedImageProps) {
  const [src, setSrc] = useState<string>();

  function handleRemoveClick() {
    sending.cancel();
    onRemoveClick(id);
  }

  function getImageSrc() {
    if (sending.file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newSrc = e.target!.result;
        setSrc(newSrc as string);
      };
      reader.readAsDataURL(sending.file);
      return;
    }

    setSrc(sending.uri);
  }

  useEffect(() => {
    getImageSrc();
  }, [sending.file]);

  return (
    <div className="max-w-[calc((100%-0.5rem)/3)] md:max-w-[calc((100%-0.75rem)/4)] aspect-square">
      <div className="relative z-10">
        <button className="icon-button absolute right-0 top-0 p-2">
          <FaTimes
            size={26}
            color="#555"
            onClick={handleRemoveClick}
            className="bg-white rounded-full p-1 shadow-md"
          />
        </button>
      </div>
      <img
        alt=""
        src={src}
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
  );
}
