angular.module('contatooh').controller('ContatosController',
    function ($scope, $resource) {

        $scope.contatos = [];

        var Contato = $resource('/contatos');

        function buscarContatos() {
            Contato.query(function (contatos) {
                $scope.contatos = contatos;
            },
                function (erro) {
                    console.log("Não foi possível obter a lista de contatos");
                    console.log(erro);
                }
            );
        }
        buscarContatos();

        $scope.remove = function (contato) {
            var promise = Contato.delete({ id: contato._id }).$promise;
            promise.then(buscarContatos)
                .catch(function (erro) {
                    console.log("Não foi possível remover o contato");
                    console.log(erro);
                });
        };

        $scope.filtr = '';

    });
