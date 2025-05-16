
//Create the arrays for the wisdom
const wisdom = {
    sign: ['star','moon','comet','sun','black hole'],
    fortune: ['good luck','ok luck','fantastic luck','bad luck','terrible luck'],
    advice: ['trust no one','eat all the sweets','go ot and enjoy nature','bake a cake','take this lightly','call a friend']
};

function getDailyWisdom() {
  // Select a random sign from wisdom.sign
  const randomSignIndex = Math.floor(Math.random() * wisdom.sign.length);
  const randomSign = wisdom.sign[randomSignIndex];

  // Select a random fortune from wisdom.fortune
  const randomFortuneIndex = Math.floor(Math.random() * wisdom.fortune.length);
  const randomFortune = wisdom.fortune[randomFortuneIndex];

  // Select a random advice from wisdom.advice
  const randomAdviceIndex = Math.floor(Math.random() * wisdom.advice.length);
  const randomAdvice = wisdom.advice[randomAdviceIndex];

  // Build and return the final sentence.
  return `You are a ${randomSign}. Your fortune is ${randomFortune} and your advice is ${randomAdvice} today!`;
}

// Example usage:
console.log(getDailyWisdom());
