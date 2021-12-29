import { Button } from '@mui/material';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';

export function SelectLocationLink() {
  return (
    <Link href="/select-location">
      <Button>
        <div className="flex flex-row items-center m-2 cursor-pointer">
          <FaMapMarkerAlt size={20} color="#080" />
          <div className="font-semibold" style={{ color: '#080' }}>
            Cajazeiras, Paraíba
          </div>
        </div>
      </Button>
    </Link>
  );
}
