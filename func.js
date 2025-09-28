const math = (no1, no2,no3,no4) => {
    let a = no1 + no2 *2;
    if(no3){
        a += no3;
        console.log(a);
    }
    else if(no4){
        a *= no4;
        console.log(a);
    }
    return a;
}
console.log(math(2,3,5,5));
console.log(math(2,3,0,5));
export {math};