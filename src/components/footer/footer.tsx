import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <img src="/images/barras.png" />

        <h2 className="footer-title">Pontynhos de amor</h2>
        <p className="footer-description">
          O amor é o fio que une nossas vidas. Deixe cada momento ser tecido com
          carinho e compaixão.
        </p>
      </div>
      <div className="footer-section-infos">
        <div className="sections">
          <h3>Contato</h3>
          <p>55 999999999</p>
          <p>Petani.info@email.com</p>
        </div>
        <div className="sections">
          <h3>Bolsas</h3>
          <p>Produtos</p>
        </div>
        <div className="sections">
          <h3>Suporte</h3>
          <p>FAQ</p>
          <p>Help center</p>
          <p>Sitemap</p>
        </div>
        <div className="sections">
          <h3>Endereço</h3>
          <p>Brasil Rua 2 Senador Canedo Anapolis Goias 750000</p>
        </div>
      </div>
      <div className="diretory">
        <p className="diretory-info">
          © 2024 Pontynhos de Amor - Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default Footer;
