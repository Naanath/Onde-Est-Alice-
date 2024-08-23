const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Enquanto caminha pela rua, você pensa em sua colega de trabalho, Alice, que desapareceu na semana passada. Como moram em uma cidade pequena, todos os cidadãos já souberam do ocorrido, e organizaram duas força-tarefas para ajudar na investigação policial: Uma responsável pelas buscas em campo, e outra responsável pela divulgação e coleta de informações que possam levar até a moça. Qual grupo você vai ajudar hoje? ",
        alternativas: [
            {
                texto: "A equipe de busca",
                afirmacao: "(PERGUNTA 1) Você é ousado, e não teme que te considerem um possível suspeito. Na verdade, a possibilidade te diverte. -----"
            },
            {
                texto: "A equipe dos folhetos",
                afirmacao: "(PERGUNTA 1) Você é astuto, e prefere ficar de olho nas possíveis pistas que a equipe pode ter encontrado. -----"
            }
        ]
    },
    {
        enunciado: "Sua ajuda foi muito útil, e uma das organizadoras da força-tarefa, uma senhora idosa, te pede que publique uma postagem sobre o desaparecimento de Alice nas redes sociais. Ao analisar a publicação, você nota que há várias informações erradas sobre suas características físicas no dia em que ela desapareceu. O que você fará? ",
        alternativas: [
            {
                texto: "Publicar a postagem do jeito que está, pois ao corrigí-la, a velhinha poderia se ofender.",
                afirmacao: "(PERGUNTA 2) Você sabe que publicar a postagem cheia de erros vai evitar que novas pessoas procurem Alice, e está contando com isso. -----"
            },
            {
                texto: "Mostrar os erros à senhora e os corrigir antes de publicar.",
                afirmacao: "(PERGUNTA 2) Você quer que as pessoas pensem que está ajudando, e não quer ser considerado suspeito. Publicar a postagem do jeito que estava poderia fazer com que desconfiassem de você. -----"
            }
        ]
    },
    {
        enunciado: "Ao fim da tarde, você decide ir embora. Uma das colegas do seu grupo se ofereceu para te acompanhar até sua casa, já que está perigoso voltar sozinho com um possível sequestrador à solta. O que você faz? ",
        alternativas: [
            {
                texto: "Você aceita alegremente.",
                afirmacao: "(PERGUNTA 3) Você acha divertido o medo que sua colega está sentindo, e acha irônico que ela decida acompanhar justamente você. -----"
            },
            {
                texto: "Você aceita, hesitante. ",
                afirmacao: "(PERGUNTA 3) Você sabe que não há perigo algum, mas pode ser legal conversar com sua colega durante o caminho para casa. -----"
            }
        ]
    },
    {
        enunciado: "Durante o caminho para casa, você tem duas opções de rota: atravessar uma trilha pouco movimentada do parque (caminho curto), ou continuar pela rua central e movimentada (caminho longo). O que você decide? ",
        alternativas: [
            {
                texto: "Seguir a trilha.",
                afirmacao: "(PERGUNTA 4) Sua colega reclama, mas você sabe que não há perigo. Além do mais, você gosta das árvores. -----"
            },
            {
                texto: "Seguir a rua.",
                afirmacao: "(PERGUNTA 4) Você decidiu não levantar as suspeitas da sua colega, e finge preferir o caminho seguro. -----"
            }
        ]
    },
    {
        enunciado: "Você chega em casa e decide tomar um banho, porém, um barulho vindo de um dos quartos ao fundo da casa chama sua atenção. Você mora sozinho, então não deveria haver barulho algum. Você vai investigar? ",
        alternativas: [
            {
                texto: "Sim, mas terei cuidado.",
                afirmacao: "(PERGUNTA 5) Você temeu a possibilidade de Alice ter conseguido se soltar e preferiu verificar se sua prisioneira continuava lá. -----"
            },
            {
                texto: "Sim, mas não estou com medo algum.",
                afirmacao: "(PERGUNTA 5) Você tinha certeza que Alice não poderia ter se soltado das amarras que à prendiam, por isso só foi checar o barulho por curiosidade. -----"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "    ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você abre a porta e encontra Alice no cômodo. A garota está amordaçada e amarrada à uma cadeira, visivelmente cansada e amedrontada. Exatamente onde você a deixou da última vez. Quando ela te encara, seus olhos se enchem de medo. Você calmamente a observa, ainda na porta, e sorri. Com um último olhar, você se vira e fecha a porta atrás de si, trancando-a em seguida.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
