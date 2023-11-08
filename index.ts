// Problem 1:
type Value = string | number;
const typeCheck = (param: Value): Value => {
    if (typeof param === 'number') {
        return param * param;
    } else {
        return param.length;
    }

}
// console.log(typeCheck(12));


