/*
Hacer que el menú desaparezca despues de darle click al enlace:
https://youtu.be/KJbLiV6Y9sY

https://dev.to/karataev/set-css-styles-with-javascript-3nl5

https://stackoverflow.com/questions/8206565/check-uncheck-checkbox-with-javascript
*/

function mostrar() {
    /* guardar estilos CSS en una variable */
    var style = document.createElement("style");

    /* mostrar menu, insertar CSS en JS */
    style.innerHTML = `
    .nav-main { display: flex; }

    .nav-main::before,
    .nav-main::after { display: block; }
    `;

    /* llamar (ejecutar) estilos CSS */
    document.head.appendChild(style);

    /* console.log("mostrar"); */
}

function ocultar() {
    var style = document.createElement("style");

    /* eliminar estado :checked del boton del menu
    https://stackoverflow.com/questions/8206565/check-uncheck-checkbox-with-javascript */
    document.getElementById("main-navigation-toggle").checked = false;

    /* ocultar menu */
    style.innerHTML = `
    .nav-main,
    .nav-main::before,
    .nav-main::after { display: none; }
    `;

    document.head.appendChild(style);

    /* console.log("ocultar"); */
}
