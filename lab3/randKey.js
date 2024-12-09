import rand from './randf.js'

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let pass = '';


function generateKey(count, sym){
    for(let i = 0; i <= count-1; i++){
        let lengths = sym.split('').length;
        let a = rand(1, lengths);
        let n = sym[a];
        pass += String(n);
    }
    return(pass)
};

const key = generateKey(16, characters);

console.log(key);

