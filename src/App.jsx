import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SocialMedia from './Components/Body/SocialMedia/SocialMedia';
import TeamIntroduction from './Components/Body/TeamIntroduction/TeamIntroduction';
import CardBodyProducts from './Components/Body/CardBody/CardBodyProducts';
import CardBodyPersons from './Components/Body/CardBody/CardBodyPersons';

function App() {
  return (
    <Container fluid={'md'}>
      <Row className='mb-5'>
        <Col>
          <Header  title={"ResinArt"} />
        </Col>
      </Row>

      <Row >
        <Col>
          <TeamIntroduction title={"Wie zijn we ?"} />
        </Col>
      </Row>

      <Row className='mb-5'>
        <Col xs={12} md={6}>
          <p>Bla Bla Bla</p>
        </Col>
        
          <Col xs={12} md={6}>
            <img 
              src="https://picsum.photos/600/300.webp" 
              alt="PlaceHolderAlt"
              className="img-fluid" />
          </Col>
      </Row>

      <Row>
        <Col>
          <TeamIntroduction title={"Onze producten !"} />
        </Col>
      </Row>

      <Row>
          <CardBodyProducts />
      </Row>

      <Row>
        <Col>
          <SocialMedia title={"Onze team, volg ons op social media !"} />
        </Col>
      </Row>

      <Row>
      <CardBodyPersons/>
      </Row>

      <Footer title={"PlaceHolder Footer Title"} subTitle={"© 2024 ResinArt by VIA Tienen. All rights reserved."} />
    </Container>
  );
}

export default App;
