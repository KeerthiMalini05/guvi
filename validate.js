function checkbox1()
	{
		
	   a=document.getElementById("field1").value;
	  
	   var pattrn=new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");
	   if(pattrn.test(a))
	   {
                 
                 document.getElementById("field1").innerHTML="";
	   }
	   
	   	else{
	   	document.getElementById("error1").innerHTML="OOPS! ITS NOT VALID NAME";
	   	document.getElementById("error1").style.color="red";

	   }
}

	function checkbox2()
	{
		
	   a=document.getElementById("field2").value;
	  
	   var pattrn1=new RegExp("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$");
	   if(pattrn1.test(a))
	   {
                 
                 document.getElementById("field2").innerHTML="";
	   }
	   
	   	else{
	   	document.getElementById("error2").innerHTML="OOPS! ITS NOT VALID EMAIL";
	   	document.getElementById("error2").style.color="red";

	   }
}
function checkbox3()
	{
		
	   a=document.getElementById("field3").value;
	  
	   var pattrn2=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
	   if(pattrn2.test(a))
	   {
                 
                 document.getElementById("field3").innerHTML="";
	   }
	   
	   	else{
	   	document.getElementById("error3").innerHTML="OOPS! ITS NOT STRONG PASSWORD";
	   	document.getElementById("error3").style.color="red";

	   }

		}
		function checkbox4()
		{
			a=document.getElementById("field3").value;
			b=document.getElementById("field4").value;
if(a==b)
{
	 document.getElementById("field3").innerHTML="";
		}else
		{
			document.getElementById("error4").innerHTML="OOPS! PASSWORD MISMATCH";
	   	document.getElementById("error4").style.color="red";
		}
}
	
	function checkbox5()
	{
		
	   a=document.getElementById("field5").value;
	  
	   var pattrn4=new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$");
	   if(pattrn4.test(a))
	   {
                 
                 document.getElementById("field5").innerHTML="";
	   }
	   
	   	else{
	   	document.getElementById("error5").innerHTML="OOPS! ENTER PROPER PHONE NO WITH COUNTRY CODE";
	   	document.getElementById("error5").style.color="red";

	   }

}
$(document).ready(function(){
$("#submit").click(function(){
var name = $("#name").val();
var email = $("#email").val();
var password = $("#password").val();
// Returns successful data submission message when the entered information is stored in database.
var dataString = '&name='+ name + '&email='+ email + '&password='+ password ;
if(name==''||email==''||password=='')
{
alert("Please Fill All Fields");
}
else
{
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "validate.php",
data: dataString,
cache: false,
success: function(result){
alert(result);
}
});
}
return false;
});
});
   