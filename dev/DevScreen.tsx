import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { authStore } from '../auth/authStore';
import { Header } from '../common/Header';

export function DevScreen() {
  const [data, setData] = useState();

  async function getLink() {
    const res = await api.get('upload');
    console.log(res.data);
    setData(res.data);
  }

  useEffect(() => {
    api.defaults.headers.common.authorization = 's:4SvmsVDBJcnnUjEUtXc76a2AFgpeAYLo.uY71/ivMH9ZSNFKGOQWI/pck6RZy1WgUKNiUmg2iCBM';
    console.log('maroto', api.defaults.headers.common);

    if (authStore.token) { getLink(); }
  }, [authStore.token]);

  return (
    <div>
      <Header />
      {data}
    </div>
  );
}
