import { Link } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { Header } from '../common/Header';

export function AboutPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="h-32 sm:h-auto overflow-hidden flex flex-col justify-end">
            <Image
              src="/cover5.jpg"
              width={450}
              height={450}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col gap-2 p-4 flex-1">
            <h1 className="text-3xl">Nossa missão é que você tenha todas as plantas que quiser</h1>
            <p>
              Nossa equipe trabalha todo dia para que você sempre tenha com quem trocar plantas.
            </p>
            <p>
              Sabemos que plantas são uma das poucas coisas que se mutiplicam quando você entrega
              uma parte a alguém, e por isso queremos tornar super simples, fácil e rápido
              encontrá-las perto de você. Todos saem ganhando!
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl text-center">
            Nossos valores
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 p-4">
            <div className="flex-1 sm:max-w-sm">
              <h3 className="text-xl text-center">
                <span className="text-2xl text-center">
                  🙂
                  {' '}
                </span>
                Foco no usuário
              </h3>
              <p>
                Estamos sempre de portas abertas para críticas, sugestões e ideas.
                Queremos entregar a melhor experiência possível.
              </p>
            </div>
            <div className="flex-1 sm:max-w-sm">
              <h3 className="text-xl text-center">
                <span className="text-2xl text-center">
                  🤝
                  {' '}
                </span>
                Honestidade
              </h3>
              <p>
                Damos muito valor a confiança. Para nós, nada pode comprar a
                sensação agir corretamente, sempre com muita transparência e empatia.
              </p>
            </div>
            <div className="flex-1 sm:max-w-sm">
              <h3 className="text-xl text-center">
                <span className="text-2xl text-center">
                  ✨
                  {' '}
                </span>
                Curiosidade
              </h3>
              <p>
                Somos facinados em testar novas ideias e procurar funcionalidades
                inovadoras. Se pensar em uma,
                {' '}
                <NextLink href="/contact">
                  <Link href="/contact">
                    envia pra gente!
                  </Link>
                </NextLink>

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
