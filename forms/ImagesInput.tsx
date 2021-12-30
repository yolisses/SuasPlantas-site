/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, useEffect, useState } from 'react';
import { FaImage } from 'react-icons/fa';
import { FormHelperText } from '@mui/material';
import { Sending } from '../upload/Sending';
import { isEmpty } from '../utils/isEmpty';
import { SelectedImage } from './SelectedImage';

export type SendingsCollection = { [key: number]: Sending };

interface ImagesInputProps{
  onChange:(value:any)=>void
  onBlur:(value:any)=>void
  error?:boolean
  helperText?:string
  initialSendings?:SendingsCollection
}

export function ImagesInput({
  onChange, onBlur, helperText, error, initialSendings,
}:ImagesInputProps) {
  const [_, setRefreshValue] = useState(0);
  function refresh() {
    setRefreshValue(Math.random());
  }
  const [sendings, setSendings] = useState<SendingsCollection>(initialSendings || {});
  const handleFilesSelected = (e: ChangeEvent<HTMLInputElement>): void => {
    const newFiles: SendingsCollection = {};
    Array.from(e.target.files!).forEach((file) => {
      newFiles[Math.random()] = new Sending({ file, onUpdate: refresh });
    });
    setSendings((old) => ({ ...old, ...newFiles }));
  };

  function handleRemoveFile(key: number) {
    setSendings((old) => {
      const newFiles = { ...old };
      delete newFiles[key];
      return newFiles;
    });
  }

  useEffect(() => { onChange(sendings); }, [sendings]);

  console.log(sendings);

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
            <FaImage size={25} />
            <div>Adicionar imagens</div>
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
