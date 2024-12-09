function compose(...funcs){
    const err = [];

    const composeFun = (...args) =>{
        try {
            return funcs.reduceRight((res, fun) => [fun(...res)], args)[0]
        } catch (e) {
            err.forEach((h) => h(e));
            return undefined;
        }
    };

    composeFun.on = (e, errs)=>{
        if(e == 'error') err.push(errs)
    };

    return composeFun;
}
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const error = (x) => { throw new Error('error'); };
const f = compose(inc, twice, cube, error);

f.on('error', (e) => {
    console.error('Произошла ошибка:', e.message);
});

const x = f(5)

console.log(x)