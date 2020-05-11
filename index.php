<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>The People App</title>
  <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  <script type="text/babel" src="app1.js" ></script>
  <script type="text/babel" src="main.js" ></script>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/animate.css">
  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

  <link rel="stylesheet" href="css/main.css">

</head>

<body>

  <header id="header">

  </header>

  <?php
  if(isset($_SESSION['u_id'])){
  echo'<form  id="loginNav" action="includes/logout.inc.php"  method="post">
  <button type="submit" name="submit" class="btn btn-primary">Logout</button></form>';
}else{
  echo '<form class="form-inline ml-auto " id="loginNav" action="includes/login.inc.php" method="post">
  <label for="userInput" id="labelForm"><img src="img/user3.png"></label>
  <input type="text" class="form-control" id="userInput" placeholder="User Name" name="uid" />
  <input type="password" class="form-control" id="passwordInput" placeholder="password" name="pwd" />
  <button type="submit" class="btn btn-primary" name="submit">Log in</button>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Register</button>
  </form>';
}

?>

<!-- The Modal -->
<div class="modal" id="myModal">
<div class="modal-dialog">
  <div class="modal-content">

    <!-- Modal Header -->
    <div class="modal-header">
      <h4 class="modal-title">Signup</h4>
      <button type="button" class="close" data-dismiss="modal">&times;</button>
    </div>

    <!-- Modal body -->
    <div class="modal-body">
    <form class="signupform was-validated"  action="includes/signup.inc.php" method="post">
      <input type="text" name="first" placeholder="Firstname" required>
      <input type="text" name="last" placeholder="Lastname" required>
      <input type="email" name="email" placeholder="E-mail" required>
      <input type="text" name="uid" placeholder="Username" required>
      <input type="password" name="pwd" placeholder="Password" required>
      <div id="registerButton"  >
      <button type="submit" name="submit" class="btn-primary">Sign up</button>
      <button type="reset"  class="btn-primary">reset</button>
    </div>
    </form>
    </div>

    <!-- Modal footer -->
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
    </div>

  </div>
</div>
</div>'


  ?>



<div class="wrapperMain">

<div class="mainTitle">
  <h1 id="title">The People App</h1>
  <p id="myName">Powered by Adnan Müller</p>
</div>


  <div class="" id="root1"></div>

  <div class="" id="root2"></div>



  <div class="" id="div1"></div>
  <div class="" id="card"></div>
  <div id="command">
  <div class="" id="controller"></div>
  <div class="" id="controllerInfo"></div>
  <span class="badge badge-warning" id="controllerWarning"></span>
  </div>

</div>


</body>

</html>
