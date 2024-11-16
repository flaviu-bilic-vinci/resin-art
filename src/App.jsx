import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SocialMedia from './Components/Body/SocialMedia/SocialMedia';
import TeamIntroduction from './Components/Body/TeamIntroduction/TeamIntroduction';
import CardBody from './Components/Body/CardBody/CardBody';

function App() {
  return (
    <Container fluid={'md'}>
      <Header title={"ResinArt"} />

      <Row>
        <Col>
          <TeamIntroduction title={"Wie zijn we ?"} />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <p>Bla Bla Bla</p>
        </Col>
        <Col>
          <Col xs={12} md={6}>
            <img src="https://picsum.photos/300/300.webp" alt="PlaceHolderAlt" />
          </Col>
        </Col>
      </Row>

      <Row>
        <Col>
          <TeamIntroduction title={"Onze producten !"} />
        </Col>
      </Row>

      <Row>
          <CardBody />
      </Row>

      <Row>
        <Col>
          <SocialMedia title={"Onze team, volg ons op social media !"} />
        </Col>
      </Row>

      <Footer title={"PlaceHolder Footer Title"} subTitle={"© 2024 ResinArt by VIA Tienen. All rights reserved."} />
    </Container>
  );
}

export default App;
