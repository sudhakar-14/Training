// Print the Diamond Star Pattern

var n = 5
for(let i=n; i>0; i--){
    for(let j=1; j<=n; j++){
        if(j>=i){
            process.stdout.write("* ")
        } else {
            process.stdout.write(" ")
        }
    }
    console.log()
}

for(let i=1; i<=n-1; i++){
    for(let j=1; j<=n-1; j++){
        if(j>=i){
            process.stdout.write(" *")
        } else {
            process.stdout.write(" ")
        }
    }
    console.log()
}