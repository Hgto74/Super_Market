//INICIO -MENU RESPOSIVE ------------------declaracion de constantes y variable------------------------------------------------
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}
//Evento click
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
// cerrar el  menu, al seleccionar un elemento
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

// recorrer los elementos del  menu, y en el eveto click se cierra el Menu open
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});
//FIN -MENU RESPOSIVE ------------------declaracion de constantes y variable------------------------------------------------




//INICIO -SLIDER ------------------declaracion de constantes y variable------------------------------------------------ 
// constante para llamar Id slider
const slider = document.querySelector("#slider");
// variable para las secciones del  slider que vamos a estar modificando
let sliderSection = document.querySelectorAll(".slider__section");
// variable para obtener el  ultimo elemento de la seccion del  slider
let sliderSectionLast = sliderSection[sliderSection.length -1];
// constante para los botones slider
const btnLeft = document.querySelector("#btn-left");
const btnRigth = document.querySelector("#btn-rigth");

//Metodo para cambiar  el  ultimo  elemento a la posicion inicial
slider.insertAdjacentElement('afterbegin' , sliderSectionLast);
// crear funcion para mover boton de la derecha (Next), para seleccionar de las 4 imagenes solo  la primera 
function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";                                        //selecciona con el 200% el  segundo elemento
    slider.style.transition = "all 0.5s";                                     // la transicion del  movimiento se realiza en5 segundos
                                                                              // funcion para quitar la transicion de movimiento
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend' , sliderSectionFirst);;          //anter de empezar el ciclo le asigno el primer elemento
        slider.style.marginLeft ="-100%";                                     // volver a la normalidad
    }, 500);                                                                    // equivalente a 1/2 segundo
}

function Prev() {
    let sliderSection= document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1]; // Continuar cambiando el elemento al dar click
    slider.style.marginLeft = "0%";  //selecciona con el 0% el  primer elemento
    slider.style.transition = "all 0.5s"; // la transicion del  movimiento se realiza en5 segundos
    // funcion para quitar la transicion de movimiento
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast); //anter de terminar el ciclo le asigno el primero
        slider.style.marginLeft ="-100%"; // volver a la normalidad
    }, 500); // equivalente a 1/2 segundo
}


// para ejecutar y que detecte el  evento click de la derecha
btnRigth.addEventListener('click', function(){
    Next();
});
// para ejecutar y que detecte el  evento click de la deizquierda
btnLeft.addEventListener('click', function(){
    Prev();
});
//avance automatico del  Slider cada 3s para slider
setInterval(function(){
    Next();
}, 3000);
//FIN-SLIDER ------------------declaracion de constantes y variable------------------------------------------------ 

