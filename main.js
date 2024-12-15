// Snack inspiration message prompt:

const snack = ['an apple', 'a banana', 'a chocolatebar', 'a glass of wine, you deserve it!', 'some oatmeal', 'a carrot', 'a lovely beer'];

const sentence = ['You should go have ', 'Quinch that hunger with ', 'You deserve ', 'Stop you tummy from talking whale with ', 'Go have ', 'Something delicious? alright, go have ', 'Lets celebrate! get ']

const message = (sentence, snack) => {
    //first part of the message:
    let r1 = Math.floor(Math.random()* sentence.length);
    //console.log(r1);
    let randomSentence = sentence[r1];
    //console.log(randomSentence);

    //Snack part of the message:
    let r2 = Math.floor(Math.random()* snack.length);
    //console.log(r2);
   
    let randomSnack = snack[r2];
    //console.log(randomSnack);

    let wholeMessage = randomSentence + randomSnack

    //console.log(wholeMessage)
    return wholeMessage;
}

//message(sentence,snack);
console.log(message(sentence,snack))