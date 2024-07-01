class Persona {

    // Con static podemos utilizar el método/variable directamente llamando a la clase

    static _conteo = 0;
    static get getConteo(){
        return Persona._conteo;
    }
    static mensaje(){
        console.log(this.nombre); // undefine
        console.log('Soy un método estático');
    }

    // Propiedades

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // Constructor
    constructor(nombre, codigo, frase){

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    // Métodos

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        console.log(`Soy ${this.codigo} y mi frase es ${this.frase}`);
    }

    // getters and setters

    set setComidaFavorita(comida){
        this.comida = comida;
    }

    get getComidaFavorita(){
        return this.comida;
    }
}

const ironman = new Persona('Tony Stark','Ironman','Yo soy Iroman');
const spiderman = new Persona('Peter Parker','Spiderman','Tu amigable vecino Spiderman');
spiderman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = 'Macarrones';

console.log(spiderman);
console.log(spiderman.getComidaFavorita);
console.log('Conteo estático', Persona.getConteo);

Persona.mensaje();