import Link from 'next/link';

export function Status404Page() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-10">
      <div className="text-6xl font-extralight mt-44">404</div>
      <div className="max-w-sm">
        Não foi possível encontrar essa página.
        Ela pode não existir ou estar sob problemas técnicos temporários.
      </div>
      <div className="pt-4 flex flex-row gap-10">
        <Link href="/">
          <a href="link">
            Página inicial
          </a>
        </Link>
        <Link href="/contact">
          <a href="link">
            Contato
          </a>
        </Link>
      </div>
    </div>
  );
}
