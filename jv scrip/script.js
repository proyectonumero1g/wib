







// JavaScript para manejar la barra de progreso animada
document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    const nodos = document.querySelectorAll('.nodos');
    const barraProgreso = document.getElementById('barraProgreso');
    const contenido = document.getElementById('contenido');

    const textos = [
        "",
        "",
        "",
        ""
    ];

    function actualizarProgreso() {
        // Actualizar barra de progreso
        barraProgreso.style.width = `${(index / (nodos.length - 1)) * 100}%`;

        // Remover la clase activa de todos los nodos
        nodos.forEach(nodo => nodo.classList.remove('activo'));

        // Añadir la clase activa al nodo actual
        nodos[index].classList.add('activo');

        // Actualizar el contenido relacionado
        contenido.textContent = textos[index];

        // Incrementar el índice y reiniciar si es necesario
        index = (index + 1) % nodos.length;
    }

    // Llamar a la función periódicamente
    setInterval(actualizarProgreso, 3000);

    // Llamada inicial para que comience al cargar la página
    actualizarProgreso();
});

function comprobarHoraio(){
    //Obtener la fehca y hora actual
    const ahora = new Date();
    const diaSemana = ahora.getDay();

    const horaActual = ahora.getHours();
    const minutoActual = ahora.getMinutes();

    //hora de aperturas y cierre

    const horarioLunesAViernes = [
        {inicio: 8, fin: 22},
        {inicio: 14, fin: 18}
    ];

    const horarioSabados = [
        {inicio: 7, fin: 12}
    ];

    let estadoAbierto = false;

    if (diaSemana >= 1 && diaSemana <= 5){
        estadoAbierto = horarioLunesAViernes.some(rango => {
            return (horaActual > rango.inicio || (horaActual === rango.inicio && minutoActual >= 0)) &&
            (horaActual < rango.fin || (horaActual === rango.fin && minutoActual === 0));
        });
    } else if (diaSemana === 6){
        estadoAbierto = horarioSabados.some(rango =>{
            return(horaActual > rango.inicio || (horaActual === rango.inicio && minutoActual >= 0)) &&
            (horaActual  < rango.fin || (horaActual === rango.fin && minutoActual === 0));
        });
    }

    const estadoElemnto = document.getElementById("estado");
    if (estadoAbierto){
        estadoElemnto.textContent = "Abierto ahora";
        estadoElemnto.classList.remove("esta-cerrado");
        estadoElemnto.classList.add("abierto");
    }
    else {
        estadoElemnto.textContent = "Nuestra tienda esta cerrada";
        estadoElemnto.classList.remove("esta-abierto");
        estadoElemnto.classList.add("cerrado");
        let horario_mostrar = "Lunes a viernes de 8am a 10pm - Fin de semana 8am - 10pm"
        document.getElementById("horario").innerHTML= horario_mostrar;
    }
}

window.onload = comprobarHoraio;


const header = document.getElementById('main-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY){
        header.style.top = '-12vh';
    } else {
        header.style.top = '0';
    }
    lastScrollY = window.scrollY;
});

function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }




function toggleMenu() {
    document.getElementById("menu").classList.toggle("show")
    }




