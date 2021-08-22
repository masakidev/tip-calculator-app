const $bill = document.getElementById('bill');
const $people = document.getElementById('people')
const $tip5 = document.getElementById('tip-5');
const $tip10 = document.getElementById('tip-10');
const $tip15 = document.getElementById('tip-15');
const $tip25 = document.getElementById('tip-25');
const $tip50 = document.getElementById('tip-50');
const $tipCustom = document.getElementById('tip-custom');
const $tipPerson = document.getElementById('tip-person')
const $totalPerson = document.getElementById('total-person')

const tip5 = .05;
const tip10 = .10;
const tip15 = .15;
const tip25 = .25;
const tip50 = .50;
const tipCustom = '';
let people = 0;

let billValue = 0;
let tipPerson = 0;
let totalPerson = 0;
let tip = 0;

$tipPerson.innerText = '$0.00';
$totalPerson.innerText = '$0.00';

$bill.addEventListener('input', () => {
  billValue = parseInt($bill.value);
})

$tip5.addEventListener('click', () => {
  tipPerson = (billValue * tip5);
  tip = billValue + tipPerson;
  billValue = tip;
})

$tip10.addEventListener('click', () => {
  tip = billValue + (billValue * tip10);
  billValue = tip;
})

$tip15.addEventListener('click', () => {
  tip = billValue + (billValue * tip15);
  billValue = tip;
})

$tip25.addEventListener('click', () => {
  tip = billValue + (billValue * tip25);
  billValue = tip;
})

$tip50.addEventListener('click', () => {
  tip = billValue + (billValue * tip50);
  billValue = tip;
})

$people.addEventListener('input', () => {
  people = parseInt($people.value)
  totalPerson = billValue / people;
  tipPerson = tipPerson / people;
  $totalPerson.innerText = '$' + totalPerson.toFixed(2);
  $tipPerson.innerText = '$' + tipPerson.toFixed(2);
  if ($people.value == '') {
    $totalPerson.innerText = '$0.00';
  }
})





 
 /* $tip5.classList.remove('bg-verydarkcyan');
  $tip5.classList.remove('text-white');
  const setToggle = $tip5.classList.toggle('bg-strongcyan');
  const setToggle2 = $tip5.classList.toggle('text-verydarkcyan');
  if (!setToggle && !setToggle2) {
    $tip5.classList.add('bg-verydarkcyan');
    $tip5.classList.add('text-white');
  } */