// para usar este codigo hay que instalar: dotenv
// instalamos env-var: (npm i env-var) para uasar la variables numericas, etc

import env from 'dotenv'; //importamos de forma moderna dotenv y la guardamos en: env
// const { get } = require('env-var');
import envVar from 'env-var';

// require('dotenv').config(); //ejecutamos dotenv a la antigua
env.config(); //ejecutamos dotenv forma moderna

// creamos un objeto y lo exportamos de forma moderna
export const envs = {
    PORT: envVar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envVar.get('PUBLIC_PATH').default('public').asString()
}


// module.exports= {
//     envs
// }