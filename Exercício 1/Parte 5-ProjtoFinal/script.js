document.addEventListener('DOMContentLoaded', () => {
    const btnCuriosidade = document.getElementById('btn-curiosidade');
    const mensagemCuriosidade = document.getElementById('mensagem-curiosidade');

    if (!btnCuriosidade || !mensagemCuriosidade) {
        return;
    }

    const curiosidades = [
        'Pânico revolucionou o gênero slasher ao quebrar as regras de horror tradicional.',
        'O personagem Ghostface é inspirado em uma máscara de Halloween comum, tornando-o ainda mais assustador.',
        'A série Pânico é conhecida por suas referências a filmes de horror clássicos.',
        "O nome 'Ghostface' vem da máscara branca que o assassino usa durante todo o filme.",
        'A franquia Pânico foi criada por Kevin Williamson e dirigida por Wes Craven.',
        'Cada filme da série traz novos mistérios sobre a identidade do assassino.',
        'Pânico é famoso por matar personagens principais de forma inesperada.',
        'O filme começa com uma cena icônica de um telefonema assustador.'
    ];

    let ultimaIndex = -1;

    btnCuriosidade.addEventListener('click', () => {
        let novoIndex;

        do {
            novoIndex = Math.floor(Math.random() * curiosidades.length);
        } while (novoIndex === ultimaIndex && curiosidades.length > 1);

        ultimaIndex = novoIndex;
        const curiosidade = curiosidades[novoIndex];

        mensagemCuriosidade.textContent = curiosidade;
        mensagemCuriosidade.style.color = '#ff0000';
        mensagemCuriosidade.style.fontWeight = 'bold';
        mensagemCuriosidade.style.marginTop = '15px';
        mensagemCuriosidade.style.fontSize = '1.1em';
        mensagemCuriosidade.style.textShadow = '0 0 5px rgba(255, 0, 0, 0.5)';
        mensagemCuriosidade.style.animation = 'none';

        setTimeout(() => {
            mensagemCuriosidade.style.animation = 'fadeIn 0.5s ease-in';
        }, 10);
    });
});

const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
document.head.appendChild(style);
