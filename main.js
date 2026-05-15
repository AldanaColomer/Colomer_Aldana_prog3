window.addEventListener("load", iniciar); //espera a que esté listo el html, una vez que está cargada la pagina se ejecuta "iniciar"


function iniciar() {
    cargarCartas();

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

           
    