function max(args){
    let max =0;
    for(let i = 0; i < args.length; i++){
        for(let j = 0; j < args[i].length; j++){
            if(max < args[i][j]){
                max = args[i][j];
            }
        }
    }
    return max
}

const array = [[1, 4, 3], [12, 5, 6], [7, 21, 9]]
const m = max(array);

console.log(`max value = ${m}`);