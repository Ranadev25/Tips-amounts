

const selectBill = document.querySelector(".select-bill");
const inputError = document.querySelector(".input-error");
const selectPerson = document.querySelector(".select-person");
const peopleError = document.querySelector(".people-error");
const moneyTips = document.querySelector(".money-tips");
const moneyTotal = document.querySelector(".money-total");
const resetbtn = document.querySelector(".resetbtn")
const fivepersent = document.querySelector(".parsent-num-5");
const tenpersent = document.querySelector(".parsent-num-10");
const fifteenpersent = document.querySelector(".parsent-num-15");
const twentyfivepersent = document.querySelector(".parsent-num-25");
const fiftypersent = document.querySelector(".parsent-num-50");
const custompersent = document.querySelector(".parsent-custom");


const persent = (text) => {

  const inputvalue = parseFloat(selectBill.value);
  if (!inputvalue || inputvalue <= 0) {
    selectBill.style.border = "1px solid red";
    inputError.innerHTML = "Enter your Bill";
    setTimeout(() => {
      selectBill.style.border = "1px solid #ddd";
      inputError.innerHTML = ""
    },1000)
  } else {
    const personvalue = selectPerson.value;
    if (personvalue == "" || personvalue <= 0) {
      selectPerson.style.border = "1px solid red";
      peopleError.innerHTML = "can't be zero";
      setTimeout(() => {
        selectPerson.style.border = "1px solid #ddd";
        peopleError.innerHTML = ""
      },1000)
    }  else {
      const persent =Math.round((inputvalue * text) / 100);
      moneyTips.innerHTML = `$${persent}`;
      const total = inputvalue + persent ;
      moneyTotal.innerHTML = `${total}`;
    }
  }
}

const fivePersent = () => {persent(5)}
const tenPersent = () => {persent(10) }
const fifteenPersent = ()=>{persent(15) }
const twentyfivePersent = ()=>{persent(25) }
const fiftyPersent = ()=>{persent(50) }

const parsentCustom = (event) => {
  const customvalue = event.target.value;
  persent(customvalue)

 }


resetbtn.addEventListener("click", () => {
  location.reload()
})

fivepersent.addEventListener("click", fivePersent);
tenpersent.addEventListener("click", tenPersent);
fifteenpersent.addEventListener("click", fifteenPersent);
twentyfivepersent.addEventListener("click", twentyfivePersent);
fiftypersent.addEventListener("click", fiftyPersent);
custompersent.addEventListener("click", parsentCustom);
