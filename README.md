# Portfolio_Project
HTML:-
<!DOCTYPE html>
<html>

<head>
<title>Portfolio</title>

<link rel="stylesheet" href="style.css">

<!-- ICON LIBRARY -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

</head>

<body>

<nav>

<h2 class="logo">Portfolio.</h2>

<ul>
<li><a href="#" onclick="showSection('home')">Home</a></li>
<li><a href="#" onclick="showSection('about')">About</a></li>
<li><a href="#" onclick="showSection('skills')">Skills</a></li>
<li><a href="#" onclick="showSection('projects')">Projects</a></li>
<li><a href="#" onclick="showSection('contact')">Contact</a></li>
</ul>

</nav>

<!-- HOME -->
<section id="home" class="home">

<div class="text">

<h3>Hello, It's Me</h3>
<h1>AMARTYA HAZRA</h1>

<h2 class="typing">
<span>And</span>
<span>I'm</span>
<span>a</span>
<span>Desktop</span>
<span>Support</span>
<span>Engineer</span>
</h2>

<p>
I am a Computer Science student interested in hardware networking, OS installation, Outlook configuration, and basic troubleshooting.
</p>

<!-- SOCIAL MEDIA BUTTONS -->

<div class="social-media">

<a href="https://www.facebook.com/share/1CHc2Quz4p/"><i class="fa-brands fa-facebook-f"></i></a>

<a href="https://www.instagram.com/amartya_hazra89"><i class="fa-brands fa-instagram"></i></a>

<a href="https://www.linkedin.com/in/amartya-hazra-1a62ab2ab"><i class="fa-brands fa-linkedin-in"></i></a>

<a href="https://github.com/amartya568"><i class="fa-brands fa-github"></i></a>

</div>

<a href="Amartyaresume.pdf" download>
<button>Download CV</button>
</a>

</div>

<div class="image">
<img src="profile.jpg">
</div>

</section>

<!-- ABOUT -->
<section id="about" class="about">

<div class="about-wrapper">

<div class="about-img">
<img src="profile1.jpg" alt="profile">
</div>

<div class="about-container">

<h2>About Me</h2>

<p>
I am a passionate <span>Computer Science and Engineering student</span> currently pursuing B.Tech at Future Institute of Technology.
</p>

<p>
With a strong foundation in <span>Python, Java, SQL, and Front-End Development</span>, I enjoy building real-world projects such as Spotify Clone and AI-powered Resume Analyzer.
</p>

<p>
I am enthusiastic about learning new technologies like <span>Cloud Computing</span> and <span>Identity & Access Management (Microsoft Entra ID)</span>.
</p>

<p>
My goal is to start my career as a <span>Software Engineer</span> or <span>Front-End Developer</span>.
</p>

</div>

</div>

</section>

<section id="skills">

<h2 class="skills-heading">My Skills</h2>

<div class="skills-main">

<!-- LEFT: TECHNICAL SKILLS -->
<div class="technical-skills">

<h3>Technical Skills</h3>

<div class="bar">
<p>HTML <span>90%</span></p>
<div class="progress"><div class="html"></div></div>
</div>

<div class="bar">
<p>Python <span>60%</span></p>
<div class="progress"><div class="css"></div></div>
</div>

<div class="bar">
<p>Microsoft Entra ID <span>85%</span></p>
<div class="progress"><div class="js"></div></div>
</div>

<div class="bar">
<p>CSS <span>50%</span></p>
<div class="progress"><div class="python"></div></div>
</div>

<div class="bar">
<p>Single Sign On (SSO) <span>75%</span></p>
<div class="progress"><div class="java"></div></div>
</div>

</div>

<!-- RIGHT: PROFESSIONAL SKILLS -->
<div class="professional-skills">

<h3>Professional Skills</h3>

<div class="circle-box">
    <svg class="circle-svg" width="120" height="120">
        <circle cx="60" cy="60" r="50"></circle>
        <circle cx="60" cy="60" r="50" class="progress creativity"></circle>
    </svg>
    <span>90%</span>
    <p>Creativity</p>
</div>

<div class="circle-box">
    <svg class="circle-svg" width="120" height="120">
        <circle cx="60" cy="60" r="50"></circle>
        <circle cx="60" cy="60" r="50" class="progress communication"></circle>
    </svg>
    <span>65%</span>
    <p>Communication</p>
</div>

<div class="circle-box">
    <svg class="circle-svg" width="120" height="120">
        <circle cx="60" cy="60" r="50"></circle>
        <circle cx="60" cy="60" r="50" class="progress problem"></circle>
    </svg>
    <span>75%</span>
    <p>Decision-Making</p>
</div>

<div class="circle-box">
    <svg class="circle-svg" width="120" height="120">
        <circle cx="60" cy="60" r="50"></circle>
        <circle cx="60" cy="60" r="50" class="progress teamwork"></circle>
    </svg>
    <span>85%</span>
    <p>Teamwork</p>
</div>

</div>

</div>

</section>

<!-- PROJECTS -->
<section id="projects">

<h2>My Projects</h2>

<div class="project-container">

<!-- Project 1 -->
<div class="project-card">
<h3>Spotify Clone</h3>
<p>A responsive music streaming web app inspired by Spotify, built using modern web technologies with an interactive UI..</p>
<p><strong>Tech:</strong> HTML | CSS | JS</p>

<a href="https://github.com/amartya568/Spotify-Clone/tree/main" target="_blank">
GitHub
</a>
</div>

<!-- Project 2 -->
<div class="project-card">
<h3>AI Resume Analyzer</h3>
<p>An intelligent AI-based tool that analyzes resumes and provides smart suggestions to improve content and structure.</p>
<p><strong>Tech:</strong> Python | AI</p>

<a href="https://github.com/amartya568/AI---Resume---Screening---Project" target="_blank">
GitHub
</a>
</div>

<!-- Project 3 -->
<div class="project-card">
<h3>Portfolio website</h3>
<p>A personal portfolio website showcasing my projects, skills, and achievements with a clean and responsive design.</p>
<p><strong>Tech:</strong> HTML | CSS | JS</p>

<a href="https://github.com/amartya568/Portfolio_Project" target="_blank">
GitHub
</a>
</div>

</div>

</section>

<section id="contact" class="contact">

<div class="contact-container">


<!-- LEFT SIDE -->
<div class="contact-left">

<h2>Contact <span>Me</span></h2>

<h3>Let's Work Together</h3>

<p>
I am a fresher looking for opportunities to learn and grow. 
Feel free to contact me for internships, projects, or collaboration.
</p>

<p>📧 amartyahazra67@gmail.com</p>
<p>📞 +91 8918247949</p>

<div class="social-media">

<a href="https://www.facebook.com/share/1CHc2Quz4p/" target="_blank">
<i class="fa-brands fa-facebook-f"></i>
</a>

<a href="https://www.instagram.com/amartya_hazra89" target="_blank">
<i class="fa-brands fa-instagram"></i>
</a>

<a href="https://www.linkedin.com/in/amartya-hazra-1a62ab2ab" target="_blank">
<i class="fa-brands fa-linkedin-in"></i>
</a>

<a href="https://github.com/amartya568" target="_blank">
<i class="fa-brands fa-github"></i>
</a>

</div>

</div>

<!-- RIGHT SIDE FORM -->
<div class="contact-right">

<form onsubmit="showMessage(event)">

<input type="text" placeholder="Enter Your Name" required>
<input type="email" placeholder="Enter Your Email" required>
<input type="text" placeholder="Enter Your Subject">

<textarea rows="6" placeholder="Enter Your Message"></textarea>

<button type="submit">Submit</button>

</form>

</div>

</div>


<!-- FOOTER -->
<div class="footer">
  <p>Built by Amartya Hazra | Aspiring Software Engineer © 2026</p>
</div>

</section>

<script src="script.js"></script>

</body>
</html>


CSS:-
body{
margin:0;
font-family:Arial, Helvetica, sans-serif;
background:#081b29;
color:white;

overflow: hidden;   /* LOCK SCROLL HERE */
}

body {
display: flex;
flex-direction: column;
min-height: 100vh;
}

.contact {
flex: 1;

}

/* NAVBAR */

nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 80px;
}

.logo{
font-size:28px;
font-weight:bold;
color:#eee;
}

/* NAVIGATION MENU */

ul{
display:flex;
list-style:none;
gap:30px;
margin:0;
padding:0;
}

ul li a{
text-decoration:none;
color:white;
font-size:17px;
font-weight:500;
position:relative;
transition:0.3s;
}

ul li a:hover{
color:#00ffff;
}

ul li a::after{
content:"";
position:absolute;
width:0%;
height:2px;
background:#00ffff;
left:0;
bottom:-5px;
transition:0.3s;
}

ul li a:hover::after{
width:100%;
}

ul li a.active{
color:#00ffff;
}

ul li a.active::after{
width:100%;
}

/* SECTIONS */

section{
padding:1px 100px;
}

/* HOME */

.home{
display:flex;
justify-content:space-between;
align-items:center;
gap:60px;
min-height:60vh;
}

.text{max-width:500px;}
.text h3{font-size:22px;}
.text h1{font-size:50px;margin:10px 0;}
.text h2{font-size:26px;}
.text span{color:#00ffff;}

.text p{
margin:15px 0;
line-height:1.6;
}

/* BUTTON */

button{
padding:12px 30px;
background:#00ffff;
color:#081b29;
border:none;
border-radius:25px;
font-size:16px;
font-weight:bold;
cursor:pointer;
transition:0.3s;
box-shadow:0 0 10px #00ffff;
}

button:hover{
background:white;
box-shadow:0 0 20px #00ffff;
transform:scale(1.05);
}

/* IMAGE */

.image{
display:flex;
justify-content:center;
}

.image img{
width:300px;
height:300px;
border-radius:50%;
border:10px solid #00ffff;
object-fit:cover;
box-shadow: 0 0 30px rgba(0, 210, 255, 0.6);

/* ADD THIS */
animation: float 3s ease-in-out infinite;
}

/* ABOUT */

.about{
padding:34px 100px;
}

.about-wrapper{
display:flex;
align-items:center;
justify-content:flex-start;
gap:70px;
padding-left: 80px;
}

.about-img img{
width:260px;
height:260px;
border-radius:50%;
border:10px solid #00ffff;
object-fit:cover;
box-shadow:0 0 20px #00ffff;
box-shadow: 0 0 30px rgba(0, 210, 255, 0.6);

/* IMPORTANT: combine both transforms */
animation: floatAbout 3s ease-in-out infinite;

margin-top: 75px;
margin-left: -50px;
}

.about-container{
max-width:650px;
line-height:1.8;
font-size:18px;
}

.about h2{
color:#eee;
font-size:36px;
margin-bottom:20px;
}

.about p{color:#dcdcdc;}

.about span{
color:#00ffff;
font-weight:bold;
}

/* SKILLS */

.skills-heading{
text-align:center;
font-size:36px;
margin-bottom:50px;
color:#eee;
}

.skills-main{
display:flex;
justify-content:space-between;
align-items: flex-start;
gap:60px;
}

/* TECHNICAL SKILLS */

.technical-skills{
width:50%;
margin-top: -40px;
}

.technical-skills h3{
margin-bottom:20px;
border-bottom:2px solid white;
display:inline-block;
}

.bar{
margin:20px 0;
margin-bottom: 36px;
}

.bar p{
display:flex;
justify-content:space-between;
}

.progress{
width:100%;
height:6px;
background:#000;
margin-top:5px;
border-radius:10px;
overflow:hidden;
}

.progress div{
height:100%;
background:#00ffff;
width:0;
animation:fillBar 2s forwards;
}

.html{--width:90%;}
.css{--width:60%;}
.js{--width:85%;}
.python{--width:50%;}
.java{--width:75%;}

@keyframes fillBar{
from{width:0;}
to{width:var(--width);}
}

/* PROFESSIONAL SKILLS */

.professional-skills{
width:50%;
display:grid;
grid-template-columns:repeat(2,1fr);
gap:30px;
text-align:center;
margin-top: -40px;
}

.professional-skills h3{
grid-column:span 2;
margin-bottom:20px;
border-bottom:2px solid white;
display:inline-block;
justify-self:center;
}

/* SVG CIRCLE (NEW SYSTEM) */

.circle-svg{
transform:rotate(-90deg);
}

.circle-svg circle{
fill:none;
stroke-width:10;
stroke:#1a1a1a;
}

.circle-svg .progress{
stroke:#00ffff;
stroke-dasharray:314;
stroke-dashoffset:314;
animation:loadCircle 2s linear forwards;
}

/* VALUES */

.progress.creativity{
stroke-dashoffset: calc(314 - (314 * 90)/100);
}

.progress.communication{
stroke-dashoffset: calc(314 - (314 * 65)/100);
}

.progress.problem{
stroke-dashoffset: calc(314 - (314 * 75)/100);
}

.progress.teamwork{
stroke-dashoffset: calc(314 - (314 * 85)/100);
}

/* ANIMATION */

@keyframes loadCircle{
from{
stroke-dashoffset:314;
}
}

/* CIRCLE BOX */

.circle-box{
position:relative;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
}

.circle-box span{
position:absolute;
top:36%;
left:52%;
transform:translate(-50%,-50%);
font-size:18px;
font-weight:bold;
color:white;
}

.circle-box p{
margin-top:10px;
}

/* ===== PROJECT SECTION ===== */

#projects{
text-align:center;
margin-top:60px;
}

#projects h2{
font-size:36px;
margin-bottom:40px;
color:white;
}

/* Container */
.project-container{
display:flex;
justify-content:center;
gap:30px;
flex-wrap:wrap;
}

/* Card */
.project-card{
width:300px;
padding:30px 25px;
border-radius:20px;
background:rgba(0, 255, 255, 0.05);
backdrop-filter: blur(10px);
border:1px solid rgba(0,255,255,0.2);
transition:0.4s;
box-shadow:0 0 15px rgba(0,255,255,0.1);
}

/* Hover */
.project-card:hover{
transform:translateY(-12px) scale(1.02);
box-shadow:0 0 25px #00ffff, 0 0 50px rgba(0,255,255,0.4);
}

/* Title */
.project-card h3{
color:#00ffff;
font-size:22px;
margin-bottom:15px;
}

/* Description */
.project-card p{
font-size:16px;
color:#ddd;
margin-bottom:10px;
line-height:1.5;
}

/* Tech */
.project-card p strong{
color:#00ffff;
}

/* Button */
.project-card a{
display:inline-block;
margin-top:15px;
padding:10px 20px;
background:#00ffff;
color:#081b29;
border-radius:8px;
text-decoration:none;
font-weight:bold;
transition:0.3s;
}

.project-card a:hover{
background:white;
box-shadow:0 0 15px #00ffff;
}

/* SOCIAL */

.social-media a{
display:inline-flex;
justify-content:center;
align-items:center;
width:40px;
height:40px;
background:transparent;
border:2px solid #00ffff;
border-radius:50%;
font-size:20px;
color:#00ffff;
text-decoration:none;
margin:20px 10px 20px 0;
transition:0.4s;
}

.social-media a:hover{
background:#00ffff;
color:#081b29;
box-shadow:0 0 20px #00ffff;
transform:scale(1.1);
}

/* ===== CONTACT SECTION ===== */

.contact{
padding:80px 100px;
}

.contact-container{
display:flex;
justify-content:space-between;
gap:60px;
flex-wrap:wrap;
}

/* LEFT SIDE */
.contact-left{
width:45%;
}

.contact-left h2{
font-size:36px;
margin-bottom:10px;
}

.contact-left span{
color:#00ffff;
}

.contact-left h3{
margin:15px 0;
}

.contact-left p{
color:#ccc;
line-height:1.6;
margin:10px 0;
font-weight: bold;
}

/* RIGHT SIDE */
.contact-right{
width:50%;
}

.contact-right form{
display:flex;
flex-direction:column;
gap:15px;
margin-bottom: 30px;
}

/* INPUTS */
.contact-right input,
.contact-right textarea{
padding:15px;
border:none;
outline:none;
background:#1a2a38;
color:white;
border-radius:8px;
font-size:15px;
}

/* TEXTAREA */
.contact-right textarea{
resize:none;
}

/* BUTTON */
.contact-right button{
padding:15px;
border:none;
border-radius:30px;
background:#00ffff;
color:#081b29;
font-weight:bold;
cursor:pointer;
transition:0.3s;
box-shadow:0 0 15px #00ffff;
margin-bottom: 15px;
}

.contact-right button:hover{
background:white;
box-shadow:0 0 25px #00ffff;
}

.footer {
width: 100%;
text-align: center;
background: #081b29;
padding: 0px 0;
margin-top: 70px;
}

.footer p {
color: #eee;
font-size: 14px;
}

/* TYPING WORD ANIMATION */

.typing span{
opacity:0;
display:inline-block;
margin-right:6px;
color:#00ffff;
animation:wordFade 0.5s forwards;
}

/* DELAYS */
.typing span:nth-child(1){animation-delay:0.3s;}
.typing span:nth-child(2){animation-delay:0.6s;}
.typing span:nth-child(3){animation-delay:0.9s;}
.typing span:nth-child(4){animation-delay:1.2s;}
.typing span:nth-child(5){animation-delay:1.5s;}
.typing span:nth-child(6){animation-delay:1.8s;}

/* KEYFRAME */
@keyframes wordFade{
from{
opacity:0;
transform:translateY(10px);
}
to{
opacity:1;
transform:translateY(0);
}
}

@keyframes float {
0% { transform: translateY(0px); }
50% { transform: translateY(-15px); }
100% { transform: translateY(0px); }
}

@keyframes floatAbout {
0%   { transform: translateY(0px); }
50%  { transform: translateY(-15px); }
100% { transform: translateY(0px); }
}

/* MOBILE RESPONSIVE DESIGN */
@media (max-width: 768px) {

nav {  
    flex-direction: column;  
    padding: 15px 20px;  
    gap: 10px;  
}  

ul {  
    flex-direction: column;  
    gap: 10px;  
    align-items: center;  
}  

section {  
    padding: 20px;  
}  

.home {  
    flex-direction: column;  
    text-align: center;  
}  

.text h1 {  
    font-size: 32px;  
}  

.text h2 {  
    font-size: 20px;  
}  

.image img {  
    width: 200px;  
    height: 200px;  
}  

/* ABOUT */  
.about-wrapper {  
    flex-direction: column;  
    align-items: center;  
}  

.about-img img {  
    width: 140px;  
    height: 140px;  
    border-radius: 50%;  
    object-fit: cover;  
    margin: 0 auto;  
    display: block;  
}  

.about-container {  
    text-align: center;  
}  

/* SKILLS */  
.skills-main {  
    flex-direction: column;  
    gap: 30px;  
}  

.technical-skills,  
.professional-skills {  
    width: 100%;  
}  

/* PROJECTS */  
.project-container {  
    flex-direction: column;  
    align-items: center;  
}  

.project-card {  
    width: 90%;  
}  

/* CONTACT */  
.contact-container {  
    flex-direction: column;  
    align-items: flex-end;  
}  

.contact-left,  
.contact-right {  
    width: 100%;  
}  

.contact-right{  
    transform: translateX(195px);  
}  

.contact {  
    padding: 40px 20px;  
}  

.contact-right form {  
    display: flex;  
    flex-direction: column;  
    align-items: flex-end;  
}  

.contact-right input,  
.contact-right textarea {  
    width: 90%;  
    font-size: 14px;  
}  

.contact-right button {  
    width: 90%;  
}  

.footer p {  
    font-size: 12px;  
}

}


JS:-
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
