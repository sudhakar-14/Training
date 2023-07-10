// The Number 72 using the Prime Numbers factorize written the Prime Numbers
var n = 72
const factor = () =>{
    if(n<2) return n
    while(n%2 == 0 && n >= 2){
        console.log(2,)
        n = n/2
    }
    for(let i=3; i<Math.floor(n/2); i++){
        if(i%2 !== 0){
            while (n%i == 0 && n >= 3){
                console.log(i,)
                n = n/i
            }
        }
    }
}
factor()