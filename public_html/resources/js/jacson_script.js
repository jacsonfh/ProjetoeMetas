/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready( function() 
 {
   //$('.telefone').mask('(99) 9999-9999?9');
   //$('.phone_with_ddd').mask('(00) 0000-0000');
   //$('.telefone').mask(SPMaskBehavior, spOptions);
   //$('#telefone').mask(SPMaskBehavior, spOptions);
   //$('#telefone').mask('(00) 0000-00009');
 }
);
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




$('#telefone').blur(function(event) {
   if($(this).val().length == 15){ // Celular com 9 dígitos + 2 dígitos DDD e 4 da máscara
      $('#telefone').mask('(00) 00000-0009');
   } else {
      $('#telefone').mask('(00) 0000-00009');
   }
});


function mascarafone(objeto){
        var aux;
        aux = '(' + objeto.value.substr(0,2) + ")";
        aux += objeto.value.substr(2,4)+"-"+objeto.value.substr(6,4);
        objeto.value = aux;
}




