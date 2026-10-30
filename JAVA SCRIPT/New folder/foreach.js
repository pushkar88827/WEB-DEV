let arr =[1,2,3,4,5];

function print(el) {
    console.log(el);
}

arr.forEach(print);

// OR

arr.forEach(function(el){

    console.log(el);

});