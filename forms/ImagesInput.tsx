import { useEffect, useState } from "react";
import { FaImage, FaTimes } from "react-icons/fa";
import { isEmpty } from "../utils/isEmpty";
interface image {
  file: File;
  imageSrc: string | ArrayBuffer | null;
}

type imagesCollection = { [key: number]: image };

export function ImagesInput() {
  const [images, setImages] = useState<imagesCollection>({});
  const [, setRefresh] = useState(0);

  function addImages(files: File[]) {
    setImages((old) => {
      const newImages: imagesCollection = {};
      files.forEach((file) => {
        newImages[Math.random()] = { file, imageSrc: null };
      });
      return { ...old, ...newImages };
    });
  }

  function removeImage(key: number) {
    delete images[key];
    setRefresh(Math.random());
  }

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = Array.from(e.target.files);
    addImages(files);
  };
  console.log(images);

  useEffect(() => {
    if (images)
      Object.entries(images).map(([key, { file }]) => {
        console.log(key, file);
        const reader = new FileReader();
        reader.onload = function (e) {
          const src = e.target!.result;
          console.log(src);
          images[key].imageSrc = src;
          setRefresh(Math.random());
        };
        reader.readAsDataURL(file);
      });
  }, [images]);

  return (
    <div className="border-2 border-gray-300 rounded-xl overflow-hidden">
      {!isEmpty(images) && (
        <div className="flex flex-row overflow-x-auto gap-1 p-1">
          {Object.entries(images).map(([key, { imageSrc }]) => (
            <div className="flex-shrink-0" key={key}>
              <div className="relative">
                <FaTimes
                  size={32}
                  color="#a00"
                  onClick={() => removeImage(key)}
                  className="bg-white absolute right-1 top-1 rounded-full p-1 shadow-lg cursor-pointer hover:bg-gray-100"
                />
              </div>
              <img
                src={imageSrc}
                alt=""
                className="flex-shrink-0 rounded-lg object-cover h-48"
              />
            </div>
          ))}
        </div>
      )}
      <label>
        <div
          className={
            "bg-gray-300 px-2 flex items-center justify-center cursor-pointer " +
            (!isEmpty(images) ? " flex-row gap-1 py-3" : "py-14")
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
  );
}
