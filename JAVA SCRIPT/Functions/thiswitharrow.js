const student = {
    name : "aman",
    marks: 95,
    prop: this,  //global scope
    getName: function(){
        console.log(this);
        return this.name;
    },

    getMarks: () =>{
        console.log(this); // parents scope 
        return this.marks;
    },

};