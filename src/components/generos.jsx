import { Zap, Mic2, Guitar, Radio } from "lucide-react";

const genres = [
    { name: "Pop", icon: <Mic2 /> },
    { name: "Rock", icon: <Guitar /> },
    { name: "Electrónica", icon: <Zap /> },
    { name: "Latino", icon: <Radio /> },
];

export const Genres = () => {
  return (
    <section className="genres">
      <div className="section-container">
        <h2 className="section-title">
          Encuentra tu <span className="title-accent">Ritmo Perfecto</span>
        </h2>
        <p className="section-subtitle">
            No importa tu mood, tenemos el género que encaja contigo.
        </p>
        <div className="genres-grid">
          {genres.map((genre) => (
            <div key={genre.name} className="genre-card">
              <div className="genre-icon">{genre.icon}</div>
              <h3 className="genre-name">{genre.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};