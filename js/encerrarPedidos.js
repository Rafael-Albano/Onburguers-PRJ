$(".encerrarPedidos").click(function () {
    $(".encerrarPedidos-mesas").toggle();
    $(".pedidos-mesas").hide();
});

$(".btnCalcMesa1").click(function (event) {
    event.preventDefault();

    $.get("https://cardapiodigital-6ecd5.firebaseio.com/encerrar_pedido.json",function (data) {
        //var pedido = JSON.parse(data);
        var pedido = data;

        //console.log(pedido);

        insertCalc(pedido);
    }).fail(function (error) {
        console.log(error.code);
    })
})

function insertCalc(pedidoMesa){
    var corpoTabela = $(".encerrarPedidos-mesas").find("tbody");

    var qntd = pedidoMesa.quantidade;
    var desc = pedidoMesa.descricao;
    var adicional = pedidoMesa.adicional;
    var valor_Adc = pedidoMesa.valor_adc;
    var valor_total = pedidoMesa.valor_total;

    var linha = "<tr>"+
        "<td>"+qntd+"</td>"+
        "<td>"+desc+"</td>"+
        "<td>"+adicional+"</td>"+
        "<td>"+valor_Adc+"</td>"+
        "<td>"+valor_total+"</td>"+
        "</tr>";

    corpoTabela.append(linha);
}