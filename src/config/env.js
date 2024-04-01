// para usar este codigo hay que instalar: dotenv
// instalamos env-var: (npm i env-var) para uasar la variables numericas, etc

require('dotenv').config();
const { get } = require('env-var');

// creamos un  objeto
const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

module.exports= {
    envs
}