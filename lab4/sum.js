function sum(...args){
    let t= 0;
    for(let i =0; i < args.length; i++){
        t += args[i];
    };
    return t;
}   

function sum2(...args){
    let t= 0;
    for(let i of args){
        t += args[i];
    };
    return t;
}   

function sum3(...args){
    let t= 0;
    let i = 0;
    while(i < args.length){
        t += args[i];
        i++;
    };
    return t;
}  

function sum4(...args){
    let t= 0;
    let i = 0;
    do{
        t += args[i];
        i++;
    }while(i < args.length);
    return t;
}  

function sum5(...args){
    let t= 0;
    let result = args.reduce((acc, current)=>acc + current + t) 
    return(result)
}  

const a = sum(1, 2, 3);
const b = sum2(0); 
const c = sum3(); 
const d = sum4(1, -1, 1);
const e = sum5(10, -1, -1, -1);

console.log(`sum1 = ${a}`);
console.log(`sum2 = ${b}`);
console.log(`sum3 = ${c}`);
console.log(`sum4 = ${d}`);
console.log(`sum5 = ${e}`);
