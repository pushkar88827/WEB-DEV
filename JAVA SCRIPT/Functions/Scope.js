let sum = 54;   //global scope
function calsum(a,b){
    let sum = a+b;     //function scope
    console.log(sum);
}

calsum(6,8);

console.log(sum);
 