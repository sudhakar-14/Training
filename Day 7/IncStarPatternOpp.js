// Print the Increment Star Pattern Opposite 
var n = 4
for(let i=n; i>0; i--){
    for(let j=1; j<=n; j++){
        if(j>=i){
            process.stdout.write("*")
        } else{
            process.stdout.write(" ")
        }
    }
    console.log()
}