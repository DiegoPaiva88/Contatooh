
module.exports = function (app) {

    var controller = app.controllers.contato;

    //app.get('/contatos', contoller.listaTodos);
    //app.post('/contatos', controller.salvaContato);
    // app.get('/contatos/:id', contoller.obtemContato);
    //app.delete('/contatos/:id', contoller.removeContato)

    ///funcao route  nao duplica os indentificadores

    app.route('/contatos')
        .get(controller.listaContatos)
        .post(controller.salvarContatos);

    app.route('/contatos/:id')    /* curinga que vai receber o parametro ID para idenfificar o contato */
        .get(controller.obtemContato)
        .delete(controller.removeContato);

};