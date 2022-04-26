const getGPA=()=>{      
    function getGrade(){
        let count=0;
        let GPA=0.0
        let gradeBySub=[]
        let gradePoints=0.0
        let totalGradePoints=0.0
        let subjectCount=prompt ('enter no of subjects')
        for(let i=0;i<subjectCount;i++){
            gradeBySub[i]=prompt(`enter grade of subject ${++count}`)
        }
        function getCreditHours(){
            let totalCreditHours=0;
            let countC=0;
            // let subjectCount=prompt ('enter no of subjects')
            for(let i=0;i<subjectCount;i++){
                totalCreditHours+=parseInt(prompt(`enter credit hours of subject ${++countC}`))
            }
            // console.log(totalCreditHours)
            for(let value of gradeBySub){
                if(value=='A') gradePoints=4.00
                else if(value=='A-') gradePoints=3.70
                else if(value=='B+') gradePoints=3.33
                else if(value=='B') gradePoints=3.00
                else if(value=='B-') gradePoints=2.70
                else if(value=='C+') gradePoints=2.30
                else if(value=='C') gradePoints=2.00
                else if(value=='C-') gradePoints=1.70
                else if(value=='D+') gradePoints=1.30
                else if(value=='D') gradePoints=1.00
                else if(value=='D-') gradePoints=0.70
                else if(value=='W' || value =='F') gradePoints=0.00
                totalGradePoints+=gradePoints
            // }console.log(totalGradePoints)     
        } GPA=totalGradePoints/subjectCount
        console.log(`Your GPA in this Semester is : ${GPA}`)
        }  getCreditHours()  
    }
        getGrade()
    // console.log(gradeBySub[0])
}
getGPA()