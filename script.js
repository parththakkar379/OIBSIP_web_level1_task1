document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault()

let name=document.getElementById("name").value
let email=document.getElementById("email").value

if(name==="" || email===""){
alert("Please fill all fields")
}
else{
alert("Message Sent Successfully!")
}

})


window.addEventListener("scroll",function(){

let reveals=document.querySelectorAll(".reveal")

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight
let elementTop=reveals[i].getBoundingClientRect().top

if(elementTop < windowHeight-100){
reveals[i].classList.add("active")
}

}

})