
let survey=document.getElementById("survey");
let  add=document.getElementById("add_more_field");


add_more_field.onclick= function()
{
var input=document.createElement("input");
input.setAttribute('type',"text");
input.setAttribute('name','survey[]');
input.setAttribute('class','survey');
input.setAttribute('size',50);
input.setAttribute('placeholder','Another-field');

survey.appendChild(input);

}