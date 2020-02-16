$(document).ready(function(){
$("#submit").click(function(){
var age = $("#age").val();
var dob = $("#dob").val();
var contact= $("#contact").val();
// Returns successful data submission message when the entered information is stored in database.
var dataString = '&age='+ age + '&dob='+ dob + '&contact' + contact ;
if(age==''||dob==''||contact=='')
{
alert("Please Fill All Fields");
}
else
{
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "validate1.php",
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