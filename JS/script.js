// RANDOM PHOTOS
/*dow.onload = function() {

    function changeImage() {
        var BackgroundImg = ["../IMAGES/background.jpg",
            "../IMAGES/background2.jpg",
            "../IMAGES/background3.jpg",
            "../IMAGES/background4.jpg",
            "../IMAGES/background5.jpg",
            "../IMAGES/background7.jpg",

        ];
        var i = Math.floor((Math.random() * 6));
        var body = document.getElementsByClassName("body")
        document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = window.outerWidth + "px", window.outerHeight + "px";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";

    }
    window.setInterval(changeImage, 5000);
}

*/


/*----------SCROLL DOWN-----------*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header_style").style.top = "0";
    } else {
        document.getElementById("header_style").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}


/*------------------RESPONSIVE MENU------------------*/

var div = document.getElementById("res_nav");
var img_menu = document.getElementById("show-menu");
img_menu.onclick = ResponsiveMenu;
var menu_bool = false;
//var more = document.getElementById("more");
//more.onclick = Hover;

function ResponsiveMenu() {
    if (menu_bool == false) {
        var main_nav = document.getElementById("nav");
        div.innerHTML = main_nav.innerHTML;
        div.style.display = "flex";

        div.style.flexDirection = "column";
        div.style.backgroundColor = "#000000";
        div.style.backgroundImage = "linear-gradient(315deg, #000000 0%, #414141 74%)";
        div.style.borderRadius = "25px";
        div.style.transition = "all 1.5s ease-in-out";
        div.style.width = "100%";
        div.style.textAlign = "center";
        div.style.position = "absolute";
        div.style.right = 0;


        menu_bool = true;
    } else {
        div.innerHTML = "";
        menu_bool = false;
    }
}


/*--------------------LOADER--------------------*/


window.onload = function() {
    var elem = document.getElementById('spinner');
    elem.style.transition = " 2s linear 0s";
    elem.style.opacity = 0;
    elem.style.height = 0;
};




/*--------------------COROUSEL--------------*/
var but1 = document.getElementById("buttton1");
var but2 = document.getElementById("buttton2");




var head = ["Click on the Image: 1", "Click on the Image: 2", "Click on the Image: 3", "Click on the Image: 4", "Click on the Image: 5", "Click on the Image: 6", "Click on the Image: 7", "Click on the Image: 8"];
var img = ["../IMAGES/foto1.jpg", "../IMAGES/foto2.jpg", "../IMAGES/foto3.jpg", "../IMAGES/foto4.jpg", "../IMAGES/foto5.jpg", "../IMAGES/foto6.jpg", "../IMAGES/foto7.jpg", "../IMAGES/foto8.jpg"];
var value = 0;

function next() {
    var heading = document.getElementById("head1");
    var image1 = document.getElementById("image");
    if (value < head.length - 1) {
        value = value + 1;
    } else {
        value = 0;
    }
    heading.innerHTML = head[value];
    image1.setAttribute("src", img[value]);

}
window.setInterval(next, 5000);

function previous() {
    var heading = document.getElementById("head1");
    var image1 = document.getElementById("image");

    if (value > 0) {
        value = value - 1;

    } else {
        value = head.length - 1;
    }
    heading.innerHTML = head[value];
    image1.setAttribute("src", img[value]);
}