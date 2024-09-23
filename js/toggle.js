const donationBtn = document.getElementById('btn-donation');
const historyBtn = document.getElementById('btn-history');

// Toggle style on Donation Button
donationBtn.addEventListener('click', function(){
  donationBtn.classList.add('bg-lime-400', 'font-semibold', 'border-none');
  historyBtn.classList.remove('bg-lime-400', 'font-semibold', 'border-none');
});

// Toggle style on Donation Button
historyBtn.addEventListener('click', function(){
  historyBtn.classList.add('bg-lime-400', 'font-semibold', 'border-none');
  donationBtn.classList.remove('bg-lime-400', 'font-semibold', 'border-none');

});

console.log(donationBtn, historyBtn)