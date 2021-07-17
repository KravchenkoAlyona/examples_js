
let value = "coconat"
let toBoolean = Boolean(value)
console.log(toBoolean);
console.log(typeof toBoolean);

value = "orange"
toBoolean = !!value
console.log(toBoolean);
console.log(typeof toBoolean);
console.log(`${value}  is`, toBoolean);
console.log(`${value}  is`, typeof toBoolean);


value = ""
toBoolean = Boolean(value)
console.log(toBoolean);
console.log(typeof toBoolean);

value = " "
toBoolean = Boolean(value)
console.log(toBoolean);
console.log(typeof toBoolean);

value = null
toBoolean = Boolean(value)
console.log(toBoolean);
console.log(typeof toBoolean);

value = NaN
toBoolean = Boolean(value)
console.log(toBoolean);
console.log(typeof toBoolean);

value = Infinity
toBoolean = Boolean(value)
console.log(toBoolean);
console.log(typeof toBoolean);

value = "123"
toBoolean = Boolean(value)
console.log(toBoolean);
console.log(typeof toBoolean);

value = 4
toBoolean = Boolean(value)
console.log(toBoolean);
console.log(typeof toBoolean);