import Link from 'next/link';

export function Status500Page() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-10">
      <div className="text-6xl font-extralight mt-44">500</div>
      <div className="max-w-sm">
        Não foi possível carregar essa página.
        Ela pode estar sob problemas técnicos temporários.
      </div>
      <div className="pt-4 flex flex-row gap-10">
        <Link href="/">
          <a className="link">
            Página inicial
          </a>
        </Link>
        <Link href="/contact">
          <a className="link">
            Contato
          </a>
        </Link>
      </div>
    </div>
  );
}
