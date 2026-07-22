function sendMessage() {

const input = document.getElementById("userInput");
const chat = document.getElementById("chatWindow");

const message = input.value.trim();

if(message==="") return;

const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
});

chat.innerHTML += `
<div class="message user">
${message}
<div class="time">${time}</div>
</div>
`;

input.value="";

const typing=document.createElement("div");

typing.className="message bot typing";

typing.innerHTML="RISIKU AI is typing...";

chat.appendChild(typing);

chat.scrollTop=chat.scrollHeight;

setTimeout(()=>{

typing.remove();

let reply="";

const text=message.toLowerCase();

if(text.includes("website")){

reply=`
<strong>We build:</strong><br><br>

✅ Business Websites<br>
✅ E-commerce Stores<br>
✅ Portfolio Websites<br>
✅ Custom Web Applications<br><br>

Average delivery: 2-4 weeks.
`;

}

else if(text.includes("ai")){

reply=`
Our AI solutions include:<br><br>

🤖 AI Chatbots<br>
⚡ Workflow Automation<br>
📊 Business Intelligence<br>
📞 Customer Support AI
`;

}

else if(text.includes("cyber")){

reply=`
RISIKU provides:<br><br>

🔒 Security Assessments<br>
🛡️ Endpoint Protection<br>
🌐 Network Security<br>
📈 Security Monitoring
`;

}

else if(text.includes("price") || text.includes("cost")){

reply=`
Every project is different.

Book a free consultation and we'll provide a tailored quotation based on your requirements.
`;

}

else{

reply=`
Thanks for your question.

One of our specialists would be happy to discuss your project in more detail.
`;

}

chat.innerHTML += `
<div class="message bot">
${reply}
<div class="time">${time}</div>
</div>
`;

chat.scrollTo({
    top: chat.scrollHeight,
    behavior: "smooth"
});

},1500);

}
document
.getElementById("userInput")
.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});
function animateValue(id,end,speed){

let start=0;

const element=document.getElementById(id);

const timer=setInterval(()=>{

start++;

element.innerText=start;

if(start>=end){

clearInterval(timer);

}

},speed);

}

animateValue("chatCount",84,25);

animateValue("leadCount",18,70);
document.getElementById("userInput").addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});
function quickQuestion(question){

document.getElementById("userInput").value=question;

sendMessage();

}
window.onload = function(){

setTimeout(()=>{

const chat=document.getElementById("chatWindow");

chat.innerHTML += `
<div class="message bot">
👋 Welcome to RISIKU AI.

I'm here to answer questions about websites, AI automation, cybersecurity, and digital solutions.

Try asking me:
<ul>
<li>How much is a website?</li>
<li>Tell me about AI.</li>
<li>What cybersecurity services do you offer?</li>
</ul>
</div>
`;

},2000);

};