function seq(ar){
    return (n)=>{
    if(typeof n == 'number'){
        return(ar(n))
    }else{
        return seq((x)=>ar(n(x)))
    }
    }
};

let r1 = seq(x=>x+7)(x=>x*2)(5);
// Результат: 17
let r3 = seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7);
// Результат: 24
let r2 = seq(x => x * 2)(x => x + 7)(5);
// Результат: 3
let r4 = seq(x => x * 3)(x => x * 7)(x => x / 3)(x=>x*2)(6);
// Результат: 84

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);