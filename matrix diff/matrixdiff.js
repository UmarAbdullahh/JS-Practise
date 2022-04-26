let matrix=[[1,2,3],[4,5,6],[9,8,9]] // any array of square amtrix can be given
const diagonaldiff=(arr)=>{
    let n=arr.length
    let d1=0
    let d2=0
    let absoluteDiffernce
    // console.log(n)
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i===j){
                d1+=arr[i][j]//0,0 1,1 2,2
            }
            if(i+j===n-1) {
                d2+=arr[i][j]        //0,2  1,1 2,0
            }        
        }
    }
    absoluteDiffernce=d2-d1
    console.log(absoluteDiffernce)
}
diagonaldiff(matrix)