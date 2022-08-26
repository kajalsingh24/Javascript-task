function validation()
{
let error=0;
var username=document.getElementById('username').value;
var email=document.getElementById('email').value;
var number=document.getElementById('number').value;


var usercheck=/^[A-Za-z. ]{3,30}$/;
var emailcheck=/^[a-z0-9_]{3,}@[a-z0-9]{3,}[.]{1}[a-z]{2,6}$/;
var numbercheck=/^[789][0-9]{9}$/g;
// --------------------------------------------username-------------------------------------

if(username=="")
{
   error=1;
   document.getElementById('usererror').innerHTML="pleasr enter the text";
   document.getElementById('username').classList.add('bordercolor');
}
else if(usercheck.test(username))
{
   document.getElementById('usererror').innerHTML="";  
   document.getElementById('username').classList.remove('bordercolor'); 
}
else
{
   document.getElementById('usererror').innerHTML="** user name is invalid";
   document.getElementById('username').classList.add('bordercolor');
 
}
// -----------------------------------------email------------------------------


if(email=="")
{
   error=1;
   document.getElementById('emailerror').innerHTML="pleasr enter the email";
   document.getElementById('email').classList.add('bordercolor');
}
else if(emailcheck.test(email))
{
   document.getElementById('emailerror').innerHTML=""; 
   document.getElementById('email').classList.remove('bordercolor');  
}
else
{
   document.getElementById('emailerror').innerHTML="** email is invalid";
   document.getElementById('email').classList.add('bordercolor');

}
// ------------------------------------------phoen number-------------------------------
if(number=="")
{
   error=1;
   document.getElementById('numbererror').innerHTML="pleasr enter the Number";
   document.getElementById('number').classList.add('bordercolor');
}
else if(numbercheck.test(number))
{
   // if(number == 108)
   // {
   //    // error = 1;
   //    return;
   //    document.getElementById('numbererror').innerHTML="** Number us invalid is invalid";
   // }
   document.getElementById('numbererror').innerHTML=""; 
   document.getElementById('number').classList.remove('bordercolor');  
}
else
{
   document.getElementById('numbererror').innerHTML="** Number us invalid is invalid";
   document.getElementById('number').classList.add('bordercolor');

}
// ------------------------------------------gender----------------------------------------

let gendervalue =document.querySelector('[name=container]:checked')
if(gendervalue==null)
{
   error=1;
   document.getElementById('m2').innerHTML="please enter the gender";
  
}
else
{
   document.getElementById('m2').innerHTML="";

}
// -----------------------------------------------------select city-------------------------------------

let selectbox=document.querySelectorAll('#color>option:checked');
str="";
for(let x of selectbox)
{
   
   str+=x.value;
   if(x.value=="")
   {
      error=1;
   
    document.getElementById('selecterror').innerHTML="please  select city";
    
   }
   else
   {
      document.getElementById('selecterror').innerHTML="";
     
   }

}
// ----------------------------------------checkbox-----------------------------------------
var language=document.querySelectorAll('input[type="checkbox"]:checked')

if(language.length>0)
{
   
   document.getElementById("ch").innerHTML=" ";

}
else
{
   error=1;
   document.getElementById("ch").innerHTML="please select box";
}
// ---------------------------validation form submit-------------------------
if(error==1)
{
   return false;
}
else
{
   return true;
}

}


                          