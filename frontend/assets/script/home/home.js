let htmlElement = $('html');

let sideMenu = document.querySelector(".side-menu");
let menuBtnClose = document.querySelector(".menu-btn-close");
let menuBtnOpen = document.querySelector(".menu-btn");

document.querySelector(".menu-btn").onclick = function () {
    sideMenu.style.left = "0"
    sideMenu.style.transition = "0.5s";
    menuBtnClose.style.display = "inline-block";
    menuBtnOpen.style.display = "none";
}
document.querySelector(".menu-btn-close").onclick = function () {
    sideMenu.style.left = "-250px"
    sideMenu.style.transition = "0.5s";
    menuBtnClose.style.display = "none";
    menuBtnOpen.style.display = "inline-block";
}

addEventListener("resize", (event) => {
    if (window.innerWidth >= 1100){
        menuBtnClose.style.display = "none";
        menuBtnOpen.style.display = "none";
        sideMenu.style.left = "-250px"
    }else{
        menuBtnOpen.style.display = "inline-block";
    }
})

// implement when scroll position

addEventListener("scroll",ev => {
    console.log(ev);

})

//-------------------------------------------------------------------------------------------------------------------------------
//hide and visible sign up form manage iframes
//-------------------------------------------------------------------------------------------------------------------------------

let iframeContainer = $( ".iframes-container" );
let signUpIframe = $( ".iframes-container>div:nth-child(1)" );
let logInIframe = $( ".iframes-container>div:nth-child(2)" );
let iframeCloseIcon = $(".iframe-close-btn>i");

$(".iframe-close-btn").click( "onclick", function( event ) {
    iframeContainer.css('display','none');
    htmlElement.css("overflow-Y","auto");
});

$( ".signup-button" ).click( "onclick", function( event ) {
    iframeContainer.css('display','flex');
    logInIframe.css('display',"none");
    signUpIframe.css("display","block")
    htmlElement.css("overflowY","hidden");
});
$( ".login-btn" ).click( "onclick", function( event ) {
    iframeContainer.css('display','flex');
    logInIframe.css('display',"block");
    signUpIframe.css('display',"none");
    htmlElement.css("overflowY","hidden");
});
