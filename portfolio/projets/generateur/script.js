const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const resultArea = document.getElementById('result');

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?";

generateBtn.addEventListener('click', () => {
  let charset = "";
  if (uppercaseCheckbox.checked) charset += uppercaseChars;
  if (lowercaseCheckbox.checked) charset += lowercaseChars;
  if (numbersCheckbox.checked) charset += numberChars;
  if (symbolsCheckbox.checked) charset += symbolChars;

  if (charset === "") {
    alert("Sélectionne au moins une option !");
    return;
  }

  let password = "";
  let length = parseInt(lengthInput.value);

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  resultArea.value = password;
});
