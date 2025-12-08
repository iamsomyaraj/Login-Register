let b= document.querySelector("#slide");
let co=document.querySelector(".cover");
let h=document.querySelector("#change");
let s=document.querySelector(".signin");
let l=document.querySelector(".login");
let n="active";

b.addEventListener("click",()=>{
if(n==="active"){
    co.classList.add('active');
    n="noactive";
    h.innerText="Old User";
}
else{
    co.classList.remove('active');
    n="active";
    h.innerText="New User";
}
});