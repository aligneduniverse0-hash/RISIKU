// ===============================
// RISIKU v2 JavaScript
// ===============================

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===============================
// Chatbot
// ===============================

const chatButton=document.getElementById("chatButton");
const chatWindow=document.getElementById("chatWindow");
const closeChat=document.getElementById("closeChat");

chatButton.addEventListener("click",()=>{

chatWindow.style.display="block";

});

closeChat.addEventListener("click",()=>{

chatWindow.style.display="none";

});

// ===============================
// Chat Responses
// ===============================

const chatBody=document.querySelector(".chat-body");

document.querySelectorAll(".chat-options button").forEach(button=>{

button.addEventListener("click",()=>{

const user=document.createElement("div");

user.className="bot-message";

user.style.background="#2563eb";

user.style.marginBottom="12px";

user.innerHTML="<strong>You:</strong> "+button.innerText;

chatBody.appendChild(user);

const bot=document.createElement("div");

bot.className="bot-message";

let reply="";

switch(button.innerText){

case "AI Solutions":

reply="RISIKU builds AI assistants, workflow automation and intelligent business tools tailored for your business.";

break;

case "Website Development":

reply="We create premium, fast, mobile-friendly websites designed to convert visitors into customers.";

break;

case "Cybersecurity":

reply="RISIKU helps protect businesses through security assessments, endpoint protection and cybersecurity best practices.";

break;

case "Book Consultation":

reply="Thank you for your interest! Soon this button will connect directly to our booking system and WhatsApp.";

break;

default:

reply="Thanks for contacting RISIKU.";

}

bot.innerHTML="<strong>RISIKU AI:</strong><br>"+reply;

chatBody.appendChild(bot);

chatBody.scrollTop=chatBody.scrollHeight;

});

});

// ===============================
// Fade in Navigation
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(7,18,31,.92)";

}else{

header.style.background="rgba(7,18,31,.75)";

}

});

console.log("RISIKU v2 Loaded Successfully");
/*================ SCROLL REVEAL ================*/

const revealElements = document.querySelectorAll(
".service-card, .project-card, .price-card, .testimonial-card, .contact-item"
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

revealElements.forEach((el)=>{

el.classList.add("hidden");

revealObserver.observe(el);

});
/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
    "service_tf5pp2d",
    "template_dthlnp3",
    this,
    "dqtvxCu4co4f8Ar7E"
)
        .then(function () {
            alert("✅ Message sent successfully!");
            contactForm.reset();
        })
        .catch(function (error) {
            console.error(error);
            alert("❌ Failed to send message.");
        });
    });
}
window.addEventListener("load",()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},800);

},1800);

});
window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });
    });
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(
".service-card, .project-card, .about, .contact, .testimonial-card"
).forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});