//FORMULÁRIO REDEFINIR SENHA.
apresentaForm();
escondeForm();

validaSenha();


function apresentaForm() {
    $(".esqueceu-senha").on("click",function () {
        $(".formEstrutura").show();
        clearInputs();
    });
}

function escondeForm() {
    $(".botao-cancelar").on("click",function () {
        $(".formEstrutura").hide();
    })
}

// FUNÇÃO PARA CONFIRMAR SENHA E CONTRA SENHA DO USUÁRIO.
function validaSenha() {
    var email = $("#validaEmailServidor").val();
    var senha = $("#novaSenhaUsuario").val();
    var confirmaSenha = $("#confirmaSenha").val();

    if(email == ""){
        $("#validaEmailServidor").on("input",function () {
            email = $(this).val();

            if(senha == ""){
                $("#novaSenhaUsuario").on("input",function () {
                    senha = $(this).val();

                    if(confirmaSenha == ""){
                        $("#confirmaSenha").on("input",function () {
                            confirmaSenha = $(this).val();

                            $(".botao-salvar").click(function () {
                                if(senha == "" && confirmaSenha == "" && email == ""){
                                    return false;
                                }if(senha == "" && confirmaSenha == ""){
                                    return false;
                                }
                                if(senha === confirmaSenha){
                                    enviaFormulario(email, senha, confirmaSenha);
                                    return true;
                                }else {
                                    $("#message").text("Senhas Diferentes ").addClass("message");
                                    var cronometroID = setInterval(function () {
                                        email = "";
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
                    }
                })
            }

        });
    }

}

// FUNÇÃO PARA LIMPAR OS INPUTS DO USUÁRIO.
function clearInputs(){
    $("#validaEmailServidor").val("");
    $("#novaSenhaUsuario").val("");
    $("#confirmaSenha").val("");
    $("#message").text("").removeClass("message");
}
