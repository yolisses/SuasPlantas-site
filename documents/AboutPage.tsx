import Image from 'next/image';
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
            {
              ([
                {
                  emoji: '🙂',
                  title: 'Foco no usuário',
                  description: 'Estamos sempre de portas abertas para críticas, sugestões e ideas. Queremos entregar a melhor experiência possível.',
                },
                {
                  emoji: '🤝',
                  title: 'Honestidade',
                  description: 'Damos muito valor a confiança. Para nós, nada pode comprar a sensação agir corretamente, sempre com muita transparência e empatia.',
                },
                {
                  emoji: '✨',
                  title: 'Curiosidade',
                  description: 'Acreditamos que sempre existirão infinitas funcionalidades melhores que podem se tornar realidade, por isso nunca deixamos de procurá-las',
                },

              ]).map((topic) => (
                <div className="flex-1 sm:max-w-sm">
                  <h3 className="text-xl text-center">
                    <span className="text-2xl text-center">
                      {topic.emoji}
                      {' '}
                    </span>
                    {topic.title}
                  </h3>
                  <p>
                    {topic.description}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
