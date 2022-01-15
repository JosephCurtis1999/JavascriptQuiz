var questions = [
    {
        title: "How do you link a javascript file to your html file?",
        choices: ["link tag", "script src tag", "save to folder"],
        answer: "script src tag"
    },
    {
        title: "Which one of the following is a javascript data type?",
        choices: ["string", "function", "button"],
        answer: "string"
    },
    {
        title: "What operator is used for comparing both values and types?",
        choices: ["===", "==", ">="],
        answer: "==="
    },
    {
        title: "Is Javascript a statically typed or dynamically typed language?",
        choices: ["statically", "dynamically"],
        answer: "dynamically"
    },
    {
        title: "Which one of the following is a way to declare a javascript variable?",
        choices: ["choose", "select", "const"],
        answer: "const"
    }
]

let start = document.querySelector(".startbtn");
let retry = document.querySelector(".buttons .restart");
let score = document.querySelector(".buttons .score");
let next = document.querySelector(".buttons .next");

let Questionbox = document.querySelector(".Questionbox");
let time = document.querySelector(".Timer");

let questionNo = document.querySelector("QuestionNo")
let questionText = document.querySelector("questionText");

let choice1 = document.querySelector("#choice1");
let choice2 = document.querySelector("#choice2");
let choice3 = document.querySelector("#choice3");

let Highscore = document.querySelector(".Highscore");

let choice_que = document.querySelector(".choice_que");

var index = 0;
var timer = 0;
var interval = 0;

let correct = 0;

var userAns = '';

start.addEventListener("click" , ()=>{
    start.style.display = "none";
})

var countDown = ()=>{
    if(timer === 60)
    {
        clearInterval(interval);
        next.question.click();
    }
    else {
        timer++;
        time.innerText = timer;
    }
}
setInterval(countDown,1000);

var loadData = ()=>{
    questionNo.innerText = index + 1 + ". ";
    questionText.innerText = questions[index].question;
    choice1.innerText = questions[index].choice1;
    choice2.innerText = questions[index].choice2;
    choice3.innerText = questions[index].choice3;

    timer = 0;
}

next.addEventListener("click" , ()=>{
    Choices.style.display = "block";

    interval = setInterval(countDown, 1000);
    loadData();

})

choice_que.forEach( (choices,choiceNo) =>{
    choices.addEventListener("click" , ()=>{
        choices.classList.add("active");

        if(choiceNo === questions[index].answer)
        {
            correct++;
        }
        else 
        {
            correct += 0;
        }
        clearInterval();
    })
});   

scorebtn.addEventListener('click', function(event) {
    event.preventDefault()
    
    
    var finalScore = {
      initials: initials.value,
      score: JSON.parse(userScore)
    }
    
    localStorage.setItem('intials', JSON.stringify(userScore))
    renderHighscore()
    
    }
    )
    
    function renderHighscore() {
      var highScores = JSON.parse(localStorage.getItem('finalScore'))
      if (!highScores) {
        highScores = [];
      }
    
      console.log(finalScore.initials + finalScore.score)
      document.appendChild.textContent = finalScore.initials + finalScore.score
    
    }