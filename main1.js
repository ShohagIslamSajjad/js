
let array = [
{ 
  img: "img/img1.png",
  title: "T-shart.1",
  price: 42.00,
  dsc:"Some quick example text to build on the card title and make up the bulk of the card's content."
  
},
{ 
  img: "img/img2.jpeg",
  title: "T-shart.2",
  price: 400.00,
  dsc:"Some quick example text to build on the card title and make up the bulk of the card's content."
  
},
{ 
  img: "img/img3.jpeg",
  title: "T-shart.3",
  price: 2.00,
  dsc:"Some quick example text to build on the card title and make up the bulk of the card's content."
  
},
{ 
  img: "img/img4.jpeg",
  title: "T-shart.4",
  price: 452.00,
  dsc:"Some quick example text to build on the card title and make up the bulk of the card's content."
  
},
{ 
  img: "img/img5.jpeg",
  title: "T-shart.5",
  price: 542.00,
  dsc:"Some quick example text to build on the card title and make up the bulk of the card's content."
  
},
{ 
  img: "img/img6.jpeg",
  title: "T-shart.6",
  price: 427.00,
  dsc:"Some quick example text to build on the card title and make up the bulk of the card's content."
  
},
{ 
  img: "img/img7.jpeg",
  title: "T-shart.7",
  price: 432.00,
  dsc:"Some quick example text to build on the card title and make up the bulk of the card's content."
  
},
{ 
  img: "img/img8.jpeg",
  title: "T-shart.8",
  price: 412.00,
  dsc:"Some quick example text to build on the card title and make up the bulk of the card's content."
  
},
{ 
  img: "img/img9.jpeg",
  title: "T-shart.9",
  price: 442.00,
  dsc:"Some quick example text to build on the card title and make up the bulk of the card's content."
  
},
{ 
  img: "img/img10.jpeg",
  title: "T-shart.10",
  price: 142.00,
  dsc:"Some quick example text to build on the card title and make up the bulk of the card's content."
  
},
{ 
  img: "img/img11.jpeg",
  title: "T-shart.11",
  price: 462.00,
  dsc:"Some quick example text to build on the card title and make up the bulk of the card's content."
  
},
{ 
  img: "img/img12.jpeg",
  title: "T-shart.12",
  price: 462.00,
  dsc:"Some quick example text to build on the card title and make up the bulk of the card's content."
  
},




]






const divRow = document.querySelector(".div-row")

   array.forEach((a)=>{
  
     
     
    const html = `     
        
    
    
    <div class="col-lg-3 mb-2 col-md-4 col-sm-6 col-xm-12">
<div style="background-color: white;border-radius: 5px;">
  <img style=" display: block;height:200px;width: 300px;" src="${a.img}" alt="..." class="img-thumbnail">
  <div class="">
  <i style="color:#f9a602;" class="far fa-star"></i>
  <i style="color:#f9a602;" class="far fa-star"></i>
  <i style="color:#f9a602;" class="far fa-star"></i>
  <i style="color:#f9a602;" class="far fa-star"></i>
  <i  class="far fa-star"></i>
  <h3 >${a.title}</h3>
  <h4 >$${a.price}.00</h4>
  <small>${a. dsc}</small>
  <div class="row container">
<div class="col-6"><button class="btn btn-card w-100 btn-primary">CARD</button></div>
<div class="col-6"><button class="btn w-100 btn-primary">BUY</button></div>

  </div>
</div>
<br>
</div>

  </div>
    
    `

divRow.insertAdjacentHTML("beforeend",html)



    
   })

   const inputSearch = document.querySelector(".input-search")
   inputSearch.value=""
const btnSearch = document.querySelector(".btn-search")
  
btnSearch.addEventListener("click",()=>{
  divRow.innerHTML = `<h1 class="text-center text-success p-2 bg-white">Your search result !</h1>`
  array.forEach((e)=>{
    if(e.title.includes(inputSearch.value)){
console.log(e.title)
const html = `     
        
    
    
<div class="col-lg-3 mb-2 col-md-4 col-sm-6 col-xm-12">
<div style="background-color: white;border-radius: 5px;">
<img style=" display: block;height:200px;width: 300px;" src="${e.img}" alt="..." class="img-thumbnail">
<div class="">
<i style="color:#f9a602;" class="far fa-star"></i>
<i style="color:#f9a602;" class="far fa-star"></i>
<i style="color:#f9a602;" class="far fa-star"></i>
<i style="color:#f9a602;" class="far fa-star"></i>
<i  class="far fa-star"></i>
<h3 >${e.title}</h3>
<h4 >$${e.price}.00</h4>
<small>${e. dsc}</small>
<div class="row container">
<div class="col-6"><button class="btn btn-card w-100 btn-primary">CARD</button></div>
<div class="col-6"><button class="btn w-100 btn-primary">BUY</button></div>

</div>
</div>
<br>
</div>

</div>

`

divRow.insertAdjacentHTML("beforeend",html)
return;

    }  
 
  })
  inputSearch.value=""
})
let btnCard = document.querySelectorAll(".btn-card")
btnCard.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
   console.log(e.target.parentElement)
  })
})
// btnCard.addEventListener("click",()=>{
//   console.log("hi")
// })











