const getGpa =()=>{
    let subject = prompt('Enter your subjects'); 
    let creditHour = [];
    let subjectGrade = [];
    let totalHour = 0;
    let Gpa = 0;
    let qualityPoint = 0;
    let gpaCount = 0;
    let count = 1;
    let acount = 1
    for(let i = 0 ; i < subject ;i++){
        creditHour[i] = prompt(`Enter your ${count++} subject credit hour`);
        subjectGrade[i] = prompt(`Enter your ${acount++} subject Grades`)
         totalHour += parseFloat(creditHour[i]);
    }
    //console.log(totalHour);
    for(let j = 0 ; j < subject ;j++){
       // console.log(creditHour[j]); 
       // console.log(subjectGrade[j]);

    if(subjectGrade[j] ==='A' ){subjectGrade[j] = 4.00;}
    else if(subjectGrade[j] ==='A-'){subjectGrade[j] = 3.70;}
    else if(subjectGrade[j] ==='B+'){subjectGrade[j]= 3.30;}
    else if(subjectGrade[j] ==='B'){subjectGrade[j]= 3.00;}
    else if(subjectGrade[j] ==='B-') {subjectGrade[j]= 2.70;}
    else if(subjectGrade[j] ==='C+') {subjectGrade[j] = 2.30;}
    else if(subjectGrade[j] ==='C') {subjectGrade[j] = 2.00;}
    else if(subjectGrade[j] ==='C-') {subjectGrade[j] = 1.70;}
    else if(subjectGrade[j] ==='D+') {subjectGrade[j] = 1.30;}
    else if(subjectGrade[j] ==='D') {subjectGrade[j] = 1.00;}
    else if(subjectGrade[j] ==='D-') {subjectGrade[j] = 0.70;}
    else if(subjectGrade[j] === 'W' || subjectGrade[j] === 'F'){subjectGrade[j] = 0.00;}
   }
   for(let k = 0 ; k < subject ;k++){
       //console.log(subjectGrade[k]);
      Gpa = parseFloat(subjectGrade[k])* parseFloat(creditHour[k]);
      qualityPoint +=Gpa;
   }
   let totalGpa = qualityPoint/totalHour;
   // console.log(qualityPoint);
   // console.log(totalHour);
   console.log(totalGpa); 
   
}
getGpa();




// A = 4.00 grade points
// A- = 3.70 grade points
// B+ = 3.33 grade points
// B = 3.00 grade points
// B- = 2.70 grade points
// C+ = 2.30 grade points
// C = 2.00 grade points
// C- = 1.70 grade points
// D+ = 1.30 grade points
// D = 1.00 grade points
// D- = 0.70 grade points