// HAMBURGER

burger=document.querySelector(".burger");
header=document.querySelector("#header");
logo=document.querySelector(".logo");
nav=document.querySelector(".nav");
icon=document.querySelector(".icon");


burger.addEventListener("click",() => {
    header.classList.toggle('h-nav-resp');
    logo.classList.toggle('v-nav-resp');
    nav.classList.toggle('v-nav-resp');
    icon.classList.toggle('v-nav-resp');
})




// PAGE 3

function myFunction(index) {
    var dots = document.getElementsByClassName("dots")[index-1];
    var moreText = document.getElementsByClassName("more")[index-1];
    var btnText = document.getElementsByClassName("myBtn")[index-1];

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


