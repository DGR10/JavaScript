
/**
 * Creamos un nuevo scope
 * no es posible llamar al objeto directamente
 *  */ 
const miModulo = (() => {
    'use strict'

    // Variables
    let deck = [],
        puntosJugadores = [];

    const tipos = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];


    // Referencias del HTML
    const btnNuevo = document.querySelector('#btnNuevo'),
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          puntosHTML = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll('.divCartas');

    // Esta función inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for( let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }
        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // Esta función crea una nueva baraja
    const crearDeck = () => {
        deck = [];
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
        return _.shuffle(deck);
    }

    // Esta función me permite tomar una carta
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    // Esta función me permite tomar el valor de la carta
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length-1);
        return (isNaN(valor)) ?
                ( valor === 'A') ? 11: 10
                : valor * 1;
    }
    // Turno: 0 = primer jugador y el último será el ordenador
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerHTML = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    // Crea una carta en HTML
    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`; // Usamos backticks
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    // Determina quien ha ganado la partida
    const ganador = () => {
        const [puntosMinimos,puntosOrdenador] = puntosJugadores;
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

    // Ordenador
    const turnoOrdenador = (puntosMinimos) => {
        let puntosOrdenador = 0;
        do{
            // Suma puntos cartas
            const turnoOrdenador = puntosJugadores.length - 1;
            const carta = pedirCarta();
            puntosOrdenador = acumularPuntos(carta, turnoOrdenador);
            // Insertar cartas en HTML
            crearCarta(carta, turnoOrdenador);

        } while(puntosOrdenador < puntosMinimos && puntosMinimos <= 21);

        ganador();
    }
    
    // Eventos
    btnPedir.addEventListener('click', () => {
        // Suma puntos cartas
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta,0);

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
        turnoOrdenador(puntosJugadores[0]);
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    };

})();

