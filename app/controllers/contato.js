
var contatos = [
    {
        _id: 1, nome: 'Contato Exemplo 1',
        email: 'cont1@empresa.com.br'
    },
    {
        _id: 2, nome: 'Contato Exemplo 2',
        email: 'cont2@empresa.com.br'
    },
    {
        _id: 3, nome: 'Contato Exemplo 3',
        email: 'cont3@empresa.com.br'
    }
];

module.exports = function () {

    var controller = {};

    var ID_CONTATO_INC = 3;

    controller.listaContatos = function (req, res) {
        res.json(contatos);  // retorna os dados de contatos como json
    };

    controller.obtemContato = function (req, res) {

        var idContato = req.params.id;
        var contato = contatos.filter(function (contato) {
            return contato._id == idContato;
        })[0];

        contato ?
            res.json(contato) :
            res.status(404).send('Contato não encontrado');
    };

    controller.removeContato = function (req, res) {
        var idContato = req.params.id;

        contatos = contatos.filter(function (contato) {
            return contato._id != idContato;
        });
        res.send(204).end();
    };

    controller.salvarContatos = function (req, res) {
        var contato = req.body;
        contato = contato._id ?
            atualizaz(contato) :
            adicionar(contato);
        res.json(contato);
    };
    function adicionar(contatoNovo) {
        contatoNovo._id = ++ID_CONTATO_INC;;
        contatos.push(contatoNovo);
        return contatoNovo;
    }
    function atualizaz(contatoAlterar) {
        contatos = contatos.map(function (contato) {
            if (contato._id == contatoAlterar._id) {
                contato = contatoAlterar;

            }
            return contato;
        });
        return contatoAlterar;
    }
    return controller;
};