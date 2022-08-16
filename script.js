const myDate = new Date();
const month = myDate.getMonth();
const date = myDate.getDate();
const year = myDate.getFullYear();

const manufactureDate = document.getElementById('manufacture-date');
const expiryDate = document.getElementById('expiry');
const shelfLife = document.getElementById('life');
const submitBtn = document.getElementById('submit-btn');
const outputSpan = document.getElementById('the-last-day');

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  showProductLife;
});
document.addEventListener('keyup', function (e) {
  e.preventDefault();
  if (e.keyCode == 13 || e.which == 13) {
    showProductLife();
  }
});

function showProductLife() {
  const firstDate = new Date(manufactureDate.value);
  const lastDate = new Date(expiryDate.value);
  //The difference between the manufacture and the expiry date
  const diffrenceBetweenFirstAndLast = lastDate - firstDate;
  const shelfLifePeriod =
    (diffrenceBetweenFirstAndLast * shelfLife.value) / 100;
  //The left time between the Manufacture date and today;
  const differenceBetweenFirstAndMyDate = myDate - firstDate;
  //The remaining days to be expired
  const remainingShelfLife = shelfLifePeriod - differenceBetweenFirstAndMyDate;
  const LastDayAccepted = Date.parse(myDate) + remainingShelfLife;
  outputSpan.innerHTML = new Date(LastDayAccepted).toDateString();
}
