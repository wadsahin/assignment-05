// Elements Select
const donationBtn = document.getElementById('btn-donation');
const historyBtn = document.getElementById('btn-history');

// Toggle style on Donation Button
donationBtn.addEventListener('click', function(){
  donationBtn.classList.add('bg-lime-400', 'font-semibold', 'border-none');
  historyBtn.classList.remove('bg-lime-400', 'font-semibold', 'border-none');
  toggleContentShow('cards-container');
});

// Toggle style on History Button
historyBtn.addEventListener('click', function(){
  historyBtn.classList.add('bg-lime-400', 'font-semibold', 'border-none');
  donationBtn.classList.remove('bg-lime-400', 'font-semibold', 'border-none');
  const toggleShow = toggleContentShow('history-container');
});
