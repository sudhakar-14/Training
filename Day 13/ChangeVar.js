//Rotate the Array 
var a = [1,2,3,4,5]
var right = 2
var newArr = []
while(right>0){
    newArr[newArr.length] = a[a.length-right]
    right--
}
for(let i=0; i<a.length; i++){
    if(!newArr.includes(a[i])){
        newArr[newArr.length] = a[i]
    }
}
console.log(newArr)