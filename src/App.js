import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useContext } from 'react';

const GameContext = React.createContext();

function App() {
  return (
    <div className="App">
      <Container className="tableau" fluid>
        <Row>
          <Col>Draw Stead</Col>
          <Col>Discard Stead</Col>
        </Row>
        <Row>
          <Col>
            <Stack />
          </Col>
          <Col>
            <Stack />
          </Col>
        </Row>
        <Row> 
          <Col>
            <Stack />
          </Col>
          <Col>
            <Stack />
          </Col>
        </Row>
      </Container> 
    </div>
  );
}

function Stack() {
  const jpgPath = "https://raw.githubusercontent.com/BBuchholz/make-ten-mod/jpg-mod/public/images/cards-jpg/2D.jpg";
  const cardKey = "2D";
  return (
    <div>
      <img src={jpgPath}
           alt={"cardKey:" + cardKey} /> 
    </div>
  );
}

export default App;
