import { Music, Moon, Sun, Menu } from "lucide-react";

export const Header = ({ isDark, toggleTheme }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <Music className="logo-icon" />
          <span className="logo-text">YoutubePirata</span>
        </div>

        <nav className="navigation">
          <ul className="nav-list">
            <li>
              <a href="#inicio" className="nav-link">
                Inicio
              </a>
            </li>
            <li>
              <a href="#artistas" className="nav-link">
                Artistas
              </a>
            </li>
            <li>
              <a href="#albums" className="nav-link">
                Álbumes
              </a>
            </li>
            <li>
              <a href="#playlists" className="nav-link">
                Playlists
              </a>
            </li>
            <li>
              <a href="#contacto" className="nav-link">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema">
            {isDark ? <Sun className="theme-icon" /> : <Moon className="theme-icon" />}
          </button>

          <button className="menu-mobile" aria-label="Menú">
            <Menu className="menu-icon" />
          </button>
        </div>
      </div>
    </header>
  );
};