import "./App.css";
import Topmenu from "./components/Navbar/Topmenu"
import Hero from "./components/Hero/Hero";
import AmazeNFT from "./components/Amaze NFT/AmazeNFT";
import Collections from "./components/Collections/Collections";
import FeaturedNFT from "./components/Featured NFT/FeaturedNFT";
import SignUpNFT from "./components/Sign Up NFT/SignUpNFT";
import DiscoverNFT from "./components/Discover NFT/DiscoverNFT";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div class="container">
      <Topmenu />
      <Hero />
      <AmazeNFT/>
      <Collections/>
      <FeaturedNFT/>
      <SignUpNFT/>
      <DiscoverNFT/>
      <Footer/>
    </div>
  );
}

export default App;
