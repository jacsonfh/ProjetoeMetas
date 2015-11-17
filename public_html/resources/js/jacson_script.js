
//EM RUN TIME
$(document).ready( function() 
 {
    $("#telefone").mask("(99) 9999-999999");
 
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
$("#telefone").on("blur", function() {
    var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

    if( last.length == 5 ) {
        var move = $(this).val().substr( $(this).val().indexOf("-") + 1, 1 );

        var lastfour = last.substr(1,4);
        
        var first = $(this).val().substr( 0, 9 );
        
        $(this).val( first + move + '-' + lastfour );
    }
});



//VALIDAÇÃO DO INDEX
function validaindex(){
 
    if( document.acesso.inputemail.value=="" || document.acesso.inputemail.value.indexOf('@')==-1 || document.acesso.inputemail.value.indexOf('.')==-1 )
    {
        alert( "Preencha campo e-mail corretamente!" );
        document.acesso.inputemail();
        return false;
    }

    if(document.acesso.inputpassword.value=="")
    {
        alert( "Preencha campo e-mail corretamente!" );
        document.acesso.inputpassword.focus();
        return false;
    }
}

//Leia mais em: HTML5 Validator: Validando Formulários com HTML5 http://www.devmedia.com.br/html5-validator-validando-formularios-com-html5/28785#ixzz3rlSCMpMY

//ANOTAÇÕES
//|| document.dados.tx_nome.value.length < 8
// <form action="pagina de ação" method="post" name="dados" onSubmit="return enviardados();" >

