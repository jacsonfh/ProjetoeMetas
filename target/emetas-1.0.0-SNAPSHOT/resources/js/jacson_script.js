
//EM RUN TIME
$(document).ready(function ()
{
    $("#telefone").mask("(99) 9999-999999");
    init();
}
);

//VALIDADOR QUE O ANGELO NAO USOU
//
//function mask(f){
//   tel='(';
//   var val =f.value.split('');
//   for(var i=0; i<val.length; i++){
//    if( val[i]=='(' ){ 
//     val[i]=''
//    }
//    if( val[i]==')' ){ 
//     val[i]=''
//    }
//    if( val[i]=='-' ){ 
//     val[i]=''
//    }
//    if( val[i]=='' ){ 
//     val[i]=''
//    }
//   }
////
//   for(var i=0; i<val.length; i++){
//    if(i==2){ val[i]=val[i]+')' }
//    if(i==7){ val[i]=val[i]+'-' }
//    tel=tel+val[i]
//   }
//   f.value=tel;
//  }


// TENTATIVA QUE AINDA NÃO DEU CERTO DE USAR ABAS NO metas.html
$(function () {
    $('tab_metas a').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    });
});

$(function () {
    $('tab_resultados a').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    });
});

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


function validaEnviaFormulario() {



    if ($("#frmLogin:inputEmail").val() === ""
            || $("#frmLogin:inputEmail").val().indexOf('@') === -1
            || $("#frmLogin:inputEmail").val().indexOf('.') === -1) {
        $("#danger").css("display", "block");
        $("frmLogin:inputEmail").focus();
    }

    if ($("#frmLogin:inputPassword").val() === ""
            || $("#frmLogin:inputPassword").val().length < ('5') === -1) {
        $("#warn").css("display", "block");
        $("frmLogin:inputPassword").focus();
    }
}

function init() {
    $("#success").css("display", "none");
    $("#info").css("display", "none");
    $("#warn").css("display", "none");
    $("#danger").css("display", "none");
}


(function ($, W, D) {
    var jedi = {};
    jedi.Padawan =
            {
                validarFormulario: function ()
                {
                    $("#frmLogin").validate({
                        rules: {
                            inputEmail: {
                                required: true,
                                email: true
                            },
                            inputPassword: {
                                required: true,
                                minlength: 5
                            }
                        },
                        messages: {
                            inputPassword: {
                                required: "Por Favor, entre com uma senha",
                                minlength: "Sua senha deve ter pelo menos 5 caracter"
                            },
                            inputEmail: {
                                required: "Por favor, entre com um email valido.",
                                minlength: "Digite um e-mail válido"
                            }


                        },
                        submitHandler: function (form) {
                            form.submit();
                        }
                    });
                }
            };
})(jQuery, window, document);



//VALIDAÇÃO DO PERFIL
//function validaPerfil(){
//    
//}
//$.ajax({
//    method: "POST",
//    url: "some.php", //Enderço do Servlet "/ajax"
//    data: {name: "John", location: "Boston"} //dados dos inputs tipo $("#email").val()
//})
//        .done(function (msg) {
//            alert("Data Saved: " + msg);
//        });

function acessar() {
    $.ajax({
        method: "POST",
        url:"http://localhost:8080/ProjetoeMetas/loucura",
        data: "email=$('#frmLogin:inputEmail').val()"
    }
}