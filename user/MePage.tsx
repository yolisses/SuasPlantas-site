import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { useAuth } from '../auth/AuthContext';
import { Header } from '../common/Header';

export function MePage() {
  const [data, setData] = useState();
  async function getMe() {
    const res = await api.get('users/me');
    setData(res.data);
  }

  const { token } = useAuth();

  useEffect(() => {
    if (token) { getMe(); }
  }, [token]);

  return (
    <>
      <Header />
      <div className="p-2">
        hello
        {JSON.stringify(data)}
        {token}
      </div>
    </>
  );
}
