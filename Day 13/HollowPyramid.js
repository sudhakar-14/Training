//Print the Hollow Pyramid

var n = 5
for(let i=n; i>0; i--){
    for(let j=1; j<=n; j++){
        if(j>=i){
            if(i==1||j==n||j==i){
                process.stdout.write("* ")
            } else {
                process.stdout.write("  ")
            }
        } else {
            process.stdout.write(" ")
        }
    }
    console.log()
}