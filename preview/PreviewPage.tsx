import { useEffect, useState } from 'react';
import Router from 'next/router';
import { Spinner } from '../common/Spinner';
import { usePreview } from './PreviewContext';

export function PreviewPage({ query }:any) {
  const { code } = query!;
  const [error, setError] = useState<any>();
  const { refresh } = usePreview();

  useEffect(() => {
    try {
      refresh(code!);
      Router.push('/');
    } catch (err) {
      setError(err);
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen-no-header bg-green pb-12">
      {error
        ? (
          <div className="max-w-sm p-4">
            <div>
              Não foi possível achar o convite
              {' '}
              <span className="bg-gray-100 p-1 rounded-md font-mono">
                {code}
              </span>
            </div>
            Por favor verifique se o endereço da página está correto
          </div>
        )
        : (
          <>
            <Spinner />
            <span>
              Carregando convite
              {' '}
              <span className="bg-gray-100 p-1 rounded-md font-mono">
                {code}
              </span>
            </span>
          </>
        )}
    </div>
  );
}
