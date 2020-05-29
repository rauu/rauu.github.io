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

//Validar texto crear post

var send = document.getElementById("send");
send.onclick = crearDOM;

var title = document.getElementById("titile_blog");
var p_text = document.getElementById("p_title");
var title_bool = false;

function validarTitulo() {

    if (title.value == "") {
        p_text.innerHTML = "El titulo no puede estar vacio";
        p_text.style.color = "red";
        title.style.border = "2px solid red";
        title_bool = false;
    } else {
        title.style.border = "2px solid green";
        p_text.innerHTML = "Escriba el titulo:";
        p_text.style.color = "white";
        title_bool = true;
    }
}

title.addEventListener("blur", validarTitulo);

/*function validarImagen() {
    var img_post = document.getElementById("img_blog").value;
    if (/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(img_post.value)) {

    } else {
        var p_img = document.getElementById("img_blog");
        p_img.innerHTML = "URL introducida es incorrecta, recuerda que debe de ser una imagen";
        p_img.style.color = "red";
    }
}*/



var p_texts = document.getElementById("p_texts");
var p_blog = document.getElementById("text_blog");
var text_bool = false;

function validarText() {

    if (p_blog.value == "" || p_blog.value.length < 100) {
        p_texts.innerHTML = "El texto no puede estar vacio o no puede tener menor que 100 palabras";
        p_texts.style.color = "red";
        p_blog.style.border = "2px solid red";
        text_bool = false;
    } else {
        p_texts.innerHTML = "Pon el texto que quieras:";
        p_texts.style.color = "white";
        p_blog.style.border = "2px solid green";
        text_bool = true;
    }
}

p_blog.addEventListener("blur", validarText);


function crearDOM() {

    validarText();
    validarTitulo();
    if (title_bool && text_bool) {
        alert("Se ha generado tu post");
        CrearPost();
    }
}


//CREAR DIV

function CrearPost() {
    var div_viejo = document.getElementById("content");
    var text_titulo = document.getElementById("titile_blog").value;
    var text_img = document.getElementById("img_blog").value;
    var post_text = document.getElementById("text_blog").value;

    var crearDiv = document.createElement("div");
    var crearP = document.createElement("p");
    var crearImg = document.createElement("img");
    var crearH = document.createElement("h2");

    crearDiv.classList.add("new_post");
    crearH.classList.add("new_title");
    crearImg.classList.add("new_image");
    crearImg.alt = "Imagen nueva";
    crearP.classList.add("new_p");

    crearImg.src = text_img;
    crearH.innerHTML = text_titulo;
    crearP.innerHTML = post_text;
    crearDiv.appendChild(crearH);
    crearDiv.appendChild(crearImg);

    crearDiv.appendChild(crearP);
    div_viejo.appendChild(crearDiv);

}