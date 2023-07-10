// * * * *
// * * * *
// # # # # 
// # # # #

var n = 4
for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(i>2){
            process.stdout.write("#")
        } else {
            process.stdout.write("*")
        }
    }
    console.log()
}