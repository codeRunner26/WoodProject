

const container2 = document.getElementsByClassName(".container2");

const section1 = document.getElementsByClassName(".section1");

const section1head = document.getElementsByClassName(".section1.head");
 
const sideBar = document.getElementById("side_bar");


function toggleSidebar() {
    if (sideBar.style.display === "none" || sideBar.style.display === "") {
        sideBar.style.display = "block";
    } else {
        sideBar.style.display = "none";
    }
}






$("#carousel1 .owl-carousel").owlCarousel({

    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autolayTimeout: 4000,
    smartSpeed: 1200,

    
    responsive: {
        0: {
            items: 1,
            smartSpeed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'

        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$(".owl-carousel").owlCarousel({

    loop: true,
    // margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autolayTimeout: 2000,
    smartSpeed: 1200,
    
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 4
        },
        1000: {
            items: 4
        }
    }
});


