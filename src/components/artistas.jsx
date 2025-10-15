import { ChevronLeft, ChevronRight } from "lucide-react";
const artists = [
    {
        name: "Maluma",
        img: "https://primicia.com.ve/wp-content/uploads/2023/03/D35ZDF6NYZEPBJE6MWHKWHUPLM.jpg"
    },
    {
        name: "Ozuna",
        img: "https://portal.andina.pe/EDPfotografia3/Thumbnail/2020/09/09/000708735W.jpg"
    },
    {
        name: "Philip Phillips",
        img: "https://th.bing.com/th/id/R.a2a2bc416d091bb93cabe7905ea093df?rik=4OFcK%2fZrUwNYSQ&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fnews%2fphillip-phillips-makes-history-on-billboard-with-home.jpg&ehk=CXD%2bS%2br21ma75jJhEhbQ4G0sA7Bt9HMUjgbd7KOO7h4%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Ed Sheeran",
        img: "https://th.bing.com/th/id/R.b9cf4779a4a58ad011cc2a727e16ef15?rik=vkT3mlSr6WilnQ&pid=ImgRaw&r=0"
    },
    {
        name: "Leo Dan",
        img: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/11/cb/50/11cb506c-072f-c506-b528-96cc4f554cd0/886443245242.jpg/1200x1200bf-60.jpg"
    },
];

export const FeaturedArtists = () => {
    return (
        <section className="artists">
            <div className="section-container">
                <h2 className="section-title">Artistas <span className="title-accent">en la Mira</span></h2>
                <p className="section-subtitle">Sigue de cerca a los talentos que están redefiniendo la música.</p>
                <div className="artists-carousel">
                    {/* En una app real, esto sería un carrusel funcional */}
                    <button className="carousel-nav prev"><ChevronLeft /></button>
                    {artists.map(artist => (
                        <div key={artist.name} className="artist-card">
                             <img
                                // Lógica para mostrar una imagen de respaldo si no has pegado el link
                                src={artist.img.startsWith('URL_') ? 'https://via.placeholder.com/150' : artist.img}
                                alt={`Foto de ${artist.name}`}
                                className="artist-image"
                            />
                            <h3 className="artist-name">{artist.name}</h3>
                        </div>
                    ))}
                    <button className="carousel-nav next"><ChevronRight /></button>
                </div>
            </div>
        </section>
    );
}