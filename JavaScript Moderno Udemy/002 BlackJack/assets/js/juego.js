/**
 *  2C = Two of Clubs (Tréboles)
 *  2D = Two of Diamonds (Diamantes)
 *  2H = Two of Hearts (Corazones)
 *  2S = Two of Spades (Espadas)
 */

 let deck = [];
 const tipos = ['C','D','H','S'];
 const especiales = ['A','J','Q','K'];
 
 let puntosJugador = 0,
     puntosOrdenador = 0;

 // Referencias del HTML
 const btnPedir = document.querySelector('#btnPedir');
 const puntosHTML = document.querySelectorAll('small');
 const divCartasJugador = document.querySelector('#jugador-cartas');

 // Esta función crea una nueva baraja
 const crearDeck = () => {
    for( let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo);
        }
    }
    // _.suffle librería underscore
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
 }

 crearDeck();


// Esta función me permite tomar una carta
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

// Esta función me permite tomar el valor de la carta
const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length-1);

    return (isNaN(valor)) ?
            ( valor === 'A') ? 11: 10
            : valor * 1;
}

// Eventos
btnPedir.addEventListener('click', () => {
    
    // Suma puntos cartas
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerHTML = puntosJugador;

    // Insertar cartas en HTML
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; // Usamos backticks
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    // Puntos
    if(puntosJugador > 21){
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
    } else if (puntosJugador === 21){
        console.warn('21, genial!');
        btnPedir.disabled = true;
    }

});