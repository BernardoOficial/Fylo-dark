// criar a barrinha
function criarBarrinha() {

    const bar = document.createElement('div');
    bar.setAttribute('data-barrinha', '');
    bar.style.height = '4px';
    bar.style.width = '0px';
    bar.style.backgroundColor = 'rgb(71, 135, 253)';

    bar.style.position = 'fixed';
    bar.style.left = '0px'
    bar.style.top = '0px';
    bar.style.zIndex = '9999';
    bar.style.transition = '.2s';

    document.body.appendChild(bar);
}

criarBarrinha(); // Iniciar barrinha na página.

// Esperar a página recarregar para começar a executar o progresso da barra.
window.addEventListener('load', carregarPagina);

function carregarPagina() {

    window.addEventListener('scroll', atualizarBarra);

    function atualizarBarra() {

        // Descobrir a posição Y do elemento onde desejar que seja 100% do conteúdo.
        let distanciaAteOTopoDaPagina = document.querySelector('[data-obtenhaacesso]').offsetTop; // 2200px (aproximadamente)

        // Descobrir a posição Y atual da página.
        let posY = window.pageYOffset;

        // Porcentagem atual da barrinha.
        let porcentagemBarra = posY * 100 / distanciaAteOTopoDaPagina;

        // Modificar a largura da barrinha.
        const bar = document.querySelector('[data-barrinha]');
        bar.style.width = porcentagemBarra + '%';
    }
}