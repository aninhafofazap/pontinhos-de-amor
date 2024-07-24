"use client";

import { useState } from "react";
import "./faq.css";

const faqs = [
  {
    question: "O que são bolsas feitas à mão?",
    answer:
      "Bolsas feitas à mão são peças únicas e exclusivas, confeccionadas manualmente por artesãos habilidosos. Elas são conhecidas pela sua alta qualidade e atenção aos detalhes.",
  },
  {
    question:
      "Quais materiais são usados nas bolsas feitas à mão da Pontynhos de Amor?",
    answer:
      "Usamos uma variedade de materiais de alta qualidade com materiais sustentáveis para criar nossas bolsas.",
  },
  {
    question: "As bolsas feitas à mão são duráveis?",
    answer:
      "Sim, as bolsas feitas à mão são extremamente duráveis devido à atenção meticulosa aos detalhes e ao uso de materiais de alta qualidade. Elas são projetadas para durar muitos anos.",
  },
  {
    question: "Como posso cuidar da minha bolsa feita à mão?",
    answer:
      "Para cuidar da sua bolsa feita à mão, evite expô-la a condições extremas de umidade e calor. Limpe-a com um pano macio e seco e, para manchas específicas, siga as instruções de cuidado fornecidas com o produto.",
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer:
      "Na Pontynhos de Amor, oferecemos diversas opções de pagamento para sua conveniência. Você pode realizar o pagamento via PIX, boletos bancários ou cartões de crédito. Escolha a opção que melhor se adapta às suas necessidades e aproveite suas compras com facilidade e segurança.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Perguntas frequentes</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button className="faq-button" onClick={() => toggleFAQ(index)}>
            <span className="faq-question">{faq.question}</span>
            <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
              &#9650;
            </span>
          </button>
          {openIndex === index && <div className="faq-panel">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}
