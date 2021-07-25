const Card = (cardKey) => {


  function cardKeyToImagePath(cardKey){
    //just temporarily pulling from the repo for sandboxing
    return "https://raw.githubusercontent.com/BBuchholz/" + 
           "make-ten-mod/jpg-mod/public/images/cards-jpg/" + 
           cardKey + ".jpg";
  }

  const self = {
    cardKey: cardKey,
    cardImgPath: cardKeyToImagePath(cardKey),
  };

  return self;
}

module.exports = Card;