console.log("function started");

// printName()

// function printName(){
//     console.log("jinil");

//  }

// let myfunc=function printName(){
//     return "jinil Patel"
// }

// console.log(myfunc());

// function multiply(v1,v2){
//     console.log(v1*v2);

// // }

// const multiply1=(v1,v2)=>{

//     console.log(v1*v2)

// }

// multiply1(1,2)

//  function getscore(...value){
//    let total=0;

//    value.forEach((val)=>{
//       total=val+total;
//    })

//    return total
//  }

// console.log(getscore(1,2,3,4,5))

// function func(){
//     return ;
// }

// console.log(func());

// function Calculator(discount){

//     return function(price){
//         return (price-price*(discount/100));

//     }
// }

// let ten = Calculator(10);
// let twenty=Calculator(20);
// console.log(Calculator(10)());

// console.log(ten(2000))
// console.log(ten(1000))
// console.log(twenty(2000));

// let price=document.querySelector('#price')
// let discount=document.querySelector('#discount')
let calculateBtn = document.querySelector(".calculate-btn");
let calculator_card=document.querySelector('.calculator-card')

function calculateDiscount(price, discount) {
  let calculateprice = price - price * (discount / 100);
  return calculateprice;
}

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let price = document.querySelector("#price");
  let discount = document.querySelector("#discount");
  let Result = document.querySelector(".finalh2");

  let Price = +price.value;
  let Discount = +discount.value;
let finalValue ;
  if(Price>0&&Discount>0){
 finalValue = calculateDiscount(Price, Discount);
  console.log("final value is ", finalValue);
  }else{
    alert('please enter proper price and discount value');
    return
  }
 

  let discountedValue = Price * (Discount / 100);

//   let output = document.querySelector("#output");
//   console.log(output);

  let output=document.createElement('div')
  output.setAttribute('class','result-box')

  output.innerHTML = `
  <strong>🧾 Discounted Price:</strong> ₹${finalValue} <br>
  You saved <strong>${Discount}%</strong> on your original price of ₹${Price.toFixed(
    2
  )}.<br>
  That means your discounted value of <strong>${Discount}%</strong> is ₹${discountedValue.toFixed(
    2
  )}.
`;

calculator_card.appendChild(output)
});
