$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit' , function(e) {
        e.preventDefault();
        const endereçoNovaImagem = $('endereço-imagem-nova').val();
        const novoItem = $('<li></li>');
        $(`<img src="${endereçoNovaImagem}" />`).appendTo(novoItem);
        $(`
        <div class="overlay-imagem-link">
            <a href="${endereçoNovaImagem}" target ="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    })
})
//quando o documento estiver pronto, ele deve executar o alert
