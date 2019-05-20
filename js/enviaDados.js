
// ENVIANDO O FORMULÁRIO REDEFINIR SENHA PARA SERVIDOR.
function enviaFormulario(inputEmail, inputSenha, inputContraSenha) {
    $("#formRedefinirSenha").submit(function () {
        var dados = {
            email: inputEmail,
            senha: inputSenha,
            confirmaNovaSenha: inputContraSenha,
        };

        $.post("https://cardapiodigital-6ecd5.firebaseio.com/Usuarios.json",JSON.stringify(dados),function (msg) {
            if(msg){
                $("#message").text("Senha Cadastrada com Sucesso ").addClass("message");
                var cronometroID = setInterval(function () {
                    $(".formEstrutura").hide();
                    clearInterval(cronometroID);
                },2000);

            }
        })
            .fail(function (msg) {
                $("#message").text(msg).addClass("message");
            })

        //CONVERTENDO O VALOR PARA O FORMATO JSON
        //console.log(JSON.stringify(dados));
        return false;
    })
}





