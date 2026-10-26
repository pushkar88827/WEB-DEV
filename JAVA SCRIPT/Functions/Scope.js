let sum = 54;   //global scope
function calsum(a,b){
    let sum = a+b;     //function scope
    console.log(sum);
}

calsum(6,8);

console.log(sum);
 


{
    let a = 25;
    console.log(a);  //block scope
}

function outer(){
    let x =5;
    let y= 7;

    function inner(){
        console.log(x);
    }
    inner();
}