import { useState } from "react";
import { FaImage } from "react-icons/fa";
import { isEmpty } from "../utils/isEmpty";
import { SelectedImage } from "./SelectedImage";

type filesCollection = { [key: number]: File };

export function ImagesInput() {
  const [files, setFiles] = useState<filesCollection>({});

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newFiles: filesCollection = {};
    Array.from(e.target.files!).map((file) => (newFiles[Math.random()] = file));
    setFiles((old) => ({ ...old, ...newFiles }));
  };

  function handleRemoveFile(key: number) {
    setFiles((old) => {
      const newFiles = { ...old };
      delete newFiles[key];
      return newFiles;
    });
  }

  return (
    <div className="rounded-xl overflow-hidden">
      <div
        className={
          "overflow-x-auto gap-1 " +
          (!isEmpty(files) ? " grid grid-cols-3 sm:grid-cols-4" : "")
        }
      >
        {!isEmpty(files) &&
          Object.entries(files).map(([key, file]) => (
            <SelectedImage
              id={key}
              key={key}
              file={file}
              onRemoveClick={handleRemoveFile}
            />
          ))}

        <label>
          <div
            className={
              "bg-gray-300 px-2 flex items-center justify-center cursor-pointer rounded-lg " +
              (!isEmpty(files) ? " flex-row gap-1 py-3 h-full" : "py-14")
            }
          >
            <FaImage size={25} />
            <div>Adicionar imagens</div>
          </div>
          <input
            type="file"
            onChange={handleFileSelected}
            accept=".jpg, .jpeg, .png, .webp"
            hidden
            multiple
          ></input>
        </label>
      </div>
    </div>
  );
}
