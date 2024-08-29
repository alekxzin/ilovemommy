const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.text-resultado');
const perguntas = 
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas que uma pessoa pode ter. Além disso, o chat também gera imagens e áudios hiper-realistas. Qual e o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmação: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmação: "afirmação"
            }
        ]
};
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
    if (atual >= perguntas.leght) {
        mostraResultado();
        return;
    }
    perguntaAtual = pergunta[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () =>
        respostaSelecionada(alternativa));
        function respostaSelecionada(opçãoSelecionada) {
            const afirmações = opçãoSelecionada.afirmação;
            historiaFinal += afirmações + " ";
            atual++;
            mostraPergunta();         
        }
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}