// Print the Repeated Characters
var a = ["a","a","c","d","d","c","a","b"]
var ans = {}
for(let i=0; i<a.length; i++){
    if(!ans.hasOwnProperty(a[i])){
        ans[a[i]] = 1
    } else{
        ans[a[i]]++
    }
}
for(let i in ans){
    if(ans[i]>1){
        console.log(`${i} is ${ans[i]} times`)
    }
}