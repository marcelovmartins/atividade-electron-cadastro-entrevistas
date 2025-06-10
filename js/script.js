document.addEventListener('DOMContentLoaded', () => {
    carregarEntrevistas();
});

document.getElementById('salvar').addEventListener('click', async () => {
    const empresa = document.getElementById('empresa').value.trim();
    const data = document.getElementById('data').value;
    const observacoes = document.getElementById('observacoes').value.trim();

    if (!empresa || !data) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    await window.api.criarEntrevista({ empresa, data, observacoes });
    limparFormulario();
    carregarEntrevistas();
});

async function carregarEntrevistas() {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';

    const entrevistas = await window.api.listarEntrevistas();
    entrevistas.forEach((entrevista) => {
        const li = document.createElement('li');
        li.textContent = `${entrevista.empresa} - ${new Date(entrevista.data).toLocaleDateString()} - ${entrevista.observacoes}`;

        const btnDeletar = document.createElement('button');
        btnDeletar.textContent = 'Excluir';
        btnDeletar.classList.add('delete-btn');
        btnDeletar.onclick = async () => {
            await window.api.deletarEntrevista(entrevista.id);
            carregarEntrevistas();
        };

        li.appendChild(btnDeletar);
        lista.appendChild(li);
    });
}

function limparFormulario() {
    document.getElementById('empresa').value = '';
    document.getElementById('data').value = '';
    document.getElementById('observacoes').value = '';
}