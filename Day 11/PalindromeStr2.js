// Print the All the Palindromes of the word
var s = "abaab"
var newArr = []
for(let i=1; i<=s.length; i++){
    for(let j=0; j<s.length; j++){
        if(i+j > s.length){
            break
        }
        var palin = s.slice(j,i+j)
        var rev = ""
        for(let k=palin.length-1; k>=0; k--){
            rev += palin[k]
        }
        if(palin == rev){
            newArr.push(rev)
        }
    }
}
console.log(newArr)