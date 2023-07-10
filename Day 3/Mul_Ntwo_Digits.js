// Multiply of N two Digits
var input = 123456
var total = 1
while(input > 0){
    total *= input%10
    input = Math.floor(input/100)
}
console.log(total)