import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import SocialMedia from './Components/Body/SocialMedia/SocialMedia'
import TeamIntroduction from './Components/Body/TeamIntroduction/TeamIntroduction'

function App() {

  return (
    <>
      <Header
        title={"ResinArt"}>
      </Header>

      <TeamIntroduction
        title={"Wie zijn we ?"}
        content={"bla bla bla"}>
      </TeamIntroduction>

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
