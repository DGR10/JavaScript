// import { init } from "./js/usuarios-page";

// init();

import * as CRUD from './js/crud-provider';

CRUD.getUsuario(1).then(console.log);

CRUD.crearUsuario({
    name: 'Carlos',
    job: 'Programador'
}).then(console.log);

CRUD.actualizarUsuario(1, {
    name: 'Carlos',
    job: 'Programador'
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log);