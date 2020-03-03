const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Iroman',
        poder: 'Absuda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacción alergica'
    }
}

export const buscarHeroeAsync = async(id) => {

    const heroe = heroes[id];
    
    if(heroe){
        return heroe;
    } else {
        throw `No existe un heroe con el id ${id}`;
        throw Error(`Me dice en que linea dio error, la linea...`);
    }

}

export const buscarHeroe = (id) => {

    const heroe = heroes[id];

    return new Promise((resolve, reject) => {
        if(heroe){
            setTimeout(() => resolve(heroe),1000);
        } else {
            reject(`No existe un heroe con el id ${id}`);
        }
    });

}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa Lenta');
    }, 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa Media');
    }, 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa Rapida');
    }, 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}