const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Qual é uma das principais vantagens ambientais do método de Plantio Direto (PD) em comparação com o preparo de solo convencional?",
    alternativas:[
        {
        texto:"Permite o uso de mais agrotóxicos.",
        afirmacao:"O uso de tecnologias inovadoras, como drones, sensores, inteligência artificial e biotecnologia, está transformando a agricultura e a pecuária, promovendo uma revolução no campo."
        },
        {
       texto:"Reduz significativamente a erosão do solo e aumenta a retenção de água.",
       afirmacao:"O futuro do agronegócio é moldado pela inteligência e eficiência."
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
           afirmacao:"A Agricultura de Precisão (com drones, GPS e sensores) se consolidou como a ferramenta fundamental para a sustentabilidade."
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
            afirmacao:"Práticas como o Plantio Direto e a diversificação de culturas (policultura) são essenciais. "
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
            afirmacao:"A sustentabilidade é uma exigência legal e de mercado. "
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
            afirmacao:" A produção abundante e rentável de alimentos no futuro depende da inovação tecnológica aliada ao respeito rigoroso aos princípios ecológicos. A sustentabilidade é, portanto, o caminho mais inteligente e lucrativo para a agropecuária moderna."
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
        const afirmacoes = opcaoSelecionada. afirmacao;
        historiaFinal += afirmacoes + "" ;
        atual++;
        mostraPergunta();

     }

     function mostraResultado(){
        caixaPerguntas.textContent = "Resumo...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
     }
    
     mostraPergunta();

