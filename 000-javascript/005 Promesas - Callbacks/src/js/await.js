import { buscarHeroeAsync, buscarHeroe } from "./promesas";


const heroesIds = ['capi','iron','spider'];
const heroesPromesas = heroesIds.map(buscarHeroe);
// const heroesPromesas = heroesIds.map(id => buscarHeroe(id));

export const obtenerHeroesArr = async () => {

    const heroesArr = [];

    for( const id of heroesIds){
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }

    return heroesArr;
}

export const obtenerHeroeAwait = async(id) => {

    try{
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch(err){
        console.error('CATCH!!!');
        throw err;
    }

}

export const heroesCiclo = async() => {

    console.time('HeroesCiclo');

    // const heroes = Promise.all(heroesPromesas);
    // heroes.forEach(heroe => {console.log(heroe);});

    for await( const heroe of heroesPromesas){
        console.log(heroe);
    };

    console.timeEnd('HeroesCiclo');

}

export const heroeIfAwait = async(id) => {
    if ((await buscarHeroeAsync(id)).nombre === 'Iroman'){
        console.log('Es el mejor de todos');
    } else {
        console.log('Naaaaaaa');
    }
}