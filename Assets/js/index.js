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
    }
    else {
        timer++;
        console.log(timer);
    }
}
setInterval(countDown,1000);