// Seleciona todos os campos datetime-local
const inputs = document.querySelectorAll('input[type="datetime-local"]');

// Itera sobre os inputs
for (const input of inputs) {
    // Adiciona um evento de input
    input.addEventListener('input', () => {
        // Se o campo tiver valor, adiciona a classe 'filled'
        if (input.value) {
            input.classList.add('filled');
        } else {
            // Se o campo estiver vazio, remove a classe 'filled'
            input.classList.remove('filled');
        }
    });
}
