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

  <?php echo
'<form class="form-inline ml-auto " id="loginNav" action="login.php" method="post">
<label for="userInput" id="labelForm"><img src="img/user3.png"></label>
<input type="text" class="form-control" id="userInput" placeholder="User Name" name="name" />
<input type="password" class="form-control" id="passwordInput" placeholder="password" name="pswd" />
<div class="form-check">
</div>
<button type="submit" class="btn btn-primary">Log in</button>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Register</button>
</form>

<!-- The Modal -->
<div class="modal" id="myModal">
<div class="modal-dialog">
  <div class="modal-content">

    <!-- Modal Header -->
    <div class="modal-header">
      <h4 class="modal-title">Modal Heading</h4>
      <button type="button" class="close" data-dismiss="modal">&times;</button>
    </div>

    <!-- Modal body -->
    <div class="modal-body">
      Modal body..
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
