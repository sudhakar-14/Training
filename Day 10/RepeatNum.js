// Print the Repeated Numbers
var a = [1,4,3,6,4,4,8,8]
var ans = {}
for(let i=0; i<a.length; i++){
    if(!(ans.hasOwnProperty(a[i].toString()))){
        ans[a[i].toString()] = 1
    } else {
        ans[a[i].toString()]++
    }
}
for(let i in ans){
    if(ans[i]>1){
        console.log(`${i} is ${ans[i]} times`)
    }
}