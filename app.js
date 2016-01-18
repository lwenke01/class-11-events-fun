var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');

first.addEventListener('click',clickOnFirst);
second.addEventListener('click',clickOnSecond);
third.addEventListener('click',clickOnThird);

var firstClicks = 0;
var secondClicks = 0;
var thirdClicks = 0;

function clickOnFirst() {
  firstClicks += 1;
  if (firstClicks % 3 === 0) {
    first.textContent = 'I am divisible by 3!!!'
  }
  first.textContent = 'first was clicked ' + firstClicks + ' times';
}

function clickOnSecond() {
  secondClicks += 1;
  second.textContent = 'second was clicked ' + secondClicks + ' times';
}

function clickOnThird() {
  thirdClicks += 1;
  third.textContent = 'third was clicked ' + thirdClicks + ' times';
}
