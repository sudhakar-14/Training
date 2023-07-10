// Print the Second Maximum and Minimum Number without Sorting

var a = [5,1,2,6,8,7]
var max = -Infinity
var min = Infinity
for(let i=0; i<a.length; i++){
    if(a[i]>max){
        max = a[i]
    }
    if(a[i]<min){
        min = a[i]
    }
}
var max2 = -Infinity
var min2 = Infinity
for(let i=0; i<a.length; i++){
    if(a[i]>max2 && a[i]!=max){
        max2 = a[i]
    }
    if(a[i]<min2 && a[i]!=min){
        min2 = a[i]
    }
}
console.log(min2,max2)