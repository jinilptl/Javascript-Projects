let calculateBtn = document.querySelector(".calculate-btn");
let calculator_card = document.querySelector(".calculator-card");

function calculateDiscount(price, discount) {
  let calculateprice = price - price * (discount / 100);
  return calculateprice;
}

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let price = document.querySelector("#price");
  let discount = document.querySelector("#discount");

  let Price = +price.value;
  let Discount = +discount.value;
  let finalValue;
  if (Price > 0 && Discount > 0) {
    finalValue = calculateDiscount(Price, Discount);
    console.log("final value is ", finalValue);
  } else {
    alert("please enter proper price and discount value");
    return;
  }

  let discountedValue = Price * (Discount / 100);

  

  let output = document.createElement("div");
  output.setAttribute("class", "result-box");

  output.innerHTML = `
  <strong>🧾 Discounted Price:</strong> ₹${finalValue} <br>
  You saved <strong>${Discount}%</strong> on your original price of ₹${Price.toFixed(
    2
  )}.<br>
  That means your discounted value of <strong>${Discount}%</strong> is ₹${discountedValue.toFixed(
    2
  )}.
`;

  calculator_card.appendChild(output);
});
