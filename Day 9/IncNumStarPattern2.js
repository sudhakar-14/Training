//      2
//    2 4
//  2 4 6
//2 4 6 8


var n = 4
for(let i=n; i>0; i--){
    var k = 2
    for(let j=1; j<=n; j++){
        if(j>=i){
            process.stdout.write(k.toString())
            k += 2

        } else{
            process.stdout.write(" ")
        }
    }
    console.log()
}