const quizData = [
  {
    question: "1. What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    corect: 1,
  },
  {
    question: "2. Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    corect: 3,
  },
  {
    question: "3. What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Creative Style Sheets",
    ],
    corect: 1,
  },
  {
    question: "4. What year was JavaScript created?",
    options: ["1995", "2000", "1990", "1999"],
    corect: 0,
  },
  {
    question: "5. Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<script>", "<css>", "<link>"],
    corect: 0,
  },
];

// element get form html

let questionDiv = document.querySelector(".question");

let answer_radio = document.querySelectorAll(".Input-radio");

let [options_1, options_2, options_3, options_4] = document.querySelectorAll(
  ".options_1 ,.options_2,.options_3,.options_4"
);

let submit_btn = document.querySelector(".submit-btn");
let container = document.querySelector(".quiz-container");

let currentQuestionIndex = 0;

let score = 0;

// load quize function

let loadQuize = () => {
  let currentQuestion = quizData[currentQuestionIndex].question;

  let OptionsformArray = quizData[currentQuestionIndex].options;

  questionDiv.textContent = currentQuestion;

  options_1.textContent = OptionsformArray[0];
  options_2.textContent = OptionsformArray[1];
  options_3.textContent = OptionsformArray[2];
  options_4.textContent = OptionsformArray[3];
};

loadQuize();

let getSelectedOption = () => {
  let ans_index;

  answer_radio.forEach((currentradio, index) => {
    if (currentradio.checked) {
      ans_index = index + 1;
    }
  });

  return ans_index;
};

let deselectedRadio = () => {
  return answer_radio.forEach((curentradio) => {
    if (curentradio.checked) {
      curentradio.checked = false;
    }
  });
};

submit_btn.addEventListener("click", () => {
  let selectOptionIndex = getSelectedOption();

  if (selectOptionIndex - 1 === quizData[currentQuestionIndex].corect) {
    score++;
  }

  if (!selectOptionIndex) {
    alert("please select the options");
    return;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuize();
    deselectedRadio();
  } else {
    container.innerHTML = `
  <div id="result-box" style="text-align: center; padding: 30px; background: #e0ffe0; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
    <h2 style="color: #2e7d32;">🎉 Quiz Completed!</h2>
    <p style="font-size: 18px; margin: 20px 0;"><strong>Your Score:</strong> <span id="score" style="color: #388e3c;">${score} / ${quizData.length}</span></p>
    <button onclick="location.reload()" style="padding: 12px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer; transition: 0.3s;">🔁 Restart Quiz</button>
  </div>
`;
  }
});
