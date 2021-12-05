import { FaImage } from "react-icons/fa";

interface ImageUploadProps {
  text?: String;
}

export function ImageUpload({ text }: ImageUploadProps) {
  return (
    <div className="bg-gray-200 h-40 rounded-lg flex flex-col justify-center items-center">
      <FaImage size={25} />
      <div className="">Adicionar imagens</div>
    </div>
  );
}
