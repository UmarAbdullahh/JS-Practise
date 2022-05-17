let tablink=document.getElementsByClassName('tablink');
let tabcontent=document.getElementsByClassName('content');
// localStorage.clear()     
window.onload=function(){
    document.getElementById('balance').innerHTML= `BALANCE : $${Number(localStorage.getItem('blnce'))}`
    document.getElementById('income').innerHTML= `INCOME : $${Number(localStorage.getItem('income'))}`
    document.getElementById('expense').innerHTML= `EXPENSE : $${Number(localStorage.getItem('expense'))}`
}
function openLink(cityName){
    let submit=document.querySelector('#submit');
    let amountfield=document.querySelector('#amount')
   let blncmsg=document.querySelector('#balance')
    let incmmsg=document.querySelector('#income')
    let expmsg=document.querySelector('#expense')
    let errmsg=document.querySelector('#demo')
    let text=document.querySelector('#text')
    let history=document.getElementById('his');
    let expense=Number(localStorage.getItem('expense'))
    let income=Number(localStorage.getItem('income'))
   let balance=Number(localStorage.getItem('blnce'))
    
 
    

    
    for(let i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none"
    }
      document.getElementById(cityName).style.display='block';
     
    //   console.log(submit)
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        let amount=parseFloat(amountfield.value)
        let msg=(text.value)
        
            if(amount<0 && amount <balance){
                if(balance>0){
                expense-=amount;
                localStorage.setItem('expense',expense)
            balance-=expense
            localStorage.getItem('income')
           localStorage.setItem('blnce',balance)
                expmsg.innerHTML=`EXPENSE : $${expense}`
                blncmsg.innerHTML=`BALANCE : $${balance}`
                // income=0.00
                incmmsg.innerHTML=`INCOME : $${income}`
                errmsg.innerHTML=`Transaction Successfull with msg ${msg}`
                let entry = document.createElement('LI');
                let message= `Expense Transaction of $${expense} made with msg ${msg}`
                entry.appendChild(document.createTextNode(message))
                history.appendChild(entry)
            }
                // else{
                //     errmsg.innerHTML=`transaction failed`
                // }
            }
        
          
        else if(amount>0){

            income+=amount;
            localStorage.setItem('income',income)
            localStorage.getItem('expense')
            balance+=income
           localStorage.setItem('blnce',balance)
            // expense=0.00
            
                expmsg.innerHTML=`EXPENSE : $${expense}`
            incmmsg.innerHTML=`INCOME : $${income}`
            // localStorage.getItem('bln')
            blncmsg.innerHTML=`BALANCE : $${balance}`
            errmsg.innerHTML=`Transaction Successfull with msg ${msg}`
            let entry = document.createElement('li');
                let message= `Income Transaction of $${income} made with msg ${msg}`
                entry.appendChild(document.createTextNode(message))
                history.appendChild(entry)
        }//income=0.00
        //expense=0.00
        

    })

}



