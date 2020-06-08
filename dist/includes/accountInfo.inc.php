<?php
session_start();
	//header('Content-Type: application/json');
$value=$_SESSION['accountInfo'];
echo json_encode($value);


  ?>
