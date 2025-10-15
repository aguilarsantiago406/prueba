import { PlayCircle } from "lucide-react";

const hits = [
  { id: 1, title: "Cómo Te Atreves", artist: "Morat", img: "https://th.bing.com/th/id/R.82a7ef848d66aed48415cd13567170ab?rik=%2fJQPEIMULUlvig&pid=ImgRaw&r=0" },
  { id: 2, title: "Faded", artist: "Alan Walker", img: "https://i1.sndcdn.com/artworks-000169731686-zgvff2-t500x500.jpg" },
  { id: 3, title: "Como Tú", artist: "3 AM", img: "https://i.ytimg.com/vi/9hb4PW-SSh8/maxresdefault.jpg" },
  { id: 4, title: "Wake Me Up", artist: "Avicii", img: "https://industriamusical.com/wp-content/uploads/2014/02/Avicii-Wake-Me-Up-Spotify.png" },
  { id: 5, title: "Labios Compartidos", artist: "Maná", img: "https://guitarraviva.com/wp-content/uploads/2023/09/Mana-Labios_Compartidos_acordes-guitarra.jpg" },
  { id: 6, title: "Patadas de Ahogado", artist: "Humbe", img: "https://www.cesarfullhdmusic.com/wp-content/uploads/2023/11/Patadas-de-Ahogado.jpg" },
  { id: 7, title: "El Ritmo de mi Corazón", artist: "Grupo 5", img: "https://i.scdn.co/image/ab67616d0000b273cc18878d944c58f091948036" },
  { id: 8, title: "Canto Herido", artist: "Agua Marina", img: "https://radiocumbiamix.com/img/Imagen5.jpg" },
];

export const TopHits = () => {
  return (
    <section className="tophits">
      <div className="section-container">
        <h2 className="section-title">
          Los Éxitos que <span className="title-accent">Dominan el Mundo</span>
        </h2>
        <p className="section-subtitle">
          Descubre las canciones y álbumes que todos están escuchando ahora mismo.
        </p>
        <div className="hits-grid">
          {hits.map((hit) => (
            <div key={hit.id} className="hit-card">
              <img
                src={hit.img.startsWith('URL_') ? `https://via.placeholder.com/400?text=${hit.artist.replace(' ', '+')}` : hit.img}
                alt={`Carátula de ${hit.title}`}
                className="hit-image"
              />
              <div className="hit-overlay">
                <PlayCircle className="play-icon" />
                <div className="hit-info">
                  <h3 className="hit-title">{hit.title}</h3>
                  <p className="hit-artist">{hit.artist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};