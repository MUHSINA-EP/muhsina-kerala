let email=document.getElementById("email");
let error=document.getElementById("error");
let phone=document.getElementById("phone");
let password=document.getElementById("pwd")

function Validate1() 
{
    let regexp =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regexp.test(email.value))
    {
      error.innerHTML = "Valid";
      error.style.color = "green";
      return (true);
    }
    else{
      error.innerHTML = "Invalid";
      error.style.color = "red";
      return (false);
    }
    
}
function Validate2() {
    var phone1=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var x=phone1.test(phone.value);
     if(x){
    }else{
    alert("phone number is not valid");
    return false;
    } 
}

function Validate3() {
    if(pwd.value.length<=8){
        alert("password is too short");
        return false;
    }
}

 



