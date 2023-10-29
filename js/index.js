const tapecaria = document.querySelectorAll('.estofado');

tapecaria.forEach((estofado) => {
    estofado.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        removeCharacterSelection();

        estofado.classList.add('selecionado');

        changeSelectedCharacterImage(estofado);

        changeSelectedCharacterName(estofado);

        changeSelectedCharacterDescription(estofado);

    })
})

function changeSelectedCharacterDescription(estofado) {
    const descricaoEstofados = document.getElementById('descricao-cabeceira');
    descricaoEstofados.innerText = estofado.getAttribute('data-description');
}

function changeSelectedCharacterName(estofado) {
    const nomeEstofado = document.getElementById('nome-estofado');
    nomeEstofado.innerText = estofado.getAttribute('data-name');
}

function changeSelectedCharacterImage(estofado) {
    const imagemEstofadoGrande = document.querySelector('.estofado-grande');

    const idEstofado = estofado.attributes.id.value;
    imagemEstofadoGrande.src = `./src/imagens/card-${idEstofado}.png`;
}

function removeCharacterSelection() {
    const estofadoSelecionado = document.querySelector('.selecionado');
    estofadoSelecionado.classList.remove('selecionado');
}
