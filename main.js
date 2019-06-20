var d1 = document.getElementById('form1');
var d2 = document.getElementById('form2');
var d3 = document.getElementById('form3');


function Swap()
{
  if( d2.style.display == "none" ){
     d1.style.display = "none";
     d2.style.display = "block";   
     console.log("working");  
  }
  else 
  {
     d1.style.display = "block";
     d2.style.display = "none";   
  }
};
function SecondSwap(){
    if( d3.style.display == "none" )
    {
    d1.style.display = "none";
    d3.style.display = "block";   
    console.log("hello")
}else
{
    d1.style.display = "block";
      d3.style.display = "none";
} 
};

