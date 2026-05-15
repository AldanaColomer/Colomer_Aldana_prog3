
let paginaActual = 1; //variable que guardq en que pagina estás

window.addEventListener("load", iniciar); //espera a que esté listo el html, una vez que está cargada la pagina se ejecuta "iniciar"


function iniciar() {
    cargarCartas();

    document.getElementById("siguiente")
        .addEventListener("click", paginaSiguiente);

    document.getElementById("anterior")
        .addEventListener("click", paginaAnterior);
}



function cargarCartas() {
   fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=6")//se piden los datos a la api
        .then(response => response.json()) //pasa a lo que recibio de la api a json
        .then(data => {
            console.log(data);

            let cartas = data.cards; //se recibe el array de cartas del json

            let contenedor = document.getElementById("cartas");

            cartas.forEach(cartaData => {
                //se instancia el objeto con los datos del fetch
                let carta = new Carta(
                    cartaData.code,
                    cartaData.value,
                    cartaData.suit,
                    cartaData.image
                );

                //se crea el objeto html 
                let elementoCarta = carta.createHtmlElement();

                //se inserta en el DOM

                contenedor.appendChild(elementoCarta);
        });

        })
        .catch(error => {
            console.error("Error al cargar las cartas: ", error);

        });
}        

//Pagina Siguiente
function paginaSiguiente(){
    paginaActual++;
    actualizarCartas();
}

//Pagina Anterior
function paginaAnterior(){
    if(paginaActual > 1){
        paginaActual--;
        actualizarCartas();
    }
}

function actualizarCartas(){
    let contenedor = document.getElementById("cartas");

    //e borran las cartas actuales
    contenedor.innerHTML = "";

    //se cargan las cartas nuevas
    cargarCartas();
}
    