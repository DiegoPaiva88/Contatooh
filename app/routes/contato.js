
module.exports = function (app) {

    var contoller = app.controllers.contato;
    app.get('/contatos', contoller.listaContatos);
    app.get('/contatos/:id', contoller.obtemContato);

};