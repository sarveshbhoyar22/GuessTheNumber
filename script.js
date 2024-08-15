const btn = document.getElementById("btn");
const guess = document.getElementById("guess");
const count = document.querySelector(".count");
const remain = document.querySelector(".remain");
const body = document.querySelector("body");
const guessSlot = document.querySelector("#pg");
const attempts = document.querySelector(".first");
const random = Math.floor(Math.random() * 100) + 1;
console.log(random);
let c = 0;
const prevguess = [];

btn.addEventListener("click", function (e) {
  e.preventDefault();
    const attemptsValue = parseInt(attempts.value);
  count.innerHTML = c + 1;
  const guessValue = parseInt(guess.value);
  //validate the guess
  if (guessValue < 1 || guessValue > 100 || isNaN(guessValue)) {
    remain.innerHTML = "Enter a number between 1 and 100";
    remain.style.backgroundColor = "yellow";
    remain.style.color = "black";
  } else {
    //checking

    if (guessValue === random) {
      remain.style.backgroundColor = "green";
      remain.style.color = "white";
      remain.innerHTML = "You won";
      body.style.backgroundColor = "green";
      /* */
      btn, (this.innerHTML = "Play Again");
      btn.addEventListener("click", function () {
        window.location.reload();
      });
    } else {
      //displaying previous gusses
      
      const pg = guess.value;
      prevguess.push(pg);
      guess.value = '';
      guessSlot.innerHTML += pg;

      guessSlot.innerHTML = prevguess;
      c++;
      if (c >= attemptsValue) {
        remain.innerHTML = `Game Over, Random Number is ${random} `;
        remain.style.color = "white";
        // btn.disabled = true;
        body.style.backgroundColor = "red";
        btn.style.backgroundColor = "red";
        btn,this.innerHTML = "Play Again";
        btn.addEventListener("click", function () {
          window.location.reload();
        })
      } else {
       remain.style.backgroundColor = "red";
       body.style.backgroundColor = "#617285";
       if (guessValue > random) {
         remain.innerHTML = "It is higher than actual Number ";
         remain.style.color = "white";
       } else {
         remain.innerHTML = "It is lower than actual Number";
         remain.style.color = "white";
       }
      }

      
    }
  }

});

guess.addEventListener("keypress", function (e) {
    if(e.key==='Enter'){
        e.preventDefault();
        btn.click();
    }
})