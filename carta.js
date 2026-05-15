class Carta{
    constructor(code, value, suit, imagen){

        this.code = code;
        this.value = value;
        this.suit = suit;
        this.imagen = imagen;
    }

    //c i: devuelve un string json que representa al objeto

    toJsonString(){
        return JSON.stringify(this);
    }

    //c ii: devuelve una instancia de la clase Carta
    static createFromJsonString(json){
        let obj = JSON.parse(json);
        return new Carta(
            obj.code,
            obj.value,
            obj.suit,
            obj.imagen
        );
    }

    //c iii: devuelve el elemento html de la carta

    createHtmlElement(){
        let div = document.createElement("div"); 
        div.classList.add("carta");

        div.innerHTML = `
            <h3>${this.code}</h3>
            <img src="${this.imagen}" alt="${this.code}">
            <p>Palo: ${this.suit}</p>
            <p>Valor: ${this.value}</p>
            <button class="btn-guardar">Guardar</button>
        `;

        //6 a. clickeo de imagen 
        let img= div.querySelector("img");

        img.addEventListener("click", () => {
            window.open(this.imagen, "_blank"); //abre la imagen en otra pestaña
        });

        //6 b. boton guardar
        let btn = div.querySelector(".btn-guardar");
        btn.addEventListener("click", () => {
           Carta.guardarCarta(this); 
        });



        return div;
    }


    static guardarCarta(carta){
        let cartasGuardadas = JSON.parse(localStorage.getItem("cartas")) || []; //trae lo que hay en el loclaStorage y si no hay nada se usa el array vacío

        let existe = cartasGuardadas.some(c => c.code === carta.code); //verifica si la carta ya está guardada


        if(!existe){

            cartasGuardadas.push(carta); //agrega la carta nueva 

            localStorage.setItem("cartas", JSON.stringify(cartasGuardadas)); //guarda el array nuevo en el localStorage

            alert("Carta guardada correctamente");
        }


    }



















}