const btn1  = document.querySelector(".btn1");
const form  = document.querySelector("form");
const span1  = document.querySelector(".span1");
const inputEmail  = document.querySelector(".inputEmail");
const inputPass = document.querySelector(".inputPass");
 inputEmail.value=""
 inputPass.value=""
console.log("",inputEmail,inputPass)


form.addEventListener("submit",()=>{
    event.preventDefault()
})
btn1.addEventListener("click",()=>{
    console.log("inl")
    const inE = inputEmail.value.length
    const inP = inputPass.value.length
    
 console.log(inP)


 const name1 ="hello"
   if(inE<20){
    document.querySelector(".span2").innerHTML="Incurret Email Address !"

}
   else if(inE>20){
    document.querySelector(".span2").innerHTML="";

}  



})

btn1.addEventListener("click",()=>{
    console.log("helo")
     const inP = inputPass.value.length

    console.log(inP)
   
   
    const name1 ="hello"
      if(inP<5){
       span1.innerHTML="Incurret password !"
   
   }
      else if(inP>5){
        span1.innerHTML=""
   
   } 
     
})





