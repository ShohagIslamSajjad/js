const html =`
  

<div style="background-color:#6200EE;">

<div class="container">
  <div>
  <div class="div1 p-2 ">
  
    <span class="mx-n5">


   <input type="search" placeholder="Search..." name="search">
   <button class="btn btn-warning"><b style="color:yellow;">Search</b></button>


    </span>
    <a class="text-warning" href="index.html"><b><i class="fas fa-home"></i>Home</b></a>

    <a class="text-warning" href=""><b><i class="fas fa-user-plus"></i>Login</b></a>
    <a class="text-warning" href=""><b><i class="fas fa-sign-in-alt"></i>.SignUp</b></a>
    <a class="text-warning" href="#"><b><i class="fas fa-cart-plus"></i>-Card</b></a>


  </div>

  </div>
</div>

</div>


<div class="bg-warning">


<section class="container">


<div class="form-div ">
    <div class="container"> 
    <div class="div1-form mt-5">
      <div class="container">
        <div class="d-flex justify-content-center">
            <span class="h1">LOGO</span>
        </div>
        
<form  class="user-from form-group mt-4" method="POST">
  <span class="text-warning span2" ></span>

<input type="email"  class="form-control inputEmail mt-6" name="user:" placeholder="User Name Or Email">
<span class="text-warning span1" ></span>
<input type="password" class="form-control inputPass mt-2" name="pass:" placeholder="Password">

<button style="color:yellow;width: 30px;" class="btn  btn1 btn-warning mt-2 w-100"><b>SignIN</b></button>
<div class="row mt-2">


<div class="col-6"><span class="h3 text-warning"></span><a href="#"><i  style="font-size:30px;color: blue;" class="fab fa-facebook "></i></a>
  <span class="h3 text-warning"></span><a href="#"><i  style="font-size:30px;color: red;" class="fab fa-google "></i></a>
</div>
<div class=" p-2">
    <a class="text-white" href=""><small>Create A New Account....!</small></a>
</div>
</div>
</form>

</div>
</div>

</div>


</section>
<br>
<br><br><br><br>

</div>
<div class="bg-dark mb-2"><br><br></div>

`
console.log(html)
document.querySelector(".storeBody").innerHTML = html;

