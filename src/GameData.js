const Card = require('./Card');

const GameData = (prevGameDataObject) => {

  let self;

  if(prevGameDataObject){

    self = JSON.parse(JSON.stringify(prevGameDataObject));

  } else { 
    
    self = {
      score: 0,
      drawStack: [],
      discardStack: [],
      oneStack: [],
      twoStack: [],
      threeStack: [],
      fourStack: [],
    }
  };

  const gameDataFunctions = (self) => ({

    ensureDeckIsLoaded: () => {

      if(self.drawStack.length < 1){
        
        let newGameData = GameData(self);

        newGameData.drawStack.push(Card('2C'));
        newGameData.drawStack.push(Card('2H'));
        newGameData.drawStack.push(Card('2S'));
        newGameData.drawStack.push(Card('2D'));
        newGameData.drawStack.push(Card('3C'));
        newGameData.drawStack.push(Card('3H'));
        newGameData.drawStack.push(Card('3S'));
        newGameData.drawStack.push(Card('3D'));
        newGameData.drawStack.push(Card('4C'));
        newGameData.drawStack.push(Card('4H'));
        newGameData.drawStack.push(Card('4S'));
        newGameData.drawStack.push(Card('4D'));
        
        return newGameData;

      } else {

        // to be idempotent, if the map isn't empty return
        // what's passed in unchanged
        return self;
      }

    },

    deal: () => {

      let newGameData = GameData(self);

      newGameData.oneStack.push(newGameData.drawStack.pop());
      newGameData.twoStack.push(newGameData.drawStack.pop());
      newGameData.threeStack.push(newGameData.drawStack.pop());
      newGameData.fourStack.push(newGameData.drawStack.pop());


      return newGameData;
    },    

  });

  const newSelf = Object.assign(
    self,
    gameDataFunctions(self),
  );

  return newSelf;
}

module.exports = GameData;