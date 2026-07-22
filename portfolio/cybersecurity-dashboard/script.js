console.log("RISIKU Cybersecurity Dashboard Loaded");
function animate(id,end){

let value=0;

const el=document.getElementById(id);

const timer=setInterval(()=>{

value++;

el.innerText=id==="score" ? value+"%" : value;

if(value>=end){

clearInterval(timer);

}

},20);

}

animate("score",98);

animate("devices",124);