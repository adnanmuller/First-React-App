<?php

session_start();

if ( isset( $_POST[ 'submit' ] ) ) {
	include_once( 'dbh.inc.php' );

if(isset($_POST[ 'uid' ] )& isset($_POST[ 'pwd' ])){

	$uid = mysqli_real_escape_string( $conn, $_POST[ 'uid' ] );
	$pwd = mysqli_real_escape_string( $conn, $_POST[ 'pwd' ] );
}else{
	header( 'Location: ../index.php?login=empty');
	exit();
}


	//Error handler
	//Check if the input are emty
	if ( empty( $uid ) || empty( $pwd ) ) {
		header( 'Location: ../index.php?login=empty' );
		exit();
	} else {
		$sql = "SELECT * FROM users WHERE user_uid='$uid' or user_email='$uid';";
		$result = mysqli_query( $conn, $sql );
		$resultCheck = mysqli_num_rows( $result );
		if ( $resultCheck < 1 ) {
			header( 'Location: ../index.php?login=error_USER' );
			exit();

		} else {
			if ( $row = mysqli_fetch_assoc( $result ) ) {
				//De-hashing the password
				$hashedPasswordCheck = password_verify( $pwd, $row[ 'user_pwd' ] );
				if ( $hashedPasswordCheck == false ) {
					header( 'Location: ../index.php?login=error_PWD' );
					exit();
				} elseif ( $hashedPasswordCheck == true ) {
					//log in the user here
					$_SESSION[ 'u_id' ] = $row[ 'user_id' ];
					$_SESSION[ 'u_first' ] = $row[ 'user_first' ];
					$_SESSION[ 'u_last' ] = $row[ 'user_last' ];
					$_SESSION[ 'u_email' ] = $row[ 'user_email' ];
					$_SESSION[ 'u_uid' ] = $row[ 'user_uid' ];
				 $_SESSION['accountInfo']=$row ;
					//echo json_encode($row);

					header( 'Location: ../index.php?login=success' );
					exit();
				}
			}
		}
	}

} else {
	header( 'Location: ../index.php?login=error_GENERAL' );
	exit();
}
