var typed =new Typed(".typing",{
    strings:["","Web Developer...","Web Designer..."],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection=document.querySelectorAll(".section");
const totalSection=allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const anchor = navList[i].querySelector("a");
    anchor.addEventListener("click", function() 
    {
        /*for(let i=0;i<totalSection;i++)
            {
              allSection[i].classList.remove("back-section");
            }*/
           removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active"))
                {
                   // console.log("back-section"+ navList[j].querySelector("a"))
                  // allSection[j].classList.add("back-section");
                  addBackSection(j);
                }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth<1200){
            asideSectionTogglerBtn();
        }
    });
}
function showSection(element)
{
    for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.remove("active");
        }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function removeBackSection()
{
    for(let i=0;i<totalSection;i++)
        {
          allSection[i].classList.remove("back-section");
        }
}
function updateNav(element)
{
  for(let i=0; i<totalNavList;i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
    }
  
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})
const navTogglerBtn=document.querySelector(".nav-toggler"),
aside=document.querySelector(".aside");
navTogglerBtn.addEventListener("click",() => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.toggle("open")
        }
}


const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    sendEmail();
});

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ahmedsana1125@gmail.com",
        Password: "870E113836129617C8F3D96B0FF3D5159E8F",
        To: 'ahmedsana1125@gmail.com',
        From: "ahmedsana1125@gmail.com",
        Subject: subject,
        Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
    }).then(
        message =>{
        if (message == "OK"){
        Swal.fire({
            title: "Success!",
            text: "Message send successfully!",
            icon: "success"
          });
        }
    }
 );
}