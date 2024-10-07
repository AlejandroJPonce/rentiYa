import HeroSection from "../components/base/HeroSection"
import CardsMiddleSection from "../components/base/CardsMiddleSection"
import AppFooter from "../components/base/AppFooter"
import Announcer from "../components/base/Announcer"
import MainServices from "../components/landing/MainServices"
import Navigator from "../components/base/Navigation/Navigator";


export default function LandingPage () {
  return (
    <>
      <Navigator />
      <HeroSection />
      <CardsMiddleSection />
      <Announcer />
      <MainServices />
      <AppFooter />
    </>
  )
}