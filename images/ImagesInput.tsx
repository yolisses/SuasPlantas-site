/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  useState,
  useEffect,
  ChangeEvent,
} from 'react';
import { FaImage } from 'react-icons/fa';

import { isImage } from './isImage';
import { Sending } from '../upload/Sending';
import { SelectedImage } from './SelectedImage';
import { useRefresh } from '../utils/useRefresh';
import { useDragAndDrop } from './useDragAndDrop';
import { SendingsCollection } from './SendingsCollection';

export interface ImageInputCustomRef{
  current?:{
    sendings:SendingsCollection
    addFiles:(file:File[])=>void
  }
}

interface ImagesInputProps{
  onBlur?:(value:any)=>void
  customRef?:ImageInputCustomRef
  initialSendings?:SendingsCollection
  onChange:(e:{target:{value:SendingsCollection}})=>void
}

export function ImagesInput({
  onChange, onBlur, initialSendings, customRef,
}:ImagesInputProps) {
  const refresh = useRefresh();
  const [sendings, setSendings] = useState<SendingsCollection>(initialSendings || {});
  const entries = Object.entries(sendings);
  const isEmpty = !entries.length;

  function addFiles(files: File[]) {
    const newFiles: SendingsCollection = {};
    files.forEach((file) => {
      newFiles[Math.random()] = new Sending({ file, onUpdate: refresh });
    });
    setSendings((old) => ({ ...old, ...newFiles }));
  }

  function handleDrop(files:File[]) {
    addFiles(files.filter(isImage));
  }

  function handleFilesSelected(e: ChangeEvent<HTMLInputElement>) {
    addFiles(Array.from(e.target.files!));
  }

  function handleRemoveFile(key: number) {
    setSendings((old) => {
      const newFiles = { ...old };
      delete newFiles[key];
      return newFiles;
    });
  }

  const { dragging } = useDragAndDrop(handleDrop);

  if (customRef) {
    // eslint-disable-next-line no-param-reassign
    customRef.current = { addFiles, sendings };
  }

  useEffect(() => {
    onChange({ target: { value: sendings } });
  }, [sendings]);

  useEffect(() => {
    if (initialSendings) {
      setSendings(initialSendings);
    }
  }, [initialSendings]);

  return (
    <div className="flex flex-row flex-wrap justify-between gap-1 items-stretch">
      {!isEmpty && entries.map(([key, sending]) => (
        <SelectedImage
          id={key}
          key={key}
          sending={sending}
          onRemoveClick={handleRemoveFile}
        />
      ))}

      <label
        className={
              `bg-gray-300 hover:brightness-95 flex-1 px-2 flex flex-row row-start-auto flex-wrap gap-2 center cursor-pointer min-h-[4rem] select-none rounded-lg ${
                isEmpty
                  ? 'py-14'
                  : 'flex-col gap-1'
              }`
            }
      >
        <FaImage size={25} className={dragging ? 'animate-bounce' : ''} />
        <span className="text-center">
          {dragging
            ? 'Solte as imagens para adicionar'
            : 'Adicionar imagens'}
        </span>
        <input
          hidden
          multiple
          type="file"
          data-hj-allow
          onBlur={onBlur}
          onChange={handleFilesSelected}
          accept=".jpg, .jpeg, .png, .webp"
        />
      </label>
    </div>
  );
}
