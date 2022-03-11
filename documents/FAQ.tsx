import { useState } from 'react';
import { FAQItem } from './FAQItem';

export function FAQ() {
  const [current, setCurrent] = useState<string>('1');

  return (
    <>
      <FAQItem
        id="1"
        current={current}
        setCurrent={setCurrent}
        title="Esse serviço é grátis?"
      >
        <strong>
          Sim
        </strong>
        . Totalmente gratuito. Acreditamos que as funcionalidades mais legais só aparecem quando tem pessoas usando o serviço. Por isso, o serviço é totalmente gratuito e algum dia encontremos uma forma boa para todos de manter o site.
      </FAQItem>
      <FAQItem
        id="2"
        current={current}
        setCurrent={setCurrent}
        title="As plantas daqui são só para troca?"
      >
        Também temos a opção de vender e doar plantas. Você pode selecionar se quer ou não ver as opções que estão a venda.
      </FAQItem>
      <FAQItem
        id="3"
        current={current}
        setCurrent={setCurrent}
        title="É seguro mostrar minha localização?"
      >
        Mostramos apenas uma localização aproximada: cidade e estado. Mas caso queira é possível mostrar a localização real. Você também pode escrever o endereço na descrição do perfil.
      </FAQItem>
      <FAQItem
        id="4"
        current={current}
        setCurrent={setCurrent}
        title="Como faço para receber as plantas?"
      >
        Basta pedir para ir buscar ou que seja enviado pelo correio. Quem pede o envio é quem paga o frete, adiantado.
      </FAQItem>
    </>
  );
}
