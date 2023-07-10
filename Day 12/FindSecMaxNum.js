// Find the Second Maximum Number without Sorting
var a = [5,1,2,6,8,7]
var max = -Infinity
for(let i=0; i<a.length; i++){
    if(a[i]>max){
        max = a[i]
    }
}
var max2 = -Infinity
for(let i=0; i<a.length; i++){
    if(a[i]>max2 && a[i]!=max){
        max2 = a[i]
    }
}
console.log(max2)