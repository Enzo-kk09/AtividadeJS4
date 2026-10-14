const caixa = document.getElementById('caixa');

caixa.addEventListener('click', function() {
    caixa.classList.toggle('ativo');
});

caixa.addEventListener('mouseenter', function() {
    caixa.textContent = 'Mouse está aqui!';
});

caixa.addEventListener('mouseleave', function() {
    caixa.textContent = 'Clique aqui!';
});

const campoTexto = document.getElementById('campo-texto');
const teclaPressionada = document.getElementById('tecla-pressionada');

campoTexto.addEventListener('keydown', function(evento) {
    teclaPressionada.textContent = 'Você pressionou: ' + evento.key;

    if (evento.key === 'Enter') {
        alert('Texto enviado: ' + campoTexto.value);
    }
});

const botaoIncrementar = document.getElementById('incrementar');
const botaoDecrementar = document.getElementById('decrementar');
const valorContador = document.getElementById('contador');

let contador = 0;

function atualizarContador() {
    valorContador.textContent = contador;
}

botaoIncrementar.addEventListener('click', function() {
    contador++;
    atualizarContador();
});

botaoDecrementar.addEventListener('click', function() {
    contador--;
    atualizarContador();
});

document.addEventListener('keydown', function(evento) {
    if (evento.key === 'ArrowUp') {
        contador++;
        atualizarContador();
    } else if (evento.key === 'ArrowDown') {
        contador--;
        atualizarContador();
    }
});
