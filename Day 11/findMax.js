// Find Maximum value without Sorting
var a = [2,5,1,3,8,9]
var max = -Infinity
for(let i=0; i<a.length; i++){
    if(a[i]>max){
        max = a[i]
    }
}
console.log(max)