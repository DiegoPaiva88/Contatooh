

module.exports = function (app) {

    var Contato = app.models.contato;
    var controller = {};

    controller.listaContatos = function (req, res) {
        Contato.find().exec()
            .then(
                function (contatos) {
                    res.json(contatos);
                },
                function (erro) {
                    console.error(erro)
                    res.status(500).json(erro);
                }
            )
        //res.json(contatos);  // retorna os dados de contatos como json
    };

    controller.obtemContato = function (req, res) {

        var _id = req.params.id;
        Contato.findById(_id).exec()
            .then(
                function (contato) {
                    if (!contato) throw new Error("Contato n„o encontrado");
                    res.json(contato);
                },
                function (erro) {
                    console.log(erro);
                    res.status(404).json(erro)
                }
            );

        /*var idContato = req.params.id;
        var contato = contatos.filter(function (contato) {
            return contato._id == idContato;
        })[0];

        contato ?
            res.json(contato) :
            res.status(404).send('Contato n√£o encontrado');*/
    };

    controller.removeContato = function (req, res) {

        var _id = req.params.id;
        Contato.remove({ "_id": _id }).exec()
            .then(
                function () {
                    res.end();
                },
                function (erro) {
                    return console.error(erro);
                }
            );
        /*var idContato = req.params.id;

        contatos = contatos.filter(function (contato) {
            return contato._id != idContato;
        });
        res.send(204).end();*/
    };

    controller.salvarContatos = function (req, res) {

        var _id = req.body._id;
        if (_id) {
            Contato.findByIdAndUpdate(_id, req.body).exec()
                .then(
                    function (contato) {
                        res.json(contato);
                    },
                    function (erro) {
                        console.error(erro)
                        res.status(500).json(erro);
                    }
                );
        } else {
            Contato.create(req.body)
                .then(
                    function (contato) {
                        res.status(201).json(contato);
                    },
                    function (erro) {
                        console.log(erro);
                        res.status(500).json(erro);
                    }
                );
            /*var contato = req.body;
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
            return contatoAlterar;*/
        }
    }
    return controller;
};