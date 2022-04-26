let submit=document.querySelector('#submit')
let nameid=document.querySelector('#name')
let emailid=document.querySelector('#email')
let phoneid=document.querySelector('#phone')
let passid=document.querySelector('#pass')
let cpassid=document.querySelector('#cpass')
let errname=document.querySelector('#demon')
let erremail=document.querySelector('#demoe')
let errphone=document.querySelector('#demop')
let errpass=document.querySelector('#democp')
let errcpass=document.querySelector('#democpp')
// let submit=document.querySelector('#submit')
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let name=nameid.value
    let email=emailid.value
    let phone=phoneid.value
    let pass=passid.value
    let cpass=cpassid.value
    // let name=nameid
    const checkRequired=()=>{
        if(name=="") {
            errname.textContent='name field is required'
           
        }
        else if(email=="") {
            erremail.textContent='email field is required'
           
        }
        else if(pass=="") {
            errpass.textContent='password field is required'
           
        }
        else if(cpass=="") {
            errcpass.textContent='confirm password field is required'
           
        }
        else if(phone=="") {
            errphone.textContent='phone field is required'
           
        }
    }
    function checkEmail(mail)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(mail.value.match(mailformat))
{
    //erremail.textContent='Enter a valid email address'
    return true;
}
else {
    erremail.textContent='Enter a valid email address'
    return false;
}

}
function checkPasswordsMatch(){
    if(pass===cpass){
        return true;
    }else{
        errpass.textContent='Passwords are not matching'
        errcpass.textContent='Passwords are not matching'
        return false;
    }
}
function checkLength(passid){
    let passRegex=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(passid.value.match(passRegex)){
        return true;
    }
    else{
        errpass.textContent='enter correct format password'
    }
}

    checkRequired()
    checkEmail(emailid)
    checkLength(passid)
    checkPasswordsMatch()

    // checkRequired(email)
//    console.log(name)
})