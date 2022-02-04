import { FaExclamationTriangle } from 'react-icons/fa';
import { PreviewIndicator } from './PreviewIndicator';

export function PreviewWarn() {
  return (
    <div className="fixed bottom-0 rounded-lg">
      <div className="bg-emerald-800 text-white p-4 md:rounded-tr-3xl">
        <FaExclamationTriangle className="inline pb-1" size={20} />
        {' '}
        Para salvar as coisas marcadas com
        {' '}
        <PreviewIndicator />
        ,
        {' '}
        <span className="underline">
          crie uma conta
        </span>
      </div>
    </div>
  );
}
