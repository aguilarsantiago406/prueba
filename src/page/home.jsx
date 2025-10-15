import { useTheme } from "../dark/dark.jsx"; 
import Header from '../components/header.jsx';
import { Hero } from "../Components/hero.jsx";
import { TopHits } from "../components/tophits.jsx";
import { Genres } from "../Components/generos.jsx";
import { FeaturedArtists } from "../components/artistas.jsx";
import { FinalCTA } from "../components/finalcta.jsx";
import { Footer } from "../Components/footer.jsx";
import "../Styles/estilos.css";

const Page = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="home-container">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <TopHits />
        <Genres />
        <FeaturedArtists />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Page;