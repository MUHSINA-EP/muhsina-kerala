let email=document.getElementById("email");
let pwd=document.getElementById("pwd");

function validate()
{
    if(email.value==""||pwd.value=="")
    {
        alert("fields cannot be empty");
        return false;
    }
    else
    {
        return true;
    }
}