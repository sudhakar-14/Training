// Print All the Mondays
var allDays = new Date(6,2023,0).getDate()
for(let i=1; i<=allDays; i++){
    if(new Date(`2023-06-${i}`).getDay() == 1){
        console.log(i)
    }
}