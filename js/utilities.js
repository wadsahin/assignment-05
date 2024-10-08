
// Generate Text_Field_Value | reuseable function 1
function textFieldValueById(id){
  const textFieldValue = document.getElementById(id).innerText;
  const textFieldNumber = parseFloat(textFieldValue);
  return textFieldNumber;
}

// Generate Input_Value | reuseable function 2
function inputFieldValueById(id){
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}


// Generate Title_Text | reuseable function 3
function cardTitleGenerate(id){
  const cartTitleText = document.getElementById(id).innerText;
  return cartTitleText;
}

// Hide & Show Elements
function toggleContentShow(id){
  // hides
  document.getElementById('cards-container').classList.add('hidden');
  document.getElementById('history-container').classList.add('hidden');

  // Show(only)
  document.getElementById(id).classList.remove('hidden');
}

