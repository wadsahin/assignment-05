
document.getElementById('btn-donate-feni').addEventListener('click', function(){
  // Element selected
  const accountBalance = textFieldValueById('account-balance');
  const cardBalance = textFieldValueById('donated-balance-feni');
  const donateInputAmount = inputFieldValueById('input-donation-feni');
  const donateInputValue = document.getElementById('input-donation-feni').value;

  // is input field empty??
  if(donateInputValue === ''){
    alert('Input is Empty! Please Enter an Amount');
    return;
  }
  
  // Is input not a number | less than Zero | Greater than Account Balance
  if(isNaN(donateInputAmount) || donateInputAmount < 0 || donateInputAmount > accountBalance){
    alert('Input is Invalid! Please Put a Valid Amount');
    document.getElementById('input-donation-feni').value = '';
    return;
  }

  // reduce & set Account Balance
  const availableAccountBalance = accountBalance - donateInputAmount;
  document.getElementById('account-balance').innerText = availableAccountBalance;

  // Increase & set Card Balance
  const updatedCardBalance = cardBalance + donateInputAmount;
  document.getElementById('donated-balance-feni').innerText = updatedCardBalance;
  
  // reset input field
  document.getElementById('input-donation-feni').value = '';

  // history create & update
  const historyContainer = document.getElementById('history-container');
  const cardTitle = cardTitleGenerate('card-title-feni');
  const historyItem = document.createElement('div');
  historyItem.innerHTML = `
    <h2 class="text-md font-bold mb-3"><span class="text-orange-500">${donateInputAmount}</span> Taka is Donated for ${cardTitle} </h2>
    <p class="text-gray-400 text-sm">Date: ${new Date()}</p>
  `;
  historyItem.classList.add('border', 'p-3', 'rounded-lg');
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  // Show modals
  document.getElementById('confirm_modal').showModal();

});

