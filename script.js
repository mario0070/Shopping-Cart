if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",ready)
}else{
    ready()
}

  // when the page is finish loading
function ready(){
         // the remove btn
    var redbtn=document.getElementsByClassName("btn-red")
    for(var i = 0 ; i < redbtn.length; i++){
    var button = redbtn[i]
    button.addEventListener("click",clicking)
    }

    var input_quant=document.getElementsByClassName("quant");
    for(var i = 0; i < input_quant.length; i++){
        inputs=input_quant[i]
        inputs.addEventListener("change",quantitychange)
    }

    var addtocart=document.getElementsByClassName("add")
    for(var i = 0;i < addtocart.length;i++){
        var addbtn=addtocart[i]
        addbtn.addEventListener("click",addtocartbtn)
    }

    document.getElementsByClassName("pcs")[0].addEventListener("click",purchaseclicked)
}

  // purchase button
function purchaseclicked(){
    alert("Thank You For Your Purchase")
    var btn2=document.getElementsByClassName("purchase1")[0]
    while(btn2.hasChildNodes()){
    btn2.removeChild(btn2.firstChild)
    }
    cart_total()
}


function clicking(event){
    var btnclick=event.target;
        btnclick.parentElement.parentElement.remove();
        cart_total()
}

 

  // this is to update the cart total
function cart_total(){
    var cartitems=document.getElementsByClassName("purchase1")[0]
    var cartrows=cartitems.getElementsByClassName("function1")
    var total=0;
    for(var i = 0 ; i < cartrows.length; i++){
        var cartrow=cartrows[i];
        var cartprice=cartrow.getElementsByClassName("item-price")[0];
        var quantity=cartrow.getElementsByClassName("quant")[0];
        var price=parseFloat(cartprice.innerText.replace("$",""));
        var input=quantity.value;
        total=total +(input * price)
        console.log(input * price)
        console.log(total)
    }
    document.getElementsByClassName("total")[0].innerText="TOTAL = $"+total;
}




// quantity changing method
function quantitychange(event){
    var input=event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value=1;
    }
    cart_total()
}


   // add to cart button
   function addtocartbtn(event){
    var addbtnclick=event.target
    var itemshop=addbtnclick.parentElement.parentElement.parentElement
    var prodname=itemshop.getElementsByClassName("prod-name")[0].innerText;
    var itemprice=itemshop.getElementsByClassName("price")[0].innerText;
    var shopimg=itemshop.getElementsByClassName("shopimg")[0].src;
    additemtocart(prodname,itemprice,shopimg);
    cart_total() ;
   }

   function additemtocart(prodname,itemprice,shopimg){
    var elementcrt=document.createElement("div")
    var classitems=document.getElementsByClassName("purchase1")[0]
    var classnames=classitems.getElementsByClassName("p-text")
    for(var i = 0; i < classnames.length;i++){
        if(classnames[i].innerText==prodname){
            alert("This item is already added to the cart")
            return;
        }

        
    }
    var elementcrtcontent=`
    <div class="function1 function">
    <span class="item"><img src="${shopimg}" alt="" style="height: 100px;"><span class="p-text">${prodname}</span></span>
    <span class="price marg item-price">${itemprice}</span>
    <span class="quantity marg"><input type="number" class="quant" value="1"> <button class="btn-red">Remove</button></span>
    </div>
    `
    elementcrt.innerHTML=elementcrtcontent;
    classitems.append(elementcrt)
    elementcrt.getElementsByClassName("btn-red")[0].addEventListener("click",clicking);
    elementcrt.getElementsByClassName("quant")[0].addEventListener("change",quantitychange)
   }










   //  add animation when the page is loading
window.onload=function(){func1()}
var img=document.getElementById("prodl");
var cat=document.getElementById("cat");
var whats=document.getElementById("whatsap")

function func1(){
    img.classList.add("this");
    cat.classList.add("that");
    whats.classList.add("them")
}




   // fixed navbar
window.onscroll=function(){myfunc()}
var navbar=document.getElementById("nav")
var sticky=navbar.offsetTop;

function myfunc(){
    if(window.pageYOffset>=sticky){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky")
    }
}



// drop down for my shopping
$(document).ready(function (){
    $(".shop").click(function (){
       $(".first-prod").slideToggle("slow")
    })
})

    // drop down for acct
var my_acct=document.getElementById("my-acct");
var acct=document.getElementById("acct");
my_acct.addEventListener("click", ()=>{
    acct.classList.toggle("valid")
})

   // dropdown for help
var helps=document.getElementById("helps");
var help=document.getElementById("help");
helps.addEventListener("click", ()=>{
    help.classList.toggle("valid")
})


    // toggle darkmode
var btnd=document.getElementById("dark")
var darks=document.getElementById("darks")
var nav=document.getElementById("nav")
var que=document.getElementById("que")
var ques=document.getElementById("ques")
var body=document.getElementById("body")
var prodi=document.getElementById("prodi")
var cart=document.getElementById("carts")
var secprod=document.getElementById("sec-prod")
btnd.addEventListener("click",()=>{
    console.log("clicked")
    body.classList.toggle("valid")
    nav.classList.toggle("valid")
    que.classList.toggle("valid")
    ques.classList.toggle("valid")
    prodi.classList.toggle("valid")
    carts.classList.toggle("valid")
    darks.classList.toggle("valid")
    secprod.classList.toggle("valid")

})