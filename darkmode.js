 // Função para alternar entre tema claro e escuro
 function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Salva a preferência de tema no localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Carrega a preferência do tema ao iniciar a página
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    
    // Define o tema escuro como padrão se não houver uma preferência salva
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode'); // Aplica modo claro se o usuário salvou "light"
    } else {
        document.body.classList.add('dark-mode'); // Modo escuro por padrão
    }
}

// Chama a função para carregar a preferência de tema ao iniciar a página
loadThemePreference();