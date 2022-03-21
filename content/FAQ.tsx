import { useState } from 'react';
import { FAQItem } from './FAQItem';

export function FAQ() {
  const [current, setCurrent] = useState<string>('price');

  return (
    <>
      <FAQItem
        id="price"
        current={current}
        setCurrent={setCurrent}
        title="Esse serviço é grátis?"
      >
        <strong>
          Sim
        </strong>
        . Totalmente gratuito. Acreditamos que as funcionalidades
        mais legais só aparecem quando tem pessoas usando o
        serviço. Por isso, o serviço é totalmente gratuito e
        algum dia encontremos uma forma boa para todos de manter o site.
      </FAQItem>
      <FAQItem
        id="availability"
        current={current}
        setCurrent={setCurrent}
        title="As plantas daqui são só para troca?"
      >
        Também temos a opção de vender e doar plantas. Você pode
        selecionar se quer ou não ver as opções que estão a venda.
      </FAQItem>
      <FAQItem
        id="sending"
        current={current}
        setCurrent={setCurrent}
        title="Como faço para receber as plantas?"
      >
        Basta pedir para ir buscar ou que seja enviado pelo correio.
        Quem pede o envio é quem paga o frete, adiantado.
      </FAQItem>
    </>
  );
}
