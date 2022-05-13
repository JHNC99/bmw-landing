let redBtn = document.getElementById('red');
let blueBtn = document.getElementById('blue');
let blackBtn = document.getElementById('black');
let bike = document.querySelector('#bike')

redBtn.addEventListener('click', function () {
    bike.style.backgroundImage = "url('./image/BMW1.png')";
});
blueBtn.addEventListener('click', function () {
    bike.style.backgroundImage = "url('./image/BMW2.png')";
})
blackBtn.addEventListener('click', function () {
    bike.style.backgroundImage = "url('./image/BMW3.png')";
})
console.log(redBtn);