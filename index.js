let passwordEl = document.getElementById("password");
let timerEl = document.getElementById("timer");
let myimgEl = document.getElementById("myimg");
let errormsgEl = document.getElementById("errormsg");
let counter = 10;

let intervalId = setInterval(()=>{
  counter -= 1;
  timerEl.textContent = counter;
  if(counter === 0){
    clearInterval(intervalId);
    timerEl.style.display = "none";
    myimgEl.src = "https://tse1.mm.bing.net/th?id=OIP.RQae3dnDloFEGYcfb1BkegHaHF&pid=Api&P=0&h=180";
  }
},1000)

function checkpswd(){
    let value = passwordEl.value;
    if(value === "Sharayu"){
    clearInterval(intervalId);
    timerEl.style.display = "none";
    myimgEl.src = "https://tse1.mm.bing.net/th?id=OIP.vLQ92JEIVNhEJM2NA3O_jQHaEK&pid=Api&P=0&h=180";
    }
    else{
    clearInterval(intervalId);
    timerEl.style.display = "none";
    myimgEl.src = "https://tse1.mm.bing.net/th?id=OIP.RQae3dnDloFEGYcfb1BkegHaHF&pid=Api&P=0&h=180";  
    }

}