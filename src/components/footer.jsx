import { Music, Instagram, Twitter, Youtube, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Music className="footer-logo-icon" />
              <span className="footer-logo-text">YoutubePirata</span>
            </div>
            <p className="footer-description">
              Tu plataforma musical definitiva. Descubre, escucha y comparte la mejor música del mundo.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-title">Música</h4>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-link">
                    Top Charts
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Nuevos Lanzamientos
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Géneros
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Radio
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Comunidad</h4>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-link">
                    Artistas
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Eventos
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Podcasts
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Soporte</h4>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-link">
                    Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram className="social-icon" />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter className="social-icon" />
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <Youtube className="social-icon" />
            </a>
          </div>

          <div className="footer-copyright">
            <p>
              © 2025 YoutubePirata. Hecho con <Heart className="heart-icon" /> para los amantes de la música.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};