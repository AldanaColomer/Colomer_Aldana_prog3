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
        `;
        return div;
    }






















}