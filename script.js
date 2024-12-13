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

// Seleciona os campos radio
const lightRadio = document.getElementById('light');
const darkRadio = document.getElementById('dark');
const styleTypeElement = document.getElementById('style-type');

// Lida com a mudança do radio "light"
lightRadio.addEventListener('change', () => {
    if (lightRadio.checked) {
        styleTypeElement.textContent = 'Claro';
    }
});

// Lida com a mudança do radio "dark"
darkRadio.addEventListener('change', () => {
    if (darkRadio.checked) {
        styleTypeElement.textContent = 'Escuro';
    }
});

// Adiciona a funcionalidade de troca via clique no .radio-boolean
document.querySelector('.radio-boolean').addEventListener('click', (event) => {
    // Verifica se o clique foi em um dos inputs ou seus labels
    if (event.target.tagName.toLowerCase() !== 'input') {
        // Alterna o estado entre dark e light sem bloquear a navegação via teclado
        if (darkRadio.checked) {
            lightRadio.checked = true;
            lightRadio.dispatchEvent(new Event('change')); // Dispara o evento 'change' manualmente
            lightRadio.focus(); // Foca no input "light" após a mudança
        } else {
            darkRadio.checked = true;
            darkRadio.dispatchEvent(new Event('change')); // Dispara o evento 'change' manualmente
            darkRadio.focus(); // Foca no input "dark" após a mudança
        }
    }
});

 // Atualiza o elemento #select-file com o nome do arquivo selecionado
 document.getElementById('cover-photo').addEventListener('change', (event) => {
    const fileName = event.target.files[0]?.name || 'Nenhum arquivo selecionado';
    document.getElementById('select-file').textContent = fileName;
});
