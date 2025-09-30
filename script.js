const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Em uma quinta-feira depois do almoço fomos buscar o boi, que o patrão tinha comprado.",
    alternativas:[
        {
        texto:"brabo",
        afirmacao:"O uso de tecnologias inovadoras, como drones, sensores, inteligência artificial e biotecnologia, está transformando a agricultura e a pecuária, promovendo uma revolução no campo."
        },
        {
       texto:"cansado",
       afirmacao:"afirmação"
        }

    ]
},

{
    
        enunciado: "O uso de tecnologias como drones e sensores para monitoramento de culturas tem se popularizado. Você acredita que essas tecnologias podem aumentar a produtividade agrícola de forma sustentável?",
        alternativas:[{
            texto:"Sim, a tecnologia pode ajudar a monitorar melhor as safras e utilizar recursos de maneira mais eficiente.",
            afirmacao:" Essas tecnologias têm o potencial de aumentar a produtividade, reduzir desperdícios e promover a sustentabilidade, oferecendo soluções inteligentes para os desafios enfrentados pelos produtores."
        },
        {        
           texto:"Não, a tecnologia pode ser muito cara para pequenos produtores e não é uma solução para todos.",
           afirmacao:"afirmação"
        }        
        ]
    },
    

    {
    
        enunciado: "A agropecuária é uma das principais responsáveis pela emissão de gases de efeito estufa e desmatamento. O que você acha que deveria ser feito para reduzir esses impactos?",
        alternativas:[
            {
            texto: "É necessário adotar práticas agrícolas mais sustentáveis, como o plantio direto e o uso de técnicas de agroecologia.",
            afirmacao:"Apesar dos avanços, a integração de novas tecnologias na agropecuária não está isenta de desafios"
            },
            {
            texto: "Não é possível reduzir o impacto da agropecuária sem prejudicar a produção de alimentos. Devemos continuar com as práticas atuais.",
            afirmacao:"afirmação"
            }
        ]
    },
    
    {
    
        enunciado:"A pecuária é responsável por grande parte do desmatamento e das emissões de metano. O que você acha que deve ser feito para melhorar a sustentabilidade na pecuária?" ,
        alternativas:[
            {
            texto: "Investir em sistemas de produção intensiva e tecnologias para reduzir as emissões de metano.",
            afirmacao:"O alto custo de implementação e a necessidade de capacitação dos produtores são barreiras que precisam ser superadas "
        },
        {
            texto:"Apenas a redução do consumo de carne pode diminuir o impacto da pecuária no meio ambiente." ,
            afirmacao:"afirmação"
        }
        ]
    },

    {
    
        enunciado: "O uso de agrotóxicos na agricultura tem gerado preocupações quanto à saúde humana e ao meio ambiente. Qual é a sua opinião sobre o uso de agrotóxicos?",
        alternativas:[
            {
            texto: "Os agrotóxicos são necessários para garantir a produtividade, mas devem ser usados com regulamentação mais rígida.",
            afirmacao:"Contudo, a combinação de inovação com práticas agrícolas tradicionais pode ser a chave para uma agricultura mais eficiente e ambientalmente responsável. "
            },
        {
            texto: "Deveríamos buscar alternativas naturais e orgânicas, já que os agrotóxicos prejudicam a saúde e o meio ambiente.",
            afirmacao:"afirmação"
        }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
    }
    
    function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
    }
     }

     function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada. afirmacoes;
        historiaFinal += afirmacoes + "" ;
        atual++;
        mostraPergunta();

     }

     function mostraResultado(){
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
     }
    
     mostraPergunta();

