// Seleciona os botões de ajuste de fonte
const smallFontButton = document.getElementById('smallFont');
const largeFontButton = document.getElementById('largeFont');

// Seleciona todos os elementos de texto das classes resumo-texto e resumo-texto-depois
function getTextElements() {
    return document.querySelectorAll('.resumo-texto, .resumo-texto-depois, .resumo-texto-depois-img'); // Seleciona as duas classes
}

// Função para ajustar o tamanho da fonte de todos os textos
function adjustFontSize(amount) {
    const textElements = getTextElements(); // Atualiza a lista de elementos
    textElements.forEach(text => {
        let currentSize = parseFloat(window.getComputedStyle(text).fontSize);
        let newSize = currentSize + amount;

        // Limita o tamanho da fonte entre 12px e 36px
        if (newSize >= 12 && newSize <= 36) {
            text.style.fontSize = newSize + 'px';
        }
    });
}

// Adiciona os eventos aos botões
smallFontButton.addEventListener('click', function () {
    adjustFontSize(-2);
});

largeFontButton.addEventListener('click', function () {
    adjustFontSize(2);
});
