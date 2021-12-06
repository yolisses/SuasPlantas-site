import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

interface SelectedImageProps {
  id: any;
  onRemoveClick: (id: any) => void;
  file: File;
}

export function SelectedImage({ id, file, onRemoveClick }: SelectedImageProps) {
  const [src, setSrc] = useState<string>();

  function handleRemoveClick() {
    console.log("handle remove click");
    onRemoveClick(id);
  }

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const src = e.target!.result;
      setSrc(src as string);
    };
    reader.readAsDataURL(file);
  }, [file]);

  return (
    <div className="flex-shrink-0">
      <div className="relative">
        <FaTimes
          size={28}
          color="#000"
          onClick={handleRemoveClick}
          className="bg-white absolute right-1 top-1 rounded-full p-1 shadow-lg cursor-pointer hover:bg-gray-100"
        />
      </div>
      <div style={{ maxWidth: "12rem" }}>
        <img
          alt=""
          src={src}
          className="flex-shrink-0 rounded-lg object-cover h-48"
        />
      </div>
    </div>
  );
}
