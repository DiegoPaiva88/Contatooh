angular.module('contatooh').controller('ContatosController',
    function ($scope, Contato) {

        $scope.contatos = [];

        $scope.filtr = '';

        $scope.mensagem = { texto: '' };

        //var Contato = $resource('/contatos/:id');

        function buscarContatos() {
            Contato.query(function (contatos) {
                $scope.contatos = contatos;
                $scope.mesagem = {};
            },
                function (erro) {
                    console.log(erro);
                    $scope.mesagem = {
                        texto: 'Não foi possivel obter a lista'
                    };
                }
            );
        }
        buscarContatos();

        $scope.remove = function (contato) {
            Contato.delete({ id: contato._id },
                buscarContatos,
                function (erro) {
                    $scope.mesagem = {
                        texto: 'Não foi possivel obter a lista'
                    };
                    console.log(erro);
                }
            );
        };

    });
