export default function rand(min, max){
    let randNum =  min + Math.random() * (max + 1 - min);
    let roun = Math.floor(randNum);
    return roun
};
