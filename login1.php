<?php
// Selecting Database.
$connection = mysqli_connect("localhost", "root", ""); // Establishing connection with server..
mysqli_select_db($connection,"mydb"); 
$email=$_POST['email']; // Fetching Values from URL.
$password=$_POST['password']; // Password Encryption, If you like you can also leave sha1.
// check if e-mail address syntax is valid or not

$email = filter_var($email, FILTER_SANITIZE_EMAIL); // sanitizing email(Remove unexpected symbol like <,>,?,#,!, etc.)
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
echo "Invalid Email.......";
}else{
// Matching user input email and password with stored email and password in database.
$s="SELECT * FROM registration WHERE email='$email' AND password='$password'";
$result = mysqli_query($connection,$s);
$data = mysqli_num_rows($result);
if($data == 1){
header("location:more.html");
exit;
}else{
	echo "<script>
	alert('invalid email or password');
	window.location.href='newlogin.html';
	</script>";
}
}


mysqli_close ($connection); // Connection Closed.
?>