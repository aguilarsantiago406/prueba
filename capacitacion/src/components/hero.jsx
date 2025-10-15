import { Play, Headphones, Music2, Radio } from "lucide-react";

export const Hero = () => {
  const statsContent = (
    <div className="hero-stats">
      <div className="stat-item">
        <div className="stat-number">50M+</div>
        <div className="stat-label">Canciones</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">2M+</div>
        <div className="stat-label">Artistas</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">100K+</div>
        <div className="stat-label">Álbumes</div>
      </div>
    </div>
  );

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Music2 className="badge-icon" />
            <span>Descubre nueva música</span>
          </div>
          <h1 className="hero-title">
            Vive la música como
            <span className="title-accent"> nunca antes</span>
          </h1>
          <p className="hero-description">
            Sumérgete en un universo sonoro sin límites. Desde los clásicos atemporales hasta los últimos éxitos, encuentra tu ritmo perfecto con SoundWave.
          </p>
          <div className="hero-actions">
            <a href="#" className="btn-primary">
              <Play className="btn-icon" />
              Empezar a escuchar
            </a>
            <button className="btn-secondary">
              <Headphones className="btn-icon" />
              Explorar géneros
            </button>
          </div>
          {statsContent}
        </div>

        <div className="hero-visual-wrapper">
          <div className="visual-card">
            <div className="visual-icon">
              <Radio className="radio-icon" />
            </div>
            <div className="visual-content">
              <h3>Streaming en Vivo</h3>
              <p>Conecta con artistas en tiempo real</p>
            </div>
          </div>
          <div className="floating-elements">
            <div className="float-element element-1">♪</div>
            <div className="float-element element-2">♫</div>
            <div className="float-element element-3">♪</div>
          </div>
          {/* MEJORA 2: Estadísticas para escritorio, se moverán aquí con CSS */}
          {statsContent}
        </div>
      </div>
    </section>
  );
};