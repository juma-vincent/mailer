if(process.env.NODE_ENV === 'production'){
    //We are in production - return the production set of keys  
    module.exports = require('./prod');
}else{
    //We are in development - return the development keys
    module.exports = require('./dev');
}

