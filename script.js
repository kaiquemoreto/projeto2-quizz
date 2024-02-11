/*
modelo const perguntas para o ChatGPT:

Crie 10 perguntas sobre  o tópico Fundamentos do JavaScript com 3 opções de resposta e 1 correta, para compor um aplicativo em JavaScript. Responda em essa estrutura de dados do exemplo abaixo:

const perguntas = [
    {
        pergunta: "Pergunta 01"
        respotas: [
            "Resposta A",
            "Resposta B",
            "Resposta C"
        ],
        correta: 2
    },
] 
*/
const perguntas = [
    {
        pergunta: "Qual é a função principal do JavaScript?",
        respostas: [
            "Estilização de páginas web",
            "Definição de estrutura de dados",
            "Adicionar interatividade e dinamismo às páginas web"
        ],
        correta: 2 // Resposta C é a correta
    },
    {
        pergunta: "Qual é a sintaxe correta para comentários de linha única em JavaScript?",
        respostas: [
            "<!-- Comentário -->",
            "// Comentário",
            "/* Comentário */"
        ],
        correta: 1 // Resposta B é a correta
    },
    {
        pergunta: "Como você declara uma variável em JavaScript?",
        respostas: [
            "let myVar;",
            "variable myVar;",
            "set myVar;"
        ],
        correta: 0 // Resposta A é a correta
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação estrita (igualdade de valor e tipo)",
            "Comparação solta (igualdade de valor)",
            "Atribuição"
        ],
        correta: 0 // Resposta A é a correta
    },
    {
        pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
        respostas: [
            "Remove um ouvinte de evento de um elemento",
            "Adiciona um ouvinte de evento a um elemento",
            "Define um novo evento"
        ],
        correta: 1 // Resposta B é a correta
    },
    {
        pergunta: "Qual é a função do operador '&&' em JavaScript?",
        respostas: [
            "Operador lógico AND (E)",
            "Operador lógico OR (OU)",
            "Operador lógico NOT (NÃO)"
        ],
        correta: 0 // Resposta A é a correta
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um framework JavaScript popular",
            "Uma linguagem de marcação para documentos web",
            "Uma interface de programação para documentos HTML e XML"
        ],
        correta: 2 // Resposta C é a correta
    },
    {
        pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "shift()",
            "slice()"
        ],
        correta: 0 // Resposta A é a correta
    },
    {
        pergunta: "O que é o JSON em JavaScript?",
        respostas: [
            "Um método para fazer solicitações HTTP",
            "Uma função para converter uma string em um objeto JavaScript",
            "Um formato de dados para armazenar e transportar informações estruturadas"
        ],
        correta: 2 // Resposta C é a correta
    },
    {
        pergunta: "Qual é o resultado da expressão '3 + 2 + '1' em JavaScript?",
        respostas: [
            "'51'",
            "6",
            "'32'"
        ],
        correta: 0 // Resposta A é a correta
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//lOOP
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
            //alert('Acertou!')
            corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        //alert(corretas.size)
      } 
      

      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector ('dl dt').remove()

    quiz.appendChild(quizItem) //coloca a pergunta na tela
}
