"use strict";

const nameInput = document.querySelector(".input-name");
const nameOutput = document.querySelector(".name-on-card");

const numInput = document.querySelector(".input-num");
const numOutput = document.querySelector(".number-on-card");

const monInput = document.querySelector(".month");
const monOutput = document.querySelector(".month-on-card");

const yearInput = document.querySelector(".year");
const yearOutput = document.querySelector(".year-on-card");

const cvcInput = document.querySelector(".cvc-number");
const cvcOutput = document.querySelector(".cvc");

const confirmBtn = document.querySelector(".confirm-btn");
const continueBtn = document.querySelector(".continue-btn");

const inputs = document.querySelectorAll("input");
console.log(inputs);

const errorEmpty = document.querySelector(".error-empty");

numInput.addEventListener("input", (e) => {
  if (numInput.value.length <= 16) {
    numOutput.textContent = e.target.value;
    numInput.style.borderColor = "gray";
  } else {
    numInput.style.border = "2px solid hsl(0, 100%, 66%)";
  }
  let results = numOutput.textContent.match(/\d{4}/g);
  let final = results.join(" ");
  console.log(final);
  numOutput.textContent = final;
});

nameInput.addEventListener("input", (e) => {
  nameOutput.textContent = e.target.value;
});

monInput.addEventListener("input", (e) => {
  if (monInput.value.length <= 2) {
    monInput.style.borderColor = "gray";
    monOutput.textContent = e.target.value;
  } else {
    monInput.style.border = "2px solid hsl(0, 100%, 66%)";
  }
});

yearInput.addEventListener("input", (e) => {
  if (yearInput.value.length <= 2) {
    yearOutput.textContent = e.target.value;
    yearInput.style.borderColor = "gray";
  } else {
    yearInput.style.border = "2px solid hsl(0, 100%, 66%)";
  }
});

cvcInput.addEventListener("input", (e) => {
  if (cvcInput.value.length <= 3) {
    cvcOutput.textContent = e.target.value;
    cvcInput.style.borderColor = "gray";
  } else {
    cvcInput.style.border = "2px solid hsl(0, 100%, 66%)";
  }
});

//errors

confirmBtn.addEventListener("click", () => {
  let regex = /^[a-z ,.'-]+$/i;
  let regexNum = /^\d+$/;
  let regexMonth = /^(0[1-9]|1[0-2])$/;
  let regexCvc = /^[0-9]{3,4}$/;

  if (
    regex.test(nameInput.value) &&
    regexNum.test(numInput.value) &&
    regexCvc.test(cvcInput.value) &&
    regexMonth.test(monInput.value)
  ) {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".thanks-container").style.display = "block";
    nameInput.value = "";
    numInput.value = "";
    monInput.value = "";
    yearInput.value = "";
    cvcInput.value = "";

    nameOutput.textContent = "Jane Appleseed";
    numOutput.textContent = "0000 0000 0000 0000";
    monOutput.textContent = "00";
    yearOutput.textContent = "00";
    cvcOutput.textContent = "000";
    inputs.style.borderColor = "gray";
  }

  //name----------------------
  if (regex.test(nameInput.value)) {
    nameInput.style.borderColor = "gray";
  } else if (regex.test(nameInput.value === false)) {
    nameInput.style.borderColor = "red";
  }
  //cardnumber///////////////////
  if (regexNum.test(numInput.value)) {
    numInput.style.borderColor = "grey";
  } else {
    numInput.style.borderColor = "red";
  }

  //month///////////////////////////////
  if (regexMonth.test(monInput.value)) {
    monInput.style.borderColor = "gray";
  } else {
    monInput.style.borderColor = "red";
  }

  //year//////////////////////////////
  if (regexMonth.test(yearInput.value)) {
    yearInput.style.borderColor = "gray";
  } else {
    yearInput.style.borderColor = "red";
  }

  // cvc////////////////////////////////
  if (regexCvc.test(cvcInput.value)) {
    cvcInput.style.borderColor = "gray";
  } else {
    cvcInput.style.borderColor = "red";
  }
});

continueBtn.addEventListener("click", () => {
  document.querySelector(".container").style.display = "block";
  document.querySelector(".thanks-container").style.display = "none";
});
