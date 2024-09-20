const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
});

function mostrarMaisProjetos() {
    const projetosEscondidos = document.querySelectorAll('.projeto:not(.ativo)');
    const todosProjetosAtivos = document.querySelectorAll('.projeto.ativo');

    if (projetosEscondidos.length > 0) {
        projetosEscondidos.forEach(projeto => {
            projeto.classList.add('ativo');
        });
        botaoMostrarProjetos.textContent = 'Mostrar menos';
    } else {
        todosProjetosAtivos.forEach((projeto, index) => {
            if (index >= 6) { 
                projeto.classList.remove('ativo');
            }
        });
        botaoMostrarProjetos.textContent = 'Mostrar mais';
    }
}

const contato = document.getElementById("contato");
contato.addEventListener("Click", function () {
    window.location.href = "contato";
})

