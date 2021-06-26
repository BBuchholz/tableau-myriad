import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container className="tableau" fluid>
        <Row>
          <Col>Draw Stead</Col>
          <Col>Discard Stead</Col>
        </Row>
        <Row>
          <Col>Stead 1</Col>
          <Col>Stead 2</Col> 
          <Col>Stead 3</Col>
          <Col>Stead 4</Col>
        </Row>
      </Container> 
    </div>
  );
}

export default App;
