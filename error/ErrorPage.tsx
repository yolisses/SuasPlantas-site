import { Header } from '../common/Header';

interface ErrorPageProps{
    message:string,
    status:number
}

export function ErrorPage({ message, status }:ErrorPageProps) {
  return (
    <div className="flex h-full w-full fixed">
      <Header />
      <div className="flex flex-1 items-center justify-center pb-20 p-2">
        <div className="max-w-sm flex gap-2">
          <div className="text-3xl text-center pb-4">Ops!</div>
          <div>Um erro inesperado aconteceu e por isso não foi possível carregar a página</div>
          <div>
            {!!status
              && (
                <div className="text-red-800">
                  status
                  {' '}
                  {status}
                </div>
              )}
            {' '}

            {!!message
              && (
                <div className="text-red-800">
                  {message }
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
