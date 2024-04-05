import FeatureSection from "./components/ui/FeatureSection"
import { FooterWithSocialLinks } from "./components/ui/FooterWithSocialLinks"
import { GalleryWithCarousel } from "./components/ui/GalleryWithCarousel"
import Header from "./components/ui/Header"
import LogoClouds from "./components/ui/LogoClouds"
import TeamSection from "./components/ui/TeamSection"

function App() {

  return (
    <div>
      <Header/>
      <GalleryWithCarousel/>
      <FeatureSection/>
      <LogoClouds/>
      <TeamSection/>
      <FooterWithSocialLinks/>
    </div>
  )
}

export default App
