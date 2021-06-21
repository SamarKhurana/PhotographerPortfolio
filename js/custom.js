//for scroll to top icon
window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.go-to-up');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//for nav open
function navOpen() {
    document.getElementById("navOpen").style.display = "none";
    document.getElementById("nav").style.right = "0%";
}

//for nav close
function navClose() {
    var browserWidth = window.innerWidth;
    var media = 710;
    var mobileWidth = 480;

    if (browserWidth <= media && browserWidth > mobileWidth) {
        document.getElementById("nav").style.right = "-50%";
    }
    else if (browserWidth <= mobileWidth) {
        document.getElementById("nav").style.right = "-60%";
    }
    
    document.getElementById("navOpen").style.display = "inline-block";
}