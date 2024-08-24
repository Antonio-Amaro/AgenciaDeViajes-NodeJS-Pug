document.addEventListener("DOMContentLoaded", function () {
    const menuIcono = document.getElementById("menu-icono");
    const menuItems = document.querySelector(".menu-items");

    menuIcono.addEventListener("click", function () {
        menuItems.classList.toggle("d-none");  // Alterna la visibilidad del menú
    });
});