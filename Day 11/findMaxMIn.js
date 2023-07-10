// Find the Maximum and Minimum Number without Sorting
var a = [5,1,2,6,8]
var min = Infinity; max = -Infinity
for(let i=0; i<a.length; i++){
    if(a[i]<min){
        min = a[i]
    }
    if(a[i]>max){
        max = a[i]
    }
}
console.log(min,max)