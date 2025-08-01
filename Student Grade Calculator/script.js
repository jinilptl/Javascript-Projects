console.log("student grade calculator");

let submit_Btn = document.querySelector(".submit-btn");
let [gujarati, science, social, maths, sanskrit, english] =
  document.querySelectorAll(
    "#gujarati,#science,#social,#maths,#sanskrit,#english"
  );

submit_Btn.addEventListener("click", (e) => {
  e.preventDefault();

  let Gujarati_value = +gujarati.value;
  let Science_value = +science.value;
  let Social_value = +social.value;
  let Maths_value = +maths.value;
  let Sanskrit_value = +sanskrit.value;
  let English_value = +english.value;

  if (
    !Gujarati_value ||
    !Science_value ||
    !Social_value ||
    !Maths_value ||
    !Maths_value ||
    !Sanskrit_value ||
    !English_value
  ) {
    alert("please enter the value");
    return;
  }

  // please check this

  // gujarati.addEventListener('change',(e)=>{
  //   console.log("e is ",e);

  //   if(e.target.max){
  //     return e.target.value=Math.min(+e.target.max,e.target.value||0 )
  //   }
  // })

  if (
    Gujarati_value > 100 ||
    Science_value > 100 ||
    Social_value > 100 ||
    Maths_value > 100 ||
    Maths_value > 100 ||
    Sanskrit_value > 100 ||
    English_value > 100
  ) {
    alert("please enter value under or equal to 100");
    return;
  }

  let TotalMarks =
    Gujarati_value +
    Science_value +
    Social_value +
    Maths_value +
    Sanskrit_value +
    English_value;

  console.log("TotalMarks is ", TotalMarks);

  let percentage = (TotalMarks / 600) * 100;

  console.log("percentages is ", percentage);

  function findGrade() {
    if (percentage <= 100 && percentage >= 80) {
      return "A";
    } else if (percentage <= 79 && percentage >= 60) {
      return "B";
    } else if (percentage <= 59 && percentage >= 40) {
      return "C";
    } else {
      return "F";
    }
  }

  let Grade = findGrade();

  console.log("Grade is ", Grade);

  function checkPassFail() {
    if (Grade === "A" || Grade === "B" || Grade === "C") {
      return true;
    } else {
      return false;
    }
  }

  let PassOrFail = checkPassFail();

  let RightCard = document.querySelector(".card-right");

  const resultHTML = `
  <div class="result-box">
    <h2>🎓 Result Summary</h2>
    <ul class="marks-list">
      <li>Gujarati: ${Gujarati_value}</li>
      <li>English: ${English_value}</li>
      <li>Sanskrit: ${Sanskrit_value}</li>
      <li>Maths: ${Maths_value}</li>
      <li>Social Science: ${Social_value}</li>
      <li>Science: ${Science_value}</li>
    </ul>
    <p><strong>Total Marks:</strong> ${TotalMarks} / 600</p>
    <p><strong>Percentage:</strong> ${percentage.toFixed(2)} %</p>
    <p><strong>Grade:</strong> ${Grade}</p>
    <p class="status pass">${
      PassOrFail
        ? "🎉 Congratulations! You have Passed."
        : "❌ Sorry, you have failed. Please work harder and try again. Your efforts matter!"
    }</p>
  </div>
`;

  RightCard.innerHTML = resultHTML;
});
