import "./faq.css";

export default function Faqs() {
  return (
    <section className="faq-section">
      <h1>Perguntas frequentes</h1>
      <div>
        <details>
          <summary>O que são bolsas feitas à mão?</summary>
          <div>
            <p>
              Bolsas feitas à mão são peças únicas e exclusivas, confeccionadas
              manualmente por artesãos habilidosos. Elas são conhecidas pela sua
              alta qualidade e atenção aos detalhes..
            </p>
          </div>
        </details>
        <details>
          <summary>
            Quais materiais são usados nas bolsas feitas à mão da Pontynhos de
            Amor?
          </summary>
          <div>
            <p>
              Usamos uma variedade de materiais de alta qualidade, incluindo
              couro genuíno, tecidos artesanais, e materiais sustentáveis para
              criar nossas bolsas.
            </p>
          </div>
        </details>
        <details>
          <summary>As bolsas feitas à mão são duráveis?</summary>
          <div>
            <p>
              Sim, as bolsas feitas à mão são extremamente duráveis devido à
              atenção meticulosa aos detalhes e ao uso de materiais de alta
              qualidade. Elas são projetadas para durar muitos anos.
            </p>
          </div>
        </details>
        <details>
          <summary>Como posso cuidar da minha bolsa feita à mão?</summary>
          <div>
            <p>
              Para cuidar da sua bolsa feita à mão, evite expô-la a condições
              extremas de umidade e calor. Limpe-a com um pano macio e seco e,
              para manchas específicas, siga as instruções de cuidado fornecidas
              com o produto.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
