

const quizData=[
    {
        question:'1. What is the capital of India?',
        options:["Mumbai", "Delhi", "Kolkata", "Chennai"],
        corect:1
    },
     {
    question: "2. Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
     corect:3
  },
  {
    question: "3. What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
     corect:1
  },
  {
    question: "4. What year was JavaScript created?",
    options: ["1995", "2000", "1990", "1999"],
     corect:0
  },
  {
    question: "5. Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<script>", "<css>", "<link>"],
     corect:0
  }
]


// element get form html

let questionDiv=document.querySelector('.question');

let answer_radio=document.querySelectorAll('.Input-radio');

let options_1=document.querySelector('.options_1')
let options_2=document.querySelector('.options_2')
let options_3=document.querySelector('.options_3')
let options_4=document.querySelector('.options_4')

let submit_btn=document.querySelector(".submit-btn");


let currentQuestionIndex=0;

let score=0;

// load quize function 

let loadQuize=()=>{

    let currentQuestion=quizData[currentQuestionIndex].question;

    console.log('currentQuestion is ',currentQuestion);

    let OptionsformArray=quizData[currentQuestionIndex].options
    console.log(OptionsformArray);
    
questionDiv.textContent=currentQuestion;

console.log();
options_1.textContent=OptionsformArray[0]
options_2.textContent=OptionsformArray[1]
options_3.textContent=OptionsformArray[2]
options_4.textContent=OptionsformArray[3]

}

loadQuize();
