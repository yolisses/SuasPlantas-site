import {
  useState,
  useEffect,
} from 'react';
import { Sending } from '../upload/Sending';
import { SelectedImageItem } from './SelectedImageItem';

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
    <div>
      <SelectedImageItem src={src} handleRemoveClick={handleRemoveClick} />
      {false && (
      <>
        <div>
          {sending.progressPercentage}
        </div>
        <div>
          {sending.uri}
        </div>
      </>
      )}
    </div>
  );
}
