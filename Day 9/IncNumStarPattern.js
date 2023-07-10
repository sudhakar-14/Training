//1
//1 2
//1 2 3
//1 2 3 4


var n = 4
for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write(j.toString())
    }
    console.log()
}