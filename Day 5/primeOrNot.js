//Check whether a Number Prime or Not
var n = 541
const PrimeOrNot = () =>{
    if(n<2){
        return "Not a Prime Number"
    }
    for(let i=2; i<n; i++){
        while(n%i == 0){
            return "Not a Prime Number"
        }
    }
    return "Prime Number"
}
console.log(PrimeOrNot(n))

//Method 2
var n2 = 49
const PrimeOrNot2 = () =>{
    if(n2 !==2 && n2%2 == 0 || n2 !== 3 && n2%3 == 0 || n2 !== 5 && n2%5 == 0 || n2 !== 7 && n2%7 == 0){
        return "Not a Prime Number"
    }
    for(let i=11; i<Math.ceil(n2/2); i++){
        if(i%2 !== 0 && i%3 !== 0 && i%5 !== 0 && i%7 !== 0){
            if(n2%i == 0){
                return "Not a Prime Number"
            }
            else if(i * i > n2){
                return "Prime Number"
            }
        }
    }
    return "Prime Number"
}
console.log(PrimeOrNot2(n2))