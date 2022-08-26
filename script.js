const wordText = document.querySelector(".word");
hintText = document.querySelector(".hint span");
timeText = document.querySelector(".hint b");
inputField = document.querySelector(".input");
refreshBtn = document.querySelector(".refresh");
checkwordBtn = document.querySelector(".checkword");

let correctWord, timer;

const initTimer = maxTime => {
   timer = setInterval(() => {
      if(maxTime > 0){
         maxTime--;
        return timeText.innerText = maxTime;
      }
    clearInterval(timer);
    alert('Time up! ${userWord.toUpperCase()} is a correct word');
   }, 1000);
}

const initGame = () => {
   innitTimer(30);
   let randomObj = words[Math.floor(Math.random()* words.length)];
   let wordArray = randomObj.word.split("");
   for (let i = wordArray.length -1; i > 0; i--){
    let j = Math.floor(Math.random()* (i+1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
   }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length)
   console.log(randomObj);
}

initGame();

const checkWord = () => {
   let userWord = inputField.value.toLocaleLowerCase();

   if(!userWord) return alert('please enter a word');

   if(userWord !== correctWord) return alert('Omo... ${userWord} is not a correct word');

   alert('congrats! ${userWord.toUpperCase()} is a correct word');
}

refreshBtn.addEventListener("click", initGame)
checkwordhBtn.addEventListener("click", checkWord)
