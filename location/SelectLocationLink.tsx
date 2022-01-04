import { Button } from '@mui/material';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';

export interface SelectLocationLinkProps{
  text:string
}

export function SelectLocationLink({ text }:SelectLocationLinkProps) {
  return (
    <Button>
      <div className="flex flex-row items-center m-2 cursor-pointer gap-1">
        <FaMapMarkerAlt size={20} color="#080" />
        <div className="font-semibold" style={{ color: '#080' }}>
          {text || 'Selecionar local'}
        </div>
      </div>
    </Button>
  );
}
