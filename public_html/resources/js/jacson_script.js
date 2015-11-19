
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
function validaIndex() {

    if ($("#acesso:inputEmail").val() === ""
            || $("#acesso:inputEmail").val().indexOf('@') === -1
            || $("#acesso:inputEmail").val().indexOf('.') === -1) {
        $("#acesso:inputEmail").css({
            "border-style": "solid",
            "border-color": "red"
        });
        $("acesso:inputEmail").focus();
        return false;
    }
    
        if ($("#acesso:inputPassword").val() === ""
            || $("#acesso:inputPassword").val().length < ('2') === -1 {
        $("#acesso:inputPassword").css({
            "border-style": "solid",
            "border-color": "red"
        });
        $("acesso:inputPassword").focus();
        return false;
    }

}

