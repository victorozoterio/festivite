// --------------------------
// Gerenciar campos datetime-local
// --------------------------

// Seleciona todos os campos datetime-local
const inputs = document.querySelectorAll('input[type="datetime-local"]');

// Itera sobre os inputs e adiciona eventos
for (const input of inputs) {
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

// --------------------------
// Alternância de estilos (Claro/Escuro)
// --------------------------

// Seleciona os campos de radio
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

// Adiciona funcionalidade de troca de tema via clique
document.querySelector('.radio-boolean').addEventListener('click', (event) => {
    // Verifica se o clique foi em um dos inputs ou seus labels
    if (event.target.tagName.toLowerCase() !== 'input') {
        // Alterna entre dark e light sem bloquear navegação por teclado
        if (darkRadio.checked) {
            lightRadio.checked = true;
            lightRadio.dispatchEvent(new Event('change')); // Dispara evento 'change'
            lightRadio.focus(); // Foca no input "light"
        } else {
            darkRadio.checked = true;
            darkRadio.dispatchEvent(new Event('change')); // Dispara evento 'change'
            darkRadio.focus(); // Foca no input "dark"
        }
    }
});

// --------------------------
// Atualizar nome do arquivo selecionado
// --------------------------

// Atualiza o elemento #select-file com o nome do arquivo selecionado
document.getElementById('cover-photo').addEventListener('change', (event) => {
    const fileName = event.target.files[0]?.name || 'Nenhum arquivo selecionado';
    document.getElementById('select-file').textContent = fileName;
});

// --------------------------
// Validação de campo de e-mail
// --------------------------

// Seleciona elementos relacionados ao campo de e-mail
const emailInput = document.getElementById('mail');
const errorDiv = document.getElementById('emailError');
const errorMessage = document.getElementById('errorMessage');

// Adiciona evento para validação ao perder o foco do campo
emailInput.addEventListener('blur', () => {
    if (emailInput.value && !emailInput.validity.valid) {
        // Se o e-mail for inválido
        errorMessage.textContent = 'Insira um e-mail válido';
        errorDiv.style.display = 'flex';
    } else if (emailInput.value === '') {
        // Se o campo estiver vazio
        errorMessage.textContent = 'Campo obrigatório';
        errorDiv.style.display = 'flex';
    } else {
        // Se o e-mail for válido, oculta o erro
        errorDiv.style.display = 'none';
    }
});
