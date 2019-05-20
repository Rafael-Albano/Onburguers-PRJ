$(".alterar").click(function () {
    $(".tabela-estrutura").show();
    $(".formEstrutura").hide();
});

$(".botao-fechar").click(function () {
    $(".tabela-estrutura").hide();

});


$(".icone-remover").click(function(event){
    event.preventDefault();

    $(this).parent().parent().remove();
})
