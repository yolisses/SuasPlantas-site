import { devIndicator } from '../utils/devIndicator';

export function DefaultPageMeta() {
  return (
    <>
      <title>
        {devIndicator}
        Suas Plantas - Trocar mudas de plantas
      </title>
      <meta
        name="description"
        content="Site para trocar mudas de plantas com vários outros usuários. Super simples, seguro e com grande variedade."
      />
    </>
  );
}
