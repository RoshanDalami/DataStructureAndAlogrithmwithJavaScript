function gradesProb(grades){
    var finalGrade = [];
   
  for(let grade of grades){
    var roundvalue = Math.ceil(grade/ 5) * 5 ;
    if(grade < 38) {
        finalGrade.push(grade);
    }else if((roundvalue - grade)>= 3){
        finalGrade.push(grade)
    }else{
        finalGrade.push(roundvalue)
    }
  }
  return finalGrade
}
var grades = [73,67,38,33]
console.log(gradesProb(grades))