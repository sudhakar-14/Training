// Check whether a Num Palindrome or Not
var n = 120
var rev = 0; temp = n
while(n>0){
    rev = n%10 + rev*10
    n = Math.floor(n/10)
}
if(temp == rev){
    console.log("Palindrome")
} else {
    console.log("Not Palindrome")
}