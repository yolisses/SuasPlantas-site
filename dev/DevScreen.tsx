import { useEffect, useState } from 'react';
import { api } from '../api/api';

export function DevScreen() {
  const [data, setData] = useState();
  async function getPlants() {
    const res = await api.get('plants');
    setData(res.data);
  }

  useEffect(() => { getPlants(); }, []);

  return (
    <div className="p-2">
      hello
      {JSON.stringify(data)}
    </div>
  );
}
