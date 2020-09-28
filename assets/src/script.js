// $(window).scroll(function () {
//     const bg = document.querySelector(".bg-dark")
//     bg.classList.replace('bg-dark', 'bg-light')
//     $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
// });


// yt.addEventListener("scroll", function () {
//     console.log("ok");
// })
const bg = document.querySelector(".bg-dark")
// console.log(window);
const yt = document.querySelector(".youtube")
console.log(yt.scrollIntoView())

// const rec = yt.getBoundingClientRect();
// console.log(rec)

window.onscroll = function () {
    const top = window.scrollY;
    // console.log(top);
    if (top >= 276) {
        bg.classList.replace('bg-dark', 'bg-light');
        console.log(bg.classList);
        bg.classList.replace('navbar-dark', 'navbar-light');
    }
    else {
        bg.classList.replace('bg-light', 'bg-dark')
        bg.classList.replace('navbar-light', 'navbar-dark');
    }
}