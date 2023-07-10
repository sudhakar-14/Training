// Print the Decrement Star Pattern Opposite 
var n = 4
for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(j>=i){
            process.stdout.write("*")
        } else{
            process.stdout.write(" ")
        }
    }
    console.log()
}