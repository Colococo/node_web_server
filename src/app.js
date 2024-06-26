// destructuramos el objeto envs del archivo env.js
const { envs } = require('./config/env');
const { startServer } = require('./server/server');


const main = ()=>{
    //ejecutamos startServer de server
    startServer({
        port: envs.PORT,
        pulic_path: envs.PUBLIC_PATH
    })
    //console.log(envs);//imprimimos el objeto destructuraro envs
}

// funcion agnostica autoconvocada (agnostica: no tiene nombre autoconvocada: la ejecutamos al final con los () )
// llamamos primero a la funcion (linea 1) y luego se autoejecuta
(async ()=> {
    main()
})();

