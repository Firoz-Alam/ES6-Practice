const name = "Firoz Alam";
// name = "Sakib khan"; // not change name variable value
console.log(name);

const number = [12,45];
number[1] = 88; // array value will be change
number.push(45); // add value successfully
number.pop(); // successfully done
// number = [14,78,98]; // not successfully change whole array value cause of const variable
console.log(number);

//let variable declare

let patientName = "Rahela Begum";
patientName = "Rahima Begum"; //will be change value
console.log(patientName);

// sum = 0;
// for (let i = 0; i < 10; i++) { //var can go out of scope let cant leak;
//     sum = sum + i;
// }
// console.log(i);