
//EM RUN TIME
$(document).ready(function ()
{
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
    var email = $('#inputEmail').val();
    var password = $('#inputPassword').val();
    $.ajax({
        method: "POST",
        url: "/ProjetoeMetas/ValidaInicio",
        data: "email=" + email + "&password=" + password
    });
}

function ajuda() {
    $.ajax({
        method:"POST",
        url:"/ProjetoeMetas/resources/doc/manual.pdf"
    });
}