import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId = 'capi';
const heroeId2 = 'iron';

// Callback
// buscarHeroe(heroeId,(err, heroe1) => {
//     if(err) {return console.error('Algo salió mal'); }
    
//     buscarHeroe( heroeId2, (err, heroe2) => {
//         if(err) {return console.error('Algo salió mal'); }

//         console.log(`Enviando el heroe ${heroe1.nombre} y el heroe ${heroe2.nombre} a la misión`);
        
//     });
    
// });

// buscarHeroe( heroeId).then(heroe => {
//     buscarHeroe(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la misión`);
//     });
// });

Promise.all([buscarHeroe(heroeId),buscarHeroe(heroeId2)]).then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
    // Catch
    // console.log(`Enviando a ${heroe12.nombre} y ${heroe2.nombre} a la misión`);
}).catch((err) => {
    alert(err);
}).finally(() => {
    console.log('Se terminó el Promise.all');
});

console.log('Fin del programa');