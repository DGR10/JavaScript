
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

const obtenerChiste = async() => {

    try {
        
        const resp = await fetch(jokeUrl);
        if (!resp.ok){
            throw 'No se pudo realizar la petición';
        } 
        
        const {icon_url, id, value} = await resp.json();
        return {icon_url, id, value};
    
    } catch (err) {
        throw err;
    }
}

const obtenerUsuarios = async() => {
    const resp = await fetch(urlUsuarios);
    const {data:usuarios} = await resp.json();

    return usuarios;
}

// Cloudinary
const cloudPreset = 'tgvvl6tx';
const cloudUrl = '	https://api.cloudinary.com/v1_1/dkghr07an/upload';

// ArchivoSubir :: File
const subirImagen = async(archivoSubir) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;

        } else {
            throw await resp.json();
        }
    } catch (err) {
        throw err;
    }

}

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}