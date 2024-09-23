
document.getElementById('btn-donate-quota').addEventListener('click', function(){
  // Element selected
  const accountBalance = textFieldValueById('account-balance');
  const cardBalance = textFieldValueById('donated-balance-quota');
  const donateInputAmount = inputFieldValueById('input-donation-quota');
  const donateInputValue = document.getElementById('input-donation-quota').value;

  // is input field empty??
  if(donateInputValue === ''){
    alert('Input is Empty! Please Enter an Amount');
    return;
  }
  
  // Is input not a number | less than Zero | Greater than Account Balance
  if(isNaN(donateInputAmount) || donateInputAmount < 0 || donateInputAmount > accountBalance){
    alert('Input is Invalid! Please put valid data..');
    document.getElementById('input-donation-quota').value = '';
    return;
  }

  // reduce & set Account Balance
  const availableAccountBalance = accountBalance - donateInputAmount;
  document.getElementById('account-balance').innerText = availableAccountBalance;

  // Increase & set Card Balance
  const updatedCardBalance = cardBalance + donateInputAmount;
  document.getElementById('donated-balance-quota').innerText = updatedCardBalance;
  
  // reset input field
  document.getElementById('input-donation-quota').value = '';

  // history create & update
  const historyContainer = document.getElementById('history-container');
  const cardTitle = cardTitleGenerate('card-title-quota');
  const historyItem = document.createElement('div');
  historyItem.innerHTML = `
    <h2 class="text-md font-bold mb-3"><span class="text-orange-500">${donateInputAmount}</span> Taka is ${cardTitle} </h2>
    <p class="text-gray-400 text-sm">${new Date()}</p>
  `;
  historyItem.classList.add('border', 'p-3', 'rounded-lg');
  historyContainer.appendChild(historyItem);

  // Show modals
  document.getElementById('confirm_modal').showModal();

});

