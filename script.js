const cards=document.querySelectorAll(".card");

cards.forEach(card=>{
card.addEventListener("click",()=>{
card.style.boxShadow="0 0 50px #ff00ff";
setTimeout(()=>{
card.style.boxShadow="0 0 20px cyan";
},400);
});
});
