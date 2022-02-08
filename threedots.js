
const number = [12,54,98,45];
const number2 = [54,69,87];
const number3 = [36,97,65];

const all = number.concat(number2).concat(number3);
const all2 = [...number,...number2,...number3];
console.log(all);
console.log(all2);

const minister = 655
const business = 545;
const sochib = 454;

const bigArrayAmount = [655,545,454,1000];
const maxAmount = Math.max(...bigArrayAmount);
console.log(maxAmount);
const maxMan = Math.max(minister,business,sochib);
console.log(maxMan);