const data=document.getElementById('main');
let limit=20;
let pagecount=1;
let postcount =1;
let str="";
const getpost =async()=>
{
const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pagecount}`);
const responsedata=await response.json();
// console.log(response)
 
for(value of responsedata)
{
str+=`
<div id="main">
<p class="firsclass">${postcount++}</p>
<h4 class="fourth">${value.id}</h4>  
<span class="second">${value.title}</span> 
<dd class="third">${value.body}</dd>   
</div><br>`
//  data.insertAdjacentHTML('beforeend',str);
}
 document.getElementById("main").innerHTML=str
}
getpost();
function setdata()
{
  setTimeout(()=>
  {
    // pagecount++;
    getpost();
  },100)
}
window.addEventListener('scroll',()=>
{    
  // alert("hello")                        
  const {scrollHeight, scrollTop, clientHeight } = document.documentElement; 
  if(scrollTop + clientHeight >= scrollHeight)
  {
    // console.log(" scrolled doneeeeeee")
setdata();                            
  }                                                      
});