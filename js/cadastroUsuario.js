
$(".cadastrar").click(function () {
    $("#formCadastro").show();
    $(".tabela-estrutura").hide();
    clearInputs();
});

$(".botao-fechar").click(function () {
    $("#formCadastro").hide();
    clearInputs();
});



validaSenha();

// FUNÇÃO PARA CONFIRMAR SENHA E CONTRA SENHA DO USUÁRIO.
function validaSenha() {
    var nome = $("#nome").val();
    var email = $("#email-novoUsuario").val();
    var matricula = $("#matricula").val();
    var funcao = $("#cargo-novoUsuario").val();
    var senha = $("#senha").val();
    var confirmaSenha = $("#confirmaSenha").val();

    $("#nome").on("input",function () {
        nome = $(this).val();

        $("#email-novoUsuario").on("input",function () {
            email = $(this).val();

            $("#matricula").on("input",function () {
                matricula = $(this).val();

                $("#cargo-novoUsuario").on("input",function () {
                    funcao = $(this).val();

                    $("#senha").on("input",function () {
                        senha = $(this).val();

                       $("#confirmaSenha").on("input",function () {
                           confirmaSenha = $(this).val();

                           $(".salvarCadastro").click(function () {
                               if(nome == "" && email == "" && matricula == "" && funcao == "" && senha == "" && confirmaSenha == "" ){
                                   return false;
                               }if(senha == "" && confirmaSenha == ""){
                                   return false;
                               }
                               if(senha === confirmaSenha){
                                   enviaFormulario(nome,email,matricula,funcao,senha,confirmaSenha);

                               }else {
                                   $("#message").text("Senhas Diferentes ").addClass("message");
                                   var cronometroID = setInterval(function () {
                                       senha = "";
                                       confirmaSenha = senha;
                                       clearInputs();
                                       clearInterval(cronometroID);
                                       console.log(senha,confirmaSenha);
                                   },2000);
                                   return false;
                               }
                           });
                       })
                    });

                });

            });

        });
    });
}

function clearInputs(){
    $("#nome").val("");
    $("#email-novoUsuario").val("");
    $("#matricula").val("");
    $("#cargo-novoUsuario").val("");
    $("#senha").val("");
    $("#confirmaSenha").val("");
    $("#message").text("").removeClass("message");
}

function enviaFormulario(inpuNome, inputEmail, inputMatricula, inputFuncao, inputSenha, inputContraSenha) {
    $("#formRedefinirSenha").submit(function () {
        var dados = {
            nome: inpuNome,
            email: inputEmail,
            matricula: inputMatricula,
            funcao: inputFuncao,
            senha: inputSenha,
            confirmaNovaSenha: inputContraSenha,
        };

        $.post("#",JSON.stringify(dados),function (msg) {
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
