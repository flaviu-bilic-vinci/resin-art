import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import SocialMedia from './Components/Body/SocialMedia/SocialMedia'

function App() {

  return (
    <>
      <Header
        title={"ResinArt"}>
      </Header>

      <SocialMedia
        title={"Onze team, volg ons op social media !"}>
      </SocialMedia>
      
      <Footer
        title={"PlaceHolder Footer Title"}
        subTitle={"© 2024 ResinArt by VIA Tienen. All rights reserved."}>
      </Footer>
    </>
  )
}

export default App
