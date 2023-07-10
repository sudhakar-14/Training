// Multiply Five Two Digit Numbers using For loops
var total = 1
for(let i=0; i<5; i++){
    let a = Math.floor(Math.random()*90) + 10
    total *= a
}
console.log(total)