import Link from 'next/link';
import { Footer } from '../footer/Footer';

export function Status404Page() {
  return (
    <>
      <div className="flex-1 center-col justify-center px-10">
        <div className="text-6xl font-extralight mt-44">404</div>
        <div className="max-w-sm">
          Não foi possível encontrar essa página.
          Ela pode não existir ou estar sob problemas técnicos temporários.
        </div>
        <div className="pt-4 flex flex-row gap-10">
          <Link href="/">
            <a href="link" className="secondary-button">
              Página inicial
            </a>
          </Link>
          <Link href="/contact">
            <a href="link" className="secondary-button">
              Contato
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
