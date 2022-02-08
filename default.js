// not set all para value

function add(num1, num2){
    return num1 + num2;
}

var result = add(15); // not declare all parameter its output NaN;
console.log(result);

//default value added if missed set para value

function add2(num1, num2){
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}

var result2 = add2(15); // 
console.log(result2);

//another solution set default value

function add3(num1, num2){
    num2 = num2 || 0
    return num1 + num2;
}

var result3 = add3(15); 
console.log(result3);

//ES6 Method

function add4(num1, num2=0){
    return num1 + num2;
}

var result4 = add4(15); 
console.log(result4);