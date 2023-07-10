// Sum of N Digits
var a = 12345
var total = 0
while(a > 0){
    total += a%10
    a = Math.floor(a/10)
}
console.log(total)