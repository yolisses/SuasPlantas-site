/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  useState,
  useEffect,
  DragEvent,
  ChangeEvent,
} from 'react';
import { FaImage } from 'react-icons/fa';
import { FormHelperText } from '@mui/material';

import { isEmpty } from '../utils/isEmpty';
import { Sending } from '../upload/Sending';
import { SelectedImage } from './SelectedImage';
import { useRefresh } from '../utils/useRefresh';

export type SendingsCollection = { [key: number]: Sending };

export interface ImageInputCustomRef{
  current?:{
    addFile:(file:File)=>void
    sendings:SendingsCollection
  }
}

interface ImagesInputProps{
  onChange:(sendings:SendingsCollection)=>void
  onBlur:(value:any)=>void
  error?:boolean
  helperText?:string
  initialSendings?:SendingsCollection
  customRef?:ImageInputCustomRef
}

type IgnoreType = () => any

export function ImagesInput({
  onChange, onBlur, helperText, error, initialSendings, customRef,
}:ImagesInputProps) {
  const refresh = useRefresh();
  const [dragging, setDragging] = useState(false);
  const [sendings, setSendings] = useState<SendingsCollection>(initialSendings || {});

  if (customRef) {
    // eslint-disable-next-line no-param-reassign
    customRef.current = {
      addFile(file:File) {
        const newFiles: SendingsCollection = {};
        newFiles[Math.random()] = new Sending({ file, onUpdate: refresh });
        setSendings((old) => ({ ...old, ...newFiles }));
      },
      sendings,
    };
  }

  function addFiles(files: File[]) {
    const newFiles: SendingsCollection = {};
    files.forEach((file) => {
      newFiles[Math.random()] = new Sending({ file, onUpdate: refresh });
    });
    setSendings((old) => ({ ...old, ...newFiles }));
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

  function isImage(file:File) {
    return file.type.startsWith('image/');
  }

  function handleDrop(e:DragEvent):void {
    setDragging(false);
    const files = Array.from(e!.dataTransfer!.files!);
    addFiles(files.filter(isImage));
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDragOver(e:DragEvent):void {
    if (!dragging) {
      setDragging(true);
    }
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDragLeave() {
    setDragging(false);
  }

  useEffect(() => {
    onChange(sendings);
  }, [sendings]);

  useEffect(() => {
    window.addEventListener('drop', handleDrop as IgnoreType);
    window.addEventListener('dragover', handleDragOver as IgnoreType);
    window.addEventListener('dragleave', handleDragLeave);
    return () => {
      window.removeEventListener('drop', handleDrop as IgnoreType);
      window.removeEventListener('dragover', handleDragOver as IgnoreType);
      window.removeEventListener('dragover', handleDragLeave);
    };
  });

  return (
    <div>
      <div
        className={
          `gap-1 ${
            !isEmpty(sendings) ? ' grid grid-cols-3 sm:grid-cols-4' : ''}`
        }
      >
        {!isEmpty(sendings)
          && Object.entries(sendings).map(([key, sending]) => (
            <SelectedImage
              id={key}
              key={key}
              sending={sending}
              onRemoveClick={handleRemoveFile}
            />
          ))}
        <label>
          <div
            className={
              `bg-gray-300 px-2 flex gap-2 items-center justify-center cursor-pointer select-none rounded-lg ${
                !isEmpty(sendings) ? ' flex-row gap-1 py-3 h-full mb-2' : 'py-14'}`
            }
          >
            <FaImage size={25} className={dragging ? 'animate-bounce' : ''} />
            <div>
              {dragging
                ? 'Solte as imagens para adicionar'
                : 'Adicionar imagens'}
            </div>
          </div>
          <input
            type="file"
            onChange={handleFilesSelected}
            accept=".jpg, .jpeg, .png, .webp"
            hidden
            multiple
            onBlur={onBlur}
          />
        </label>
      </div>
      <FormHelperText error={error}>
        {helperText}
      </FormHelperText>
    </div>
  );
}
