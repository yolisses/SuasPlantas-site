import Link from 'next/link';
import Image from 'next/image';

export function AboutPage() {
  return (
    <div className="center-col gap-4">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <div className="h-32 sm:h-auto overflow-hidden flex flex-col justify-end">
          <Image
            src="/about/about.jpg"
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
              🙂 Foco no usuário
            </h3>
            <p>
              Estamos sempre de portas abertas para críticas, sugestões e ideias.
              Queremos entregar a melhor experiência possível.
            </p>
          </div>
          <div className="flex-1 sm:max-w-sm">
            <h3 className="text-xl text-center">
              ✌️ Honestidade
            </h3>
            <p>
              Damos muito valor a confiança. Para nós, nada pode comprar a
              sensação agir corretamente, sempre com muita transparência e empatia.
            </p>
          </div>
          <div className="flex-1 sm:max-w-sm">
            <h3 className="text-xl text-center">
              ✨ Curiosidade
            </h3>
            <p>
              Somos fascinados em testar novas ideias e procurar funcionalidades
              inovadoras. Se pensar em uma,
              {' '}
              <Link href="/contact">
                <a className="link">
                  envia pra gente!
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
