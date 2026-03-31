function showSection(sectionId){

let sections = document.querySelectorAll("section");
let links = document.querySelectorAll("nav ul li a");

sections.forEach(sec => sec.style.display = "none");

links.forEach(link => link.classList.remove("active"));

document.getElementById(sectionId).style.display =
(sectionId === "home") ? "flex" : "block";

event.target.classList.add("active");
}

window.onload = function(){
showSection("home");
};

window.addEventListener("scroll", function(){

let skills = document.getElementById("skills");
let position = skills.getBoundingClientRect().top;
let screen = window.innerHeight;

if(position < screen - 100){
let bars = document.querySelectorAll(".progress div");
bars.forEach(bar => {
bar.style.animation = "fillBar 2s forwards";
});
}
});

function showMessage(event){
    event.preventDefault();
    alert("Thanks, your message has reached Amartya Hazra.");
}