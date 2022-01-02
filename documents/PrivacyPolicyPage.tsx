import { Header } from '../common/Header';
import { TextLink } from '../common/TextLink';
import styles from './PrivacyPolicyPage.module.css';

export function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <div className="p-4 flex flex-col items-center">
        <div className="max-w-3xl">
          <h1 className={styles.title}>
            Política de Privacidade
          </h1>
          <p>
            Nós do SuasPlantas valorizamos a privacidade e seu poder de decidir sobre seus dados.
            Para que você possa fazer um uso mais consciente dos nossos serviços, esperamos que
            leia esse documento, que foi escrito focando em simplicidade. Se tiver alguma dúvida
            ou mesmo sugestão de melhoria, pedimos que entre em contato conosco, através de um
            de nossos meios de comunicação disponíveis em
            {' '}
            <TextLink href="https://suasplantas.com/contact">
              nossa página de contato
            </TextLink>
            .
          </p>
          <p>
            Através de nossos serviços é possível acessar serviços de terceiros, por exemplo,
            páginas no Instagram. Não temos poder sobre esses serviços e essa política de
            privacidade não se aplica a eles.
          </p>
          <h2 className={styles.topic}>
            Os dados que coletamos
          </h2>
          <p>
            Para que nossos serviços sejam úteis para você, coletamos os dados que você fornece
            voluntariamente, como texto para a página de usuário, publicações que você cria e
            mensagens que envia em nossos serviços. É responsabilidade do usuário não divulgar
            dados sigilosos, como números de cartão de crédito e senhas. Esses dados podem ser
            alterados pelo usuário caso queira.
          </p>
          <p>
            Para a criação de contas em nossos serviços, usamos ferramentas de autenticação de
            terceiros, como os botões de continuar com o Google e Facebook. Desses coletamos o
            email, para poder autorizar os usuários e para eventuais avisos, o nome e foto de
            perfil usados nesses provedores, para que o usuário tenha nome e foto de perfil nos
            nossos serviços.
          </p>
          <p>
            Damos a possibilidade de informar dados de contato, como número de Whatsapp e nome
            de usuário do Instagram, para que outros usuários possam entrar em contato. Essas
            informações ficam públicas. Em caso de mensagens indesejáveis, recomendamos fortemente
            usar as funções de bloquear usuários nessas plataformas.
          </p>
          <p>
            Além disso, salvamos informações sobre o uso dos serviços, como o tempo de acesso,
            páginas visitadas e cliques. Essas informações servem para que possamos entregar
            melhores experiências ao usuário e criar novos produtos. Para isso, usamos serviços
            de terceiros, que guardam os dados de forma segura e privada.
          </p>
          <p>
            Também coletamos o endereço de IP, que pode ser usado para verificações de segurança
            e personalização.
          </p>
          <h2 className={styles.topic}>
            Uso de cookies
          </h2>
          <p>
            Para fornecer nossos serviços, fazemos uso de cookies. Os cookies são informações salvas
            no dispositivo do usuário. Estes servem para que possamos garantir uma boa experiência
            do usuário, por exemplo salvando informações para que não tenham que ser recarregadas, e
            identificando unicamente o usuário para que possa usufruir de sua conta. Serviços de
            terceiros também podem usar cookies.
          </p>
          <p>
            Você pode, a qualquer momento, desativar o uso de cookies quando usando um navegador
            para acessar os serviços, mas isso pode prejudicar algumas funcionalidades.
          </p>
          <h2 className={styles.topic}>
            Processamento dos dados
          </h2>
          <p>
            Para que possamos entregar nossos serviços a você, precisamos salvar os dados em algum
            meio e processá-los. Para isso usamos fornecedores externos, que se comprometem a manter
            os dados seguros e privados. Em caso de determinação legal, talvez tenhamos que fornecer
            alguns dados ao poder público, como em caso de danos à propriedade intelectual, venda de
            material ilícito ou outros crimes virtuais.
          </p>
          <h2 className={styles.topic}>
            Compartilhamento de dados
          </h2>
          <p>
            Nós valorizamos sua confiança, por isso nunca vendemos dados. Apesar disso, os dados que
            o usuário torna públicos, como nome, foto de perfil e publicações, podem ser acessados
            por terceiros.
          </p>
        </div>
      </div>
      <div className="mt-16 p-2">
        Tenha um ótimo dia 👋
      </div>
    </>
  );
}
