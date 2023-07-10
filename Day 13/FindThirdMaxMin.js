// Find out the third Maximum and Minimum Number in array

var a = [3,1,2,6,8,7]
var newArr = []
for(let i=0; i<a.length; i++){
    var max = -Infinity
    var min = Infinity
    for(let j=0; j<a.length; j++){
        if(a[j]>max && !newArr.includes(a[j])){
            max = a[j]
        }
        if(a[j]<min && !newArr.includes(a[j])){
            min = a[j]
        }
    }
    newArr.push(max,min)
    if(newArr.length == a.length){
        break
    } else{
        j=0
    }
}
console.log(max,min)