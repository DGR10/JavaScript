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
 const btnNuevo = document.querySelector('#btnNuevo');
 const btnPedir = document.querySelector('#btnPedir');
 const btnDetener = document.querySelector('#btnDetener');
 const puntosHTML = document.querySelectorAll('small');
 const divCartasJugador = document.querySelector('#jugador-cartas');
 const divCartasOrdenador = document.querySelector('#ordenador-cartas');

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

// Ordenador
const turnoOrdenador = (puntosMinimos) => {

    do{
         // Suma puntos cartas
        const carta = pedirCarta();
        puntosOrdenador = puntosOrdenador + valorCarta( carta );
        puntosHTML[1].innerHTML = puntosOrdenador;

        // Insertar cartas en HTML
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`; // Usamos backticks
        imgCarta.classList.add('carta');
        divCartasOrdenador.append(imgCarta);

        if(puntosMinimos > 21) {
            break;
        }

    } while(puntosOrdenador < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
        
        if( puntosOrdenador === puntosMinimos){
            alert('Nadie gana');
        } else if( puntosMinimos > 21){
            alert('La banca gana');
        } else if( puntosOrdenador > 21){
            alert('Jugador gana');
        } else {
            alert('La banca gana');
        }

    },200);
        
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
        btnDetener.disabled = true;
        turnoOrdenador(puntosJugador);
    } else if (puntosJugador === 21){
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoOrdenador(puntosJugador);
    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoOrdenador(puntosJugador);
});

btnNuevo.addEventListener('click', () => {

    console.clear();

    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosOrdenador = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasJugador.innerHTML = '';
    divCartasOrdenador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;
})