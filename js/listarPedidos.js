$(".pedidos").click(function () {
    $(".pedidos-mesas").toggle();
    $(".encerrarPedidos-mesas").hide();
});


$(".btnMesa2").click(function (event) {
    event.preventDefault();

    $.get("https://cardapiodigital-6ecd5.firebaseio.com/pedidos.json",function (data) {
        //var pedido = JSON.parse(data);
        var pedido = data;
        //console.log(pedido);

        insertPedido(pedido);
    }).fail(function (error) {
        console.log(error.code);
    })
})

function insertPedido(pedidoMesa){
    var lista = $(".pedidos-mesas").find(".modalMesa2");

    var quantidade = pedidoMesa.quantidade;
    var descricao = pedidoMesa.descricao;

    var item = "<ul>"+
                    "<li>"+
                        "<p>"+"<span>"+quantidade+"</span>" +descricao+"</p>"+
                    +"</li>"
                +"</ul>"

    lista.append(item);
}