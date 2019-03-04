$(".item").click(redireccioarItem);
$(".contacto").click(redireccioarContacto);

function redireccioarItem() {
    var page = $(this).attr("id");
    switch (page) {
        case "movie-app":
            window.location.href = "https://lauta3011.github.io/movie-app/";
            break;
        case "simple-login":
            window.location.href = "https://lauta3011.github.io/login-frontend/";
            break;
        case "chip-shop":
            window.location.href = "https://codepen.io/lauta_3011/pen/roGJbW";
            break;
        case "cv-workana":
            window.location.href = "https://www.workana.com/freelancer/909b03eeae6759cd360c1e61e5caf311?ref=user_dropdown";
            break;
        case "cv-linkedin":
            window.location.href = "https://www.linkedin.com/in/lautaro-rodriguez-3203a415b/";
            break;
        case "cv-github":
            window.location.href = "https://github.com/lauta3011";
            break;
    }
}

function redireccioarContacto(){
        var page = $(this).attr("id");
    switch (page) {
        case "cv-workana":
            window.location.href = "https://www.workana.com/freelancer/909b03eeae6759cd360c1e61e5caf311?ref=user_dropdown";
            break;
        case "cv-linkedin":
            window.location.href = "https://www.linkedin.com/in/lautaro-rodriguez-3203a415b/";
            break;
        case "cv-github":
            window.location.href = "https://github.com/lauta3011";
            break;
    }
}