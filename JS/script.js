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




var head = ["LOS 10 MEJORES BLOGS DE FITNESS", "BUSCA EL GIMNASIO MAS CERCA DE TU CASA", "COMPRA TU NUTRICION DEPORTIVA"];
var img = ["../IMAGES/foto1.jpg", "../IMAGES/foto2.jpg", "../IMAGES/foto3.jpg"];
var src = ["https://look4bloggers.com/los-10-mejores-blogs-fitness/", "https://mygymanywhere.com/", "https://www.powergym.com/es/"];
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
    heading.setAttribute("href", src[value]);

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



var img = document.getElementById("img_blog");
var img_bool = false;

function checkUrl() {
    var img_post = document.getElementById("img_blog").value;
    var arr = ["jpeg", "jpg", "gif", "png"];
    var ext = img_post.substring(img_post.lastIndexOf(".") + 1);
    for (var x = 0; x <= arr.length; x++) {
        if (ext == arr[x]) {
            img_bool = true;
            break;
        }
    }
}


var img_text = document.getElementById("image_blog");

function validarImg() {
    checkUrl();
    if (img_bool) {
        img.style.border = "2px solid green";
        img_text.style.color = "white";
        img_text.innerHTML = "Pon el URL del imagen: (recuerda que el URL solo puede ser una imagen)";
    } else {
        img_text.innerHTML = "La URL esta mal. Recuerde que tiene que ser JPG, JPG, GIF o PNG";
        img_text.style.color = "red";
        img.style.border = "2px solid red";
    }
}
img.addEventListener("blur", validarImg);
img.addEventListener("blur", checkUrl);


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
    validarImg();
    if (title_bool && text_bool && img_bool) {
        alert("Se ha generado tu post");
        CrearPost();
    }
}
var contador = 0;


function CrearContador(nombre_id) {

    nombre_id += contador;
    contador++;
    return nombre_id;
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
    var crearBr = document.createElement("br");

    var input = document.createElement("input");
    input.setAttribute("type", "button");
    input.setAttribute("value", "Eliminar");
    var crear_class = CrearContador("post");
    input.setAttribute('name', crear_class);
    input.classList.add("button");
    crearDiv.setAttribute('name', crear_class);

    input.classList.add("button");
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
    crearDiv.appendChild(crearBr);
    crearDiv.appendChild(input);
    div_viejo.appendChild(crearDiv);

    input.setAttribute('onclick', 'EliminarDiv(name)');

}

//Eliminar post
function EliminarDiv(class_nombre) {
    var div_eliminar = document.getElementsByName(class_nombre)[0];
    div_eliminar.parentNode.removeChild(div_eliminar);
    alert("Se ha eliminado tu post");

}

//FORM

var text_form_bool = false;


function Form_comment() {

    alert("Fdf");
    var text_form = document.getElementById("text_form");
    alert(text_form.value);
    if (text_form.value == "" || text_form.value.length < 100) {
        alert("El mensaje no puede estar vacio o tener menos que 100 palabras");
        text_form.style.border = "2px solid red";
        text_form_bool = false;
    } else {
        text_form.style.border = "2px solid green";
        text_form_bool = true;
        alert("Se ha enviado tu comentario");

    }
}

//text_form.addEventListener("blur", Form_comment);

var send_form = document.getElementById("send_form");
send_form.onclick = Form_comment;