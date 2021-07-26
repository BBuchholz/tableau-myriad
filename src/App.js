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

  const drawLegendTextId = 'draw-legend-text-id';
  const drawJpgPathId = 'draw-jpg-path-id';

  const discardLegendTextId = 'discard-legend-text-id';
  const discardJpgPathId = 'discard-jpg-path-id';

  const stackOneLegendTextId = 'stack-one-legend-text-id';
  const stackOneJpgPathId = 'stack-one-jpg-path-id';

  const stackTwoLegendTextId = 'stack-two-legend-text-id';
  const stackTwoJpgPathId = 'stack-two-jpg-path-id';

  const stackThreeLegendTextId = 'stack-three-legend-text-id';
  const stackThreeJpgPathId = 'stack-three-jpg-path-id';

  const stackFourLegendTextId = 'stack-four-legend-text-id';
  const stackFourJpgPathId = 'stack-four-jpg-path-id';

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

  // individual useEffects below will replace this
  useEffect(() => {

    //TODO: move game data modal settings into individual useEffects like below
    // have a useState variables for each div just like legend text 
    // then when deals happen we can update the text representation


    // look here: https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/
    // under heading "useEffect" it shows scoped constants within the effect, maybe that's what we need
    // also look here
    // https://blog.logrocket.com/guide-to-react-useeffect-hook/
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
  }, [gameData]);



  // handle discardLegendText changes
  useEffect(() => {
    
    // see: https://stackoverflow.com/a/1358815/670768 
    let div = document.getElementById(discardLegendTextId);
    div.textContent = discardLegendText;

  }, [discardLegendText]);

  // handle discardJpgPath changes
  useEffect(() => {

    let img = document.getElementById(discardJpgPathId);
    img.src = discardJpgPath;
    
  }, [discardJpgPath]);

  // handle drawLegendText changes
  useEffect(() => {
    
    // see: https://stackoverflow.com/a/1358815/670768 
    let div = document.getElementById(drawLegendTextId);
    div.textContent = drawLegendText;

  }, [drawLegendText]);

  // handle drawJpgPath changes
  useEffect(() => {

    let img = document.getElementById(drawJpgPathId);
    img.src = drawJpgPath;
    
  }, [drawJpgPath]);

  // handle stackOneLegendText changes
  useEffect(() => {
    
    // see: https://stackoverflow.com/a/1358815/670768 
    let div = document.getElementById(stackOneLegendTextId);
    div.textContent = stackOneLegendText;

  }, [stackOneLegendText]);

  // handle stackOneJpgPath changes
  useEffect(() => {

    let img = document.getElementById(stackOneJpgPathId);
    img.src = stackOneJpgPath;
    
  }, [stackOneJpgPath]);

  // handle stackTwoLegendText changes
  useEffect(() => {
    
    // see: https://stackoverflow.com/a/1358815/670768 
    let div = document.getElementById(stackTwoLegendTextId);
    div.textContent = stackTwoLegendText;

  }, [stackTwoLegendText]);

  // handle stackTwoJpgPath changes
  useEffect(() => {

    let img = document.getElementById(stackTwoJpgPathId);
    img.src = stackTwoJpgPath;
    
  }, [stackTwoJpgPath]);

  // handle stackThreeLegendText changes
  useEffect(() => {
    
    // see: https://stackoverflow.com/a/1358815/670768 
    let div = document.getElementById(stackThreeLegendTextId);
    div.textContent = stackThreeLegendText;

  }, [stackThreeLegendText]);

  // handle stackThreeJpgPath changes
  useEffect(() => {

    let img = document.getElementById(stackThreeJpgPathId);
    img.src = stackThreeJpgPath;
    
  }, [stackThreeJpgPath]);

  // handle stackFourLegendText changes
  useEffect(() => {
    
    // see: https://stackoverflow.com/a/1358815/670768 
    let div = document.getElementById(stackFourLegendTextId);
    div.textContent = stackFourLegendText;

  }, [stackFourLegendText]);

  // handle stackFourJpgPath changes
  useEffect(() => {

    let img = document.getElementById(stackFourJpgPathId);
    img.src = stackFourJpgPath;
    
  }, [stackFourJpgPath]);

  
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
                   legendTextId={drawLegendTextId}
                   jpgPathId={drawJpgPathId} />
          </Col>
          <Col xs={5}>
            <DiscardStack
              jpgPathId={discardJpgPathId}
              legendTextId={discardLegendTextId} />
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
            <Stack handleClick={handleStackOneClick}
                   legendTextId={stackOneLegendTextId}
                   jpgPathId={stackOneJpgPathId} />
          </Col>
          <Col xs={5}>
            <Stack handleClick={handleStackTwoClick} 
                   legendTextId={stackTwoLegendTextId}
                   jpgPathId={stackTwoJpgPathId} />
          </Col>
        </Row>
        <Row> 
          <Col xs={5}>
            <Stack handleClick={handleStackThreeClick} 
                   legendTextId={stackThreeLegendTextId}
                   jpgPathId={stackThreeJpgPathId} />
          </Col>
          <Col xs={5}>
            <Stack handleClick={handleStackFourClick} 
                   legendTextId={stackFourLegendTextId}
                   jpgPathId={stackFourJpgPathId} />
          </Col>
        </Row>
      </Container> 
    </div>
  );

}

function DiscardStack({jpgPath, gameData, jpgPathId, legendTextId}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Stack handleClick={handleShow} 
             legendTextId={legendTextId}
             jpgPathId={jpgPathId} />

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
                legendTextId,
                jpgPathId}) {
  
  let className = '';
  if(isHorizontal) {
    //className += 'rotated'
  }
  
  return (
    <div className='stack' onClick={handleClick}>
      <p id={legendTextId}></p>
      <img 
          className={className}
          id={jpgPathId}
          src=''
          alt={"card goes here"} /> 
    </div>
  );
}

export default App;
