// Fibonacci Series
var n = 10
var a = []
if(a.length == 0){
    a.push(0,1)
}
for(let i=a.length; i<n; i++){
    var total = a[a.length-1] + a[a.length-2]
    a.push(total)
}
console.log(a)