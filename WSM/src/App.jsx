import Header from "./components/Header";
import FreeShippingBanner from "./components/FreeShippingBanner";
import HeroBanner from "./components/HeroBanner";
import LandingParagraph from "./components/LandingParagraph";
import Specs from "./components/Specs";
import SecondParagraph from "./components/SecondParagraph";
import ImageSection from "./components/ImageSection";
import ThirdParagraph from "./components/ThirdParagraph";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <FreeShippingBanner/>
      <HeroBanner/>
      <LandingParagraph/>
      <Specs/>
      <SecondParagraph/>
      <ImageSection/>
      <ThirdParagraph/>
      <Footer/>
    </div>
  )
}

export default App
