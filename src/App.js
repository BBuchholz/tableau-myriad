import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';


function App() {



  function cardKeyToImagePath(cardKey){
    //just temporarily pulling from the repo for sandboxing
    return "https://raw.githubusercontent.com/BBuchholz/" + 
           "make-ten-mod/jpg-mod/public/images/cards-jpg/" + 
           cardKey + ".jpg";
  }

  const [drawDeckCards, setDrawDeckCards] = useState([]);
  const [discardPileCards, setDiscardPileCards] = useState([]);
  
  const [stackOneCards, setStackOneCards] = useState([]);
  const [stackTwoCards, setStackTwoCards] = useState([]);
  const [stackThreeCards, setStackThreeCards] = useState([]);
  const [stackFourCards, setStackFourCards] = useState([]);
  
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

  function loadDeck(){
    if(discardJpgPath === ""){
      setDiscardJpgPath(cardKeyToImagePath("2B"));
    }
    if(drawDeckCards.length < 1){
      drawDeckCards.push("2C");  
      drawDeckCards.push("2H");  
      drawDeckCards.push("2S");  
      drawDeckCards.push("2D"); 
      drawDeckCards.push("3C");  
      drawDeckCards.push("3H");  
      drawDeckCards.push("3S");  
      drawDeckCards.push("3D"); 
      drawDeckCards.push("4C");  
      drawDeckCards.push("4H");  
      drawDeckCards.push("4S");  
      drawDeckCards.push("4D");  
      setDrawLegendText(drawDeckCards.length);
      setDrawJpgPath(cardKeyToImagePath("1B"));
    }  
  }


  function handleStackOneClick() {
    

    alert(JSON.stringify(stackOneCards));
  }

  function handleStackTwoClick() {
    alert("StackTwo clicked");
  }

  function handleStackThreeClick() {
    alert("StackThree clicked");
  }

  function handleStackFourClick() {
    alert("StackFour clicked");
  }

  function peek(arr){
    let idx = arr.length - 1;
    return arr[idx]
  }

  function handleDrawClick() {
    // if(drawDeckCards.length < 1){
    //   alert("out of cards, redealing");
    //   loadDeck();
    // }
    
    // let cardKey = peek(drawDeckCards);
    // setDrawDeckCards(drawDeckCards.filter(key => key !== cardKey));
    // setDrawLegendText(drawDeckCards.length);

    // setStackOneCards([...stackOneCards, cardKey]);
    // setStackOneLegendText(cardKey);
    // setStackOneJpgPath(cardKeyToImagePath(cardKey));
    handleSingleDealToStack(stackOneCards, 
                            setStackOneCards, 
                            setStackOneLegendText, 
                            setStackOneJpgPath);

    handleSingleDealToStack(stackTwoCards, 
                            setStackTwoCards, 
                            setStackTwoLegendText, 
                            setStackTwoJpgPath);
    handleSingleDealToStack(stackThreeCards, 
                            setStackThreeCards, 
                            setStackThreeLegendText, 
                            setStackThreeJpgPath);
    handleSingleDealToStack(stackFourCards, 
                            setStackFourCards, 
                            setStackFourLegendText, 
                            setStackFourJpgPath);
  }

  function handleSingleDealToStack(stackArr, 
                                   setStackArr,
                                   setStackLegendText,
                                   setStackJpgPath){

    if(drawDeckCards.length < 1){
      alert("out of cards, redealing");
      loadDeck();
    }
    
    let cardKey = peek(drawDeckCards);
    setDrawDeckCards(drawDeckCards.filter(key => key !== cardKey));
    setDrawLegendText(drawDeckCards.length);

    setStackArr([...stackArr, cardKey]);
    setStackLegendText(cardKey);
    setStackJpgPath(cardKeyToImagePath(cardKey)); 
  }

  function handleDiscardClick() {
    alert("discard clicked");
  }



  loadDeck();

  return (
    <div className="App">
      <Container className="tableau" fluid>
        <Row>
          <Col xs={4}>
            <Stack isHorizontal="true" 
                   handleClick={handleDrawClick} 
                   legendText={drawLegendText}
                   jpgPath={drawJpgPath} />
          </Col>
          <Col xs={4}>
            <Stack isHorizontal="true" 
                   handleClick={handleDiscardClick} 
                   legendText={discardLegendText}
                   jpgPath={discardJpgPath} />
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Stack handleClick={handleStackOneClick} 
                   legendText={stackOneLegendText}
                   jpgPath={stackOneJpgPath} />
          </Col>
          <Col xs={4}>
            <Stack handleClick={handleStackTwoClick} 
                   legendText={stackTwoLegendText}
                   jpgPath={stackTwoJpgPath} />
          </Col>
        </Row>
        <Row> 
          <Col xs={4}>
            <Stack handleClick={handleStackThreeClick} 
                   legendText={stackThreeLegendText}
                   jpgPath={stackThreeJpgPath} />
          </Col>
          <Col xs={4}>
            <Stack handleClick={handleStackFourClick} 
                   legendText={stackFourLegendText}
                   jpgPath={stackFourJpgPath} />
          </Col>
        </Row>
      </Container> 
    </div>
  );
}


function Stack({isHorizontal,
                handleClick,
                legendText,
                jpgPath}) {
  
  let className = '';
  if(isHorizontal) {
    className += 'rotated'
  }
  
  return (
    <div className='stack' onClick={handleClick}>
      <p>{legendText}</p>
      <img 
          className={className}
          src={jpgPath}
          alt={"card goes here"} /> 
    </div>
  );
}

export default App;
