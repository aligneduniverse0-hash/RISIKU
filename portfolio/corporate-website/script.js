function sendMessage(){

const input=document.getElementById("userInput");

const chat=document.getElementById("chatWindow");

const text=input.value.trim();

if(text==="") return;

chat.innerHTML+=`

<div class="message user">

${text}

</div>

`;

let reply="";

const msg=text.toLowerCase();

if(msg.includes("price")||msg.includes("cost")){

reply="Our website packages start from R2 500. AI solutions are quoted based on your requirements.";

}

else if(msg.includes("website")){

reply="RISIKU builds modern responsive websites for businesses of every size.";

}

else if(msg.includes("ai")){

reply="We build AI assistants that answer customers, qualify leads and automate business processes.";

}

else if(msg.includes("contact")){

reply="You can book a consultation from the button at the bottom of this page.";

}

else{

reply="Thanks for your question. Our team would be happy to discuss your project during a consultation.";

}

const typing=document.createElement("div");

typing.className="message bot";

typing.id="typing";

typing.innerHTML="Typing...";

chat.appendChild(typing);

chat.scrollTop=chat.scrollHeight;

setTimeout(()=>{

document.getElementById("typing").remove();

chat.innerHTML+=`

<div class="message bot">

${reply}

</div>

`;

chat.scrollTop=chat.scrollHeight;

},1000);

input.value="";

}
document
.getElementById("userInput")
.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});