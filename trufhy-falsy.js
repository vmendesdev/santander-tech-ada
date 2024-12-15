// true
console.log(10 > 4)

// trufhy: [], número diferente de 0, {}, string não vazia 
// falsy: null, underfind, 0, "", Nan

console.log(!![], !!{}, !!0, !!'afasf')
if ([] && {} && 1 && 'afasf'&& true) {
    console.log('tudo é trufhy')
}

console.log(!!null, !!underfined, !!0, !!'', !!NaN)
console.log(!false)