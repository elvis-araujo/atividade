
$(function(){
  
    var endPonint ="https://pizzaria.roxo.dev.br/";
    $.ajax({
        url: endPonint,
        type: 'GET',
        // dataType: 'json',
    })
    .done(function(response) {      
      $(response).each(function(key, value){                  
          $('.table').append(' \
                    <tr>\
                      <td>'+value.nome+'</td>\
                      <td>R$ '+value.valor+'</td>\
                    </tr>'
            )          
      })      
      $(response).each(function(key, value){                         
          $('#sabor').append('<option selected value="'+value.id+'">"'+value.nome.replace('"', '')+'"</option>')          
      })      
      
    })
    .fail(function() {
        // console.log("error");
    })
    .always(function() {
        // console.log("complete");
    });

  $('.dd').on('click',function(){   
      $('#sabor').clone(true).appendTo('.cloned')
  })
  $('.menu').on('click',function(){
    $('.menu').removeClass('active')
    $(this).addClass('active')
  })
  // Swal.fire({
  //   title: 'Seja Bem vindo!',
  //   text: 'Sinta-se a Vontade',    
  //   imageWidth: 400,
  //   imageHeight: 200,
  //   imageAlt: 'Custom image',
  //   confirmButtonText:'Continuar'
  // })
})