let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


document.querySelectorAll('a').forEach(links =>{
    links.onmouseenter = () =>{
        
    }
})

function sendMail(){
    (function(){
        emailjs.init("v6rYZKKaSd8zWufFZ");
    })();

    var parmas = {
        sendername: document.querySelector("#sendername").value,
        senderemail: document.querySelector("#senderemail").value,
        msg: document.querySelector("#msg").value,
    };
    var serviceID ="service_s4eb4nb";
    var templateID = "template_ub7kvkb";

    emailjs.send(serviceID,templateID, parmas)
    .then(res => {
        alert("Email Send Successfully");
    })
    .catch();
}


