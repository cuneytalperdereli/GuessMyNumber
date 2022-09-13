//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasında rastgele sayi tut

let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//?
let score = 10;
// let topScore = 0;

//? LocalStorage'de topScore adıyla bir degisken olusturur.
let topScore = localStorage.getItem("topScore") || 0;
//? DOM-daki top-score degerini LocalStorageden okuyarak guncelle.
document.querySelector(".top-score").textContent = topScore;

//* CheckBtn basıldığında kontrolleri yap.
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");
  if (!guessInput) {
    msg.innerText = "Please Enter a Number";
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats You win <i class="fa-regular fa-face-smile-wink fa-2x"></i> `;
    // document.querySelector("body").style.background = "green";
    body.className = "bg-success";
    document.querySelector(".check-btn").disabled = true;

    if (score >= topScore) {
    //   topScore = score
    //? LocalStorage'de topScore adıyla bir degisken güncelle.
    localStorage.setItem("topScore",score);
    //? DOM-daki topScore degerini güncelle.
    document.querySelector(".top-score").textContent = score;
    }
    document.querySelector(".secret-number").textContent = randomNumber;

    //! eger rastgele != input.value
  } else {
    if (score > 1) {
      score--;
      guessInput > randomNumber
        ? (msg.innerHTML = `Decrease <i class="fa-solid fa-arrow-trend-down fa-2x"></i>`)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> Increase `);
      document.querySelector(".score").textContent = score;
    } else {
      msg.innerHTML = `You lost,please try again <i class="fa-solid fa-face-flushed fa-2x"></i>`;
      document.querySelector(".score").textContent = score - 1;
      body.className = "bg-danger";
      document.querySelector(".secret-number").textContent = randomNumber;
    }
  }
});


//* AgainBtn basıldığında Başlangıç Degerlerini yap.

document.querySelector(".again-btn").addEventListener("click",()=>{
    score = 10;
    document.querySelector(".score").textContent = score;
    randomNumber = Math.round(Math.random()*100);
    document.querySelector(".secret-number").textContent = "?"
    console.log(randomNumber);
    document.querySelector(".check-btn").disabled = false;
    document.querySelector("body").classList.remove("bg-success","bg-danger")
    document.querySelector(".guess-input").value = "";
})


//! LOCAL STORAGE - SESSION STORAGE
myObj = {a:1,b:2,c:3}

localStorage.setItem("OBJ",JSON.stringify(myObj));

const redObj = localStorage.getItem("OBJ")
const readObj = JSON.parse(localStorage.getItem("OBJ"));
console.log(readObj);











//? Eger input girilmediyse alert()

//! eger rastgele sayi === input.value
//? Tebrikler bildiniz.
//? background = green
//? eger score > topScore
//? topScore = score
//? secret_number = gorunur

//! Degilse
//! eger score > 0
//!! score = score -1
//? eger rasgele < input.value
//?   AZALT
//? Degilse
//?   ARTTIR
//! degilse
//? Uzgunuz kaybettiniz.

//* againBtn basıldığında kontrolleri yap.
