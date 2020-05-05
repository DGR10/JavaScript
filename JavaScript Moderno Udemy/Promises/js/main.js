
const myPromise = new Promise((resolve, reject) => {
    
    let bool = false;
    
    if(bool) {
        resolve("Se usa cuando la promesa tiene exito");
    } else {
        reject("Se usa cuando se quiere que se falle la promesa");
    }
    
});

// myPromise.then(pruebaPromesa);
myPromise.then(console.log).catch(console.log);


function pruebaPromesa(result){
    console.log(result);
}

