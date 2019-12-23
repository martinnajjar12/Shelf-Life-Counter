const myDate = new Date();
const month = myDate.getMonth();
const date = myDate.getDate();
const year = myDate.getFullYear();

const manufactureDate = document.getElementById('manufacture-date');
const expiryDate = document.getElementById('expiry');
const submitBtn = document.getElementById('submit-btn');
const outputSpan = document.getElementById('the-last-day');

submitBtn.addEventListener('click', showProductLife);
document.addEventListener('keyup', function (e) {
    if (e.keyCode == 13 || e.which == 13) {
        showProductLife();
    }
});

function showProductLife() {
    let shelfLifePeriod;
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(manufactureDate.value);
    const lastDate = new Date(expiryDate.value);
    //The difference between the manufacture and the expiry date
    const diffrenceBetweenFirstAndLast = lastDate - firstDate;
    //Checking if the shelf life is 2 years or more
    if (((diffrenceBetweenFirstAndLast / oneDay) / 365) > 2.5) { //To change the milliseconds to years
        shelfLifePeriod = (diffrenceBetweenFirstAndLast * 30) / 100;
    } else {
        shelfLifePeriod = (diffrenceBetweenFirstAndLast * 40) / 100;
    }
    //The left time between the Manufacture date and today;
    const differenceBetweenFirstAndMyDate = myDate - firstDate;
    //The remaining days to be expired
    const remainingShelfLife = shelfLifePeriod - differenceBetweenFirstAndMyDate;
    const LastDayAccepted = (Date.parse(myDate)) + remainingShelfLife;
    outputSpan.innerHTML = new Date(LastDayAccepted).toDateString();
}