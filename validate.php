<?php

$name2=$_POST['name'];
$email2=$_POST['email'];
$password2=$_POST['password'];
$connection=mysqli_connect("localhost","root","");
mysqli_select_db($connection,"mydb");
$query="insert into registration(name,email,password)values('$name2','$email2','$password2')";
$result = mysqli_query($connection,$query);
	echo "form submitted successfully";
	mysqli_close($connection);
?>