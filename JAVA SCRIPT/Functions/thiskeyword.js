const student ={
    name: "Pushkar",
    age:19,
    eng:95,
    math:99,
    phy:97,
    getavg(){
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(avg);
    }
}