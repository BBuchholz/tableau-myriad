import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
const GameData = require('./GameData');
const Card = require('./Card');

function App() {

  const showTestingAlerts = false;
    
  function cardKeyToImagePath(cardKey){
    const tempCard = Card(cardKey);
    return tempCard.cardImgPath;
  };

  function cardKeyArrToImagePath(cardKeyArr){
    let cardKey = peek(cardKeyArr);
    if(!cardKey){
      cardKey = '2D';
    }
    return cardKeyToImagePath(cardKey);
  }


  const [gameData, setGameData] = useState(GameData());
  
  const [drawLegendText, setDrawLegendText] = useState("");
  const [discardLegendText, setDiscardLegendText] = useState("");

  const [stackOneLegendText, setStackOneLegendText] = useState("");
  const [stackTwoLegendText, setStackTwoLegendText] = useState("");
  const [stackThreeLegendText, setStackThreeLegendText] = useState("");
  const [stackFourLegendText, setStackFourLegendText] = useState("");

  const [drawJpgPath, setDrawJpgPath] = useState("");
  const [discardJpgPath, setDiscardJpgPath] = useState("");

  const [stackOneJpgPath, setStackOneJpgPath] = useState("");
  const [stackTwoJpgPath, setStackTwoJpgPath] = useState("");
  const [stackThreeJpgPath, setStackThreeJpgPath] = useState("");
  const [stackFourJpgPath, setStackFourJpgPath] = useState("");

  useEffect(() => {

    // look here: https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/
    // under heading "useEffect" it shows scoped constants within the effect, maybe that's what we need
    setDiscardLegendText("x");
    setDrawLegendText(gameData.drawStack.length);
    setStackOneLegendText("x");
    setStackThreeLegendText("x");
    setStackTwoLegendText("x");
    setStackFourLegendText("x");
    setDrawJpgPath(cardKeyToImagePath("1B"));
    setStackOneJpgPath(cardKeyArrToImagePath(gameData.oneStack));
    setStackTwoJpgPath(cardKeyArrToImagePath(gameData.twoStack));
    setStackThreeJpgPath(cardKeyArrToImagePath(gameData.threeStack));
    setStackFourJpgPath(cardKeyArrToImagePath(gameData.fourStack));
    if(discardJpgPath === ""){
      setDiscardJpgPath(cardKeyToImagePath("2B"));
    }
  });
  
  function loadDeckIfNeeded(){
    
    const newGameData = gameData.ensureDeckIsLoaded();

    setGameData(newGameData);
  }

  function handleStackOneClick() {
    

  }

  function handleStackTwoClick() {

  }

  function handleStackThreeClick() {
    
  }

  function handleStackFourClick() {
    
  }

  function peek(arr){
    let idx = arr.length - 1;
    return arr[idx]
  }

  function drawCards() {

    const newGameData = gameData.deal();

    setGameData(newGameData);
  }

  function handleDrawClick() {

    loadDeckIfNeeded();
    drawCards();

  }


  return (
    <div className="App">
      <Container className="tableau" fluid>
        <Row>
          <Col xs={5}>
            <Stack handleClick={handleDrawClick} 
                   legendText={drawLegendText}
                   jpgPath={drawJpgPath} />
          </Col>
          <Col xs={5}>
            <DiscardStack
              jpgPath={discardJpgPath}
              gameData={gameData} />
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
            <Stack handleClick={handleStackOneClick} 
                   legendText={stackOneLegendText}
                   jpgPath={stackOneJpgPath} />
          </Col>
          <Col xs={5}>
            <Stack handleClick={handleStackTwoClick} 
                   legendText={stackTwoLegendText}
                   jpgPath={stackTwoJpgPath} />
          </Col>
        </Row>
        <Row> 
          <Col xs={5}>
            <Stack handleClick={handleStackThreeClick} 
                   legendText={stackThreeLegendText}
                   jpgPath={stackThreeJpgPath} />
          </Col>
          <Col xs={5}>
            <Stack handleClick={handleStackFourClick} 
                   legendText={stackFourLegendText}
                   jpgPath={stackFourJpgPath} />
          </Col>
        </Row>
      </Container> 
    </div>
  );

}

function DiscardStack({jpgPath, gameData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Stack handleClick={handleShow} 
             legendText={'Click Me'}
             jpgPath={jpgPath} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id='modal-game-data'>

    <p>Score:  {JSON.stringify(gameData.score)}</p>
    <p>Draw Stack:  {JSON.stringify(gameData.drawStack)}</p>
    <p>Discard Stack:  {JSON.stringify(gameData.discardStack)}</p>
    <p>One Stack: {JSON.stringify(gameData.oneStack)}</p>
    <p>two Stack: {JSON.stringify(gameData.twoStack)}</p>
    <p>three Stack: {JSON.stringify(gameData.threeStack)}</p>
    <p>four Stack: {JSON.stringify(gameData.fourStack)}</p>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function Stack({isHorizontal,
                handleClick,
                legendText,
                jpgPath}) {
  
  let className = '';
  if(isHorizontal) {
    //className += 'rotated'
  }
  
  return (
    <div className='stack' onClick={handleClick}>
      <p>[{legendText}]</p>
      <img 
          className={className}
          src={jpgPath}
          alt={"card goes here"} /> 
    </div>
  );
}

export default App;
