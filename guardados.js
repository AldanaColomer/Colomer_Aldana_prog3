window.addEventListener("load", iniciar);

function iniciar(){
    mostrarCartasGuardadas();

    document.getElementById("orden-valor")
    .addEventListener("click", ordenarPorValor);

    document.getElementById("orden-palo")
        .addEventListener("click", ordenarPorPalo);

}

function mostrarCartasGuardadas(){

    let contenedor = document.getElementById("cartas");
    contenedor.innerHTML= "";

    let cartasGuardadas  =JSON.parse(localStorage.getItem("cartas")) || [];

    cartasGuardadas.forEach(cartaData => {
        let carta = new Carta(
            cartaData.code,
            cartaData.value,
            cartaData.suit,
            cartaData.imagen
        );
        contenedor.appendChild(carta.createHtmlElement());
    });
}


//Orden por valor
function ordenarPorValor(){
    let cartas = JSON.parse(localStorage.getItem("cartas")) || [];
     const orden = {
        "ACE": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "JACK": 11,
        "QUEEN": 12,
        "KING": 13
    };

    cartas.sort((a,b) => orden[a.value] - orden[b.value]);

     console.log("ANTES:", cartas.map(c => c.value));

    localStorage.setItem("cartas", JSON.stringify(cartas));

   
    console.log("DESPUÉS:", cartas.map(c => c.value));

    mostrarCartasGuardadas();
}


//orden por palo
function ordenarPorPalo(){
    let cartas = JSON.parse(localStorage.getItem("cartas")) || [];

    cartas.sort((a,b) => a.suit.localeCompare(b.suit)); //va a ordenar por palo y alfabeticamente

    console.log("ANTES:", cartas.map(c => c.value));

    localStorage.setItem("cartas", JSON.stringify(cartas));
    
    console.log("DESPUÉS:", cartas.map(c => c.value));


    mostrarCartasGuardadas();

}