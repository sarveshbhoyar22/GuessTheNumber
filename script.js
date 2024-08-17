const btn = document.getElementById("btn");
const guess = document.getElementById("guess");
const count = document.querySelector(".count");
const remain = document.querySelector(".remain");
const body = document.querySelector("body");
const guessSlot = document.querySelector("#pg");
const attempts = document.querySelector(".first");
const playbtn = document.querySelector(".play");
const scorebtn = document.querySelector(".score");
const rulesbtn = document.querySelector(".Rules");
const pabtn = document.querySelector("#pa");
const random = Math.floor(Math.random() * 100) + 1;
// console.log(random);
let c = 0;
const prevguess = [];

let start = false;
document.addEventListener("keypress", function(e){
  if(e.key==='Enter'){
    e.preventDefault();
    if (start === false) {
      playbtn.click();
      
      
    }
  }
  
})

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
      remain.innerHTML = `You won in ${c+1} attempts`;
      body.style.backgroundColor = "green";
      /* */
      btn, (this.innerHTML = "Play Again");
      
      btn.style.display = "none";

      scorebtn.style.display = "block";
      guessSlot.style.display = "none";
      attempts.style.display = "none";
      playbtn.style.display = "none";
      attempts.style.display = "none";
      pabtn.style.display="block";
      document.querySelector("#count").style.display = "none";
      document.querySelector(".label").style.display = "none";
      document.querySelector("#pg").style.display = "none";
      document.querySelector("#pg1").style.display = "none";
      
      pabtn.addEventListener("click", function () {
        window.location.reload();
      });
    } else {
      //displaying previous gusses

      const pg = guess.value;
      prevguess.push(pg);
      guess.value = "";
      guessSlot.innerHTML += pg;

      guessSlot.innerHTML = prevguess;
      c++;
      if (c >= attemptsValue) {
        remain.innerHTML = `Game Over, Random Number is ${random} `;
        remain.style.color = "white";
        // btn.disabled = true;
        body.style.backgroundColor = "red";
        btn.style.backgroundColor = "(45, 53, 206)";
        // btn, (this.innerHTML = "Play Again");
        btn.style.animation = "blinker 2s linear infinite";
        btn.style.display = "none";
        remain.style.backgroundColor = "red";

        ///
        pabtn.style.display = "block";
        document.querySelector(".score").style.display = "block";
        guess.style.display = "none";
        count.style.display = "none";
        remain.style.display = "block";
        guessSlot.style.display = "none";
        attempts.style.display = "none";
        playbtn.style.display = "none";
        attempts.style.display = "none";
        //pabtn

        document.querySelector("#count").style.display = "none";
        document.querySelector(".label").style.display = "none";
        document.querySelector("#pg").style.display = "none";
        document.querySelector("#pg1").style.display = "none";
        ///

        pabtn.addEventListener("click", function () {
          window.location.reload();
        });
      } else {
        remain.style.backgroundColor = "red";
        body.style.backgroundColor = "#08113e";
        if (guessValue > random) {
          remain.innerHTML = "It is higher than actual Number ";
          remain.style.color = "white";
        } else {
          remain.innerHTML = "It is lower than actual Number";
          remain.style.color = "white";
        }
        // console.log(c);

      }
    }
  }
  
});

playbtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (attempts.value < 1 || isNaN(attempts.value)) {
    alert(" Enter a number >= 1 ");
  } else {
    start=true;
    guess.style.display = "block";
    btn.style.display = "block";
    count.style.display = "block";
    remain.style.display = "block";
    guessSlot.style.display = "block";
    attempts.style.display = "block";
    playbtn.style.display = "none";
    attempts.style.display = "none";
    rulesbtn.style.display = "none";
    document.querySelector("#count").style.display = "block";
    document.querySelector(".label").style.display = "block";
    document.querySelector("#pg").style.display = "block";
    document.querySelector("#pg1").style.display = "block";
    guess.focus();
  }
});


const guessValue = parseInt(guess.value);
if (c >= parseInt(attempts.value)  || guessValue === random) {
  
  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
    
      pabtn.click();
    }
  });
}else{

  guess.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
   

      btn.click();
    }
  });
  
  attempts.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      playbtn.click();
    }
  });
}



let s = false;
scorebtn.addEventListener("click", function (e) {
  e.preventDefault();
  if(s===false){
  guessSlot.style.display = "block";
  document.querySelector("#count").style.display = "block";
  document.querySelector(".label").style.display = "block";
  document.querySelector("#pg").style.display = "block";
  document.querySelector("#pg1").style.display = "block";
  s = true;
  }else{
    guessSlot.style.display = "none";
    document.querySelector("#count").style.display = "none";
    document.querySelector(".label").style.display = "none";
    document.querySelector("#pg").style.display = "none";
    document.querySelector("#pg1").style.display = "none";
    s=false;
}
});

let s2 = false;
rulesbtn.addEventListener("click", function (e) {
  e.preventDefault();
  
  if(s2===false){
  
  attempts.style.display = "none";
  playbtn.style.display = "none";
  document.querySelector(".rules").style.display = "block";
  s2=true;}
  else{
    attempts.style.display = "block";
    playbtn.style.display = "block";
  document.querySelector(".rules").style.display = "none";

    s2=false;
  }
});

window.onload = function () {
  attempts.focus();
};


