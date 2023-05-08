const resgistro = require('../jsRouter/registroRouter');

function routerApi(app){
    app.use('/registro', resgistro);
}

module.exports = routerApi;