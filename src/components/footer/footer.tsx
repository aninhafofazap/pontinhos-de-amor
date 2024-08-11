import Image from "next/image";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-section-reference">
          <div className="footer-section-reference-title">
            <Image src="/images/barras.png" alt="" width={22} height={46} />
            <h2 className="footer-title">Pontynhos de amor</h2>
          </div>
          <p className="footer-section-reference-description">
            O amor é o fio que une nossas vidas. Deixe cada momento ser tecido
            com carinho e compaixão.
          </p>
        </div>

        <div className="footer-section-links">
          <div className="sections">
            <h3>Contato</h3>
            <a href="tel:+55999999999">(55) 99999-9999</a>
            <a href="mailto:example@email.com">example@email.com</a>
          </div>

          <div className="sections">
            <h3>Bolsas</h3>
            <p>
              <a href="/sellers">Produtos</a>
            </p>
          </div>
          <div className="sections">
            <h3>Suporte</h3>
            <p>
              <a href="/faq">FAQ</a>
            </p>
          </div>
          <div className="sections">
            <h3>Redes sociais</h3>
            <p>
              <a href=" https://www.labzone.com.br/">Instagram</a>
            </p>
            <p>
              <a href=" https://www.labzone.com.br/">Facebook</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p className="footer-copyright-info">
          © 2024 Pontynhos de Amor - Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default Footer;
