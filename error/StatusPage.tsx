import Link from 'next/link';
import { ReactNode } from 'react';

interface StatusPageProps{
    number:number
    text:ReactNode
}

export function StatusPage({ number, text }:StatusPageProps) {
  return (
    <div className="flex-1 center-col justify-center px-10">
      <div className="text-6xl font-extralight">{number}</div>
      <div className="max-w-sm">{text}</div>
      <div className="pt-4 flex flex-row gap-10">
        <Link href="/">
          <a className="secondary-button">
            Página inicial
          </a>
        </Link>
        <Link href="/contact">
          <a className="secondary-button">
            Contato
          </a>
        </Link>
      </div>
    </div>
  );
}
