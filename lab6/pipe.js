function pipe(...funcs){
    for (const fun of funcs) {
        if(typeof fun !== 'function') {
            throw Error('All arguments must be function')
        }
    }
    return (n)=>funcs.reduce((acc, func) => func(acc), n)
}
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const f = pipe(inc, twice, cube);
const x = f(5)

console.log(x)