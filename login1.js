$(document).ready(function(){
$("#submit").click(function(){
var email = $("#email").val();
var password = $("#password").val();
// Checking for blank fields.
if( email =='' || password ==''){
$('input[type="text"],input[type="password"]');
$('input[type="text"],input[type="password"]');
window.alert("Please fill all fields...!!!!!!");
}else {
$.post("login1.php",{ email: email, password:password},
function(data) {
if(data=='Invalid Email.......') {
$('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
$('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
window.alert(data);
}else if(data=='Email or Password is wrong...!!!!'){
$('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
window.alert(data);
} else if(data=='Successfully Logged in...'){
$("form")[0].reset();
$('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
window.alert(data);
} else{
alert(data);
}
});
}
});
});
