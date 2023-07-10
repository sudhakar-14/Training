var s = "Nun"
s = s.toLowerCase()
var rev = ""
for(let i=s.length-1; i>=0; i--){
    rev += s[i]
}
if(s == rev){
    console.log("Palindrome")
} else {
    console.log("Not Palindrome")
}