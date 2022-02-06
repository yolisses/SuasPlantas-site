import { useEffect, useState } from 'react';
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

    setSrc(`https://suasplantas.s3.sa-east-1.amazonaws.com/uploads/${sending.key}`);
  }

  useEffect(() => {
    getImageSrc();
  }, [sending.file]);

  return (
    <>
      <SelectedImageItem src={src} handleRemoveClick={handleRemoveClick} />
      {false && (
      <div>
          {sending.progressPercentage}
      </div>
      )}
    </>
  );
}
