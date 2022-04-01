import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { gray400, green700 } from '../common/colors';

interface PostButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    Icon:IconType
    count?:number
    selected?:boolean
}

export function PostButton({
  Icon, count, selected, ...rest
}:PostButtonProps) {
  return (
    <button
      className="center-row text-sm font-semibold group text-gray-400 hover:text-green-700"
      {...rest}
    >
      <span className="group-hover:bg-green-200 p-3 rounded-full transition-all duration-150">
        <Icon size={18} color={selected ? green700 : gray400} />
      </span>
      {count}
    </button>
  );
}
