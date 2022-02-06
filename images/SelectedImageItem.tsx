import { FaTimes } from 'react-icons/fa';

export function SelectedImageItem({ handleRemoveClick, src, hideCloseButton }) {
  return (
    <div>
      {!hideCloseButton && (
      <div className="relative z-10">
        <FaTimes
          size={26}
          color="#000"
          onClick={handleRemoveClick}
          className="bg-white absolute right-1 top-1 rounded-full p-1 shadow-lg cursor-pointer hover:bg-gray-100"
        />
      </div>
      )}
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
