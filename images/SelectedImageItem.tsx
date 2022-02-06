import { FaTimes } from 'react-icons/fa';

interface SelectedImageItemProps{
  handleRemoveClick:()=>void
  src?:string
}

export function SelectedImageItem({ handleRemoveClick, src }:SelectedImageItemProps) {
  return (
    <div>
      <div className="relative z-10">
        <FaTimes
          size={26}
          color="#000"
          onClick={handleRemoveClick}
          className="bg-white absolute right-1 top-1 rounded-full p-1 shadow-lg cursor-pointer hover:bg-gray-100"
        />
      </div>
      <div>
        <img
          alt=""
          src={src}
          className="rounded-lg aspect-square object-cover"
        />
      </div>
    </div>
  );
}
