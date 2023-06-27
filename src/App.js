import "./App.css";
import Topmenu from "./components/Navbar/Topmenu"
import Hero from "./components/Hero/Hero";
import AmazeNFT from "./components/Amaze NFT/AmazeNFT";
import Collections from "./components/Collections/Collections";
import FeaturedNFT from "./components/Featured NFT/FeaturedNFT";
function App() {
  return (
    <div class="container">
      <Topmenu />
      <Hero />
      <AmazeNFT/>
      <Collections/>
      <FeaturedNFT/>
    </div>
  );
}

export default App;
