
//EM RUN TIME
$(document).ready(function ()
{
    $("#telefone").mask("(99) 9999-999999");
    init();
}
);

// VALIDA CAMPO TELEFONE DO perfil.html
$("#telefone").on("blur", function () {
    var last = $(this).val().substr($(this).val().indexOf("-") + 1);

    if (last.length == 5) {
        var move = $(this).val().substr($(this).val().indexOf("-") + 1, 1);

        var lastfour = last.substr(1, 4);

        var first = $(this).val().substr(0, 9);

        $(this).val(first + move + '-' + lastfour);
    }
});

function acessar() {
    $.ajax({
        method: "POST",
        url:"http://localhost:8080/ProjetoeMetas/loucura",
        data: "email=$('#frmLogin:inputEmail').val()"
        data: "password=$('#frmLogin:inputPassword').val()"
    });