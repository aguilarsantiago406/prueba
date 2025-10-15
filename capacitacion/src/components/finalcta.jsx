import { Play } from "lucide-react";

export const FinalCTA = () => {
    return (
        <section className="final-cta">
            <div className="section-container cta-container">
                <h2 className="cta-title">¿Listo para una experiencia musical sin límites?</h2>
                <p className="cta-subtitle">Únete a millones de oyentes y encuentra tu próxima canción favorita.</p>
                <a href="#" className="btn-primary cta-button">
                    <Play className="btn-icon" />
                    Empezar a Escuchar Gratis
                </a>
            </div>
        </section>
    );
}