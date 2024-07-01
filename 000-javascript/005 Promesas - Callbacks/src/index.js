

import {promesaLenta,promesaMedia,promesaRapida, buscarHeroe, buscarHeroeAsync} from './js/promesas';
import {obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait} from './js/await'

// 1
// promesaLenta.then(console.log);
// promesaMedia.then(mensaje => console.log(mensaje));
// promesaRapida.then(console.log);

// 2
// Promise.race([promesaLenta,promesaMedia,promesaRapida])
//     .then(console.log)
//     .catch(console.warn);

// Sin Async
// buscarHeroe('capi2').
//     then(heroe => console.log(heroe))
//     .catch(console.warn);

// Con Async
// buscarHeroeAsync('iron2')
//     .then(heroe => console.log(heroe))
//     .catch(console.warn);

// 3
// obtenerHeroesArr().then(console.table);

//4
// console.time('await');

// obtenerHeroeAwait('capi2').then(heroe => {
//     console.table(heroe);

//     console.timeEnd('await');
// }).catch(console.warn);

heroesCiclo();

heroeIfAwait('iron');