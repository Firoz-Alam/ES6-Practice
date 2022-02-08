function doubleIt(num){
    return num * 2;
}
 const result = doubleIt(5);
console.log(result)

const result2 = function(num){
    return num * 3
}
console.log(result2(5));

const result3 = (num)=> num * 4; //ES6
console.log(result3(5));

const add = (x,y) => x+y;
const give5 = () => 5;
const doMath = (x,y) =>{
    const add = x+y;
    const diff = x - y;
    const result = add * diff;
    return result;
}
console.log(doMath(7,5));
console.log(add(7,3));
console.log(give5());
