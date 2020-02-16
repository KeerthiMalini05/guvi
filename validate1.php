<?php

$age2=$_POST['age'];
$dob2=$_POST['dob'];
$contact2=$_POST['contact'];
$connection=mysqli_connect("localhost","root","");
mysqli_select_db($connection,"mydb");
$query="insert into registration(AGE,D.O.B,phno)values('$age2','$dob2',$contact)";
$result = mysqli_query($connection,$query);
	echo "<script>
	alert('form submitted successfully');
	</script>";
	mysqli_close($connection);
?>