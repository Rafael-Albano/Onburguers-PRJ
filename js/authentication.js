let inputEmail = $("#email-user");
let inputSenha = $("#pwd-user");

$(".botao-entrar").click((event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(inputEmail.val(), inputSenha.val()).then(function (result) {
        location.assign("http://localhost:63342/OnBurguers/telaUsuario-cadastro.html?_ijt=jr9e9sk9b3j47h9oiek55kck5u");
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        //var errorMessage = error.message;

        showError(errorCode,inputEmail,inputSenha);
    })
});


function showError(value, email, senha) {

    switch (value) {
        case "auth/user-not-found":
            alert("Usuário não cadastrado no sistema");
            email.val("");
            senha.val("");
            break;

        case "auth/wrong-password":
            alert("Senha Inválida");
            senha.val("");
            break;
    }
}

