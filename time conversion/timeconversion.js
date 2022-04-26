const getTime=(time12h)=>{
    let [time,period]=time12h.split(' ')
    
    // console.log(time)
    // console.log(period)
    let [hours,minutes,seconds]=time.split(':')
    // console.log(hours)
    // console.log(minutes)
    // console.log(seconds)
    if(hours=12){
        hours='00'
    }
    if(period==='PM'){
        hours=parseInt(hours)+12
    }
    console.log(`${hours} : ${minutes} :${seconds}`)
} 
getTime('12:00:00 AM')

