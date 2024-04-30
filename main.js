const form = document.getElementById('form-atividade');
const nome = [];
const tell = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputTellAtividade = document.getElementById('tell-atividade');

    if (tell.includes(inputTellAtividade.value)){
        alert(`O numero ${inputTellAtividade.value} ja foi inserida`);
    } else {
    nome.push(inputNomeAtividade.value);
    tell.push(parseFloat(inputTellAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputTellAtividade.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
}
    inputNomeAtividade.value = '';
    inputTellAtividade.value = '';
}

function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}