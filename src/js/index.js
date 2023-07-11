const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
   personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        removerSelecaoPerson();

        personagem.classList.add('selecionado');  
        
        alterarImagemPersonagemSelect(personagem);

        mudarNomePersonagemSelecionado(personagem);

        mudarDescricaoPersonagemSelecionado(personagem);
    })
}) 


function mudarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function mudarNomePersonagemSelecionado(personagem) {
    const NomePersonagem = document.getElementById('nome-personagem');
    NomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelect(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoPerson() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
