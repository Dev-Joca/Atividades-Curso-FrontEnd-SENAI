let menu = document.getElementById("menu");

function mostrarMenu() {

    if (menu.style.display != "flex") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
    event.preventDefault()
}

/* function mostrarMenuJquery() {
    if ($("#menu").hasClass("menu-jquery-escondido")) {
        $("#menu").addClass("menu-jquery")
        $("#menu").removeClass("menu-jquery-escondido")
    } else {
        $("#menu").addClass("menu-jquery-escondido")
        $("#menu").removeClass("menu-jquery")
    }

    $("#menu").toggle()
}*/

let form = document.getElementById('form');

function clickLogin() {
    // if (form.checkValidity()) {
    //     alert("Login realizado com sucesso!");
    // }
}

function clickRegister() {
    // if (form.checkValidity()) {
    //     alert("Registro realizado com sucesso!");
    // }
}

function clickContact() {
    // if (form.checkValidity()) {
    //     alert("Formulário enviado com sucesso!");
    // }
}

$(document).ready(function() {

    let listaSlides = ["produtoimg-xbox", "produtoimg-ps4", "produtoimg-note"]
    let slideAtual = 1

    function mudarSlide() {

        if (slideAtual > 0) {
            $(".produtoimg").removeClass(listaSlides[slideAtual - 1])
        } else {
            $(".produtoimg").removeClass(listaSlides[listaSlides.length - 1])
        }

        $(".produtoimg").addClass(listaSlides[slideAtual])

        slideAtual++

        if (slideAtual > (listaSlides.length - 1)) {
            slideAtual = 0
        }
    }

    setInterval(mudarSlide, 3000)

})