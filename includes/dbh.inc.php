<?php

$dbServername="localhost";
$dbUsername="root";
$dbPassword="ingmatic68";
$dbName="peopleApp";

$conn=mysqli_connect($dbServername,$dbUsername,$dbPassword,$dbName);
if($conn){
					//	echo"connection  Ok<br>";
					}
					else{
						echo"connection NOT OK<br>";
					}
