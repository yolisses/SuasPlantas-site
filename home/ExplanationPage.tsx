import Link from 'next/link';

export function ExplanationPage() {
  return (
    <div className="p-4 center-col">
      <div className="flex flex-col max-w-xl gap-4">
        <div className="text-green-700 text-xl">Bem vindo(a) ao SuasPlantas.com</div>
        <p>
          A missão desse site é tornar super fácil encontrar
          pessoas por perto que gostem
          plantas, com quem seja possível trocar mudas e sementes. Aqui é possível filtrar
          os resultados por estado e cidade.
        </p>
        <p>
          A versão atual é apenas de teste, para as pessoas do grupo
          {' '}
          <strong>
            Doação de mudas, sementes e dicas de cultivo
          </strong>
          {' '}
          do Facebook. Nela aparecem nome, cidade e estado de algumas pessoas
          do grupo, que tornaram essas informações públicas (que já são visíveis para qualquer
          um no Facebook). Caso queria, é possível excluir os próprios dados do site.
        </p>
        <p>
          Queremos muito saber o que você acha da ideia. Por isso é possível enviar opnião
          {' '}
          <Link href="/contact">
            <a className="link">
              diretamente pelo site, Facebook, Instagram ou Whatsapp
            </a>
          </Link>
          . Se gostarem do site, vamos
          continuar adicionando mais funcionalidades.
        </p>
        <p>
          Esperamos que esse site lhe seja útil. É toltamente grátis.
        </p>
        <Link href="/fb">
          <button className="main-button">Ir para a página inicial</button>
        </Link>
      </div>
    </div>
  );
}
