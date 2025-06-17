const questions = [
  {
    question: "Quanto é 7 x 8?",
    options: ["54", "56", "58", "60"],
    answer: 1,
    hint: "Multiplicação: 7 vezes 8."
  },
  {
    question: "Qual é a metade de 150?",
    options: ["70", "75", "80", "85"],
    answer: 1,
    hint: "Divida 150 por 2."
  },
  {
    question: "Quantos graus tem um ângulo reto?",
    options: ["45°", "90°", "180°", "360°"],
    answer: 1,
    hint: "É o ângulo de um canto de livro aberto."
  },
  {
    question: "Se um produto custa R$ 200 e tem 10% de desconto, qual o valor final?",
    options: ["R$ 180", "R$ 190", "R$ 185", "R$ 175"],
    answer: 0,
    hint: "10% de 200 é 20. Então: 200 - 20."
  },
  {
    question: "Quanto é 3² (3 ao quadrado)?",
    options: ["6", "9", "12", "15"],
    answer: 1,
    hint: "3 vezes ele mesmo: 3 x 3."
  },
  {
    question: "Qual é a fração equivalente a 1/2?",
    options: ["2/4", "3/5", "4/6", "5/8"],
    answer: 0,
    hint: "Multiplique numerador e denominador por 2."
  },
  {
    question: "Quanto é 25% de 80?",
    options: ["15", "20", "25", "30"],
    answer: 1,
    hint: "25% significa um quarto do valor."
  },
  {
    question: "Se um trem percorre 120 km em 2 horas, qual a velocidade média?",
    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    answer: 1,
    hint: "Distância dividida pelo tempo: 120 / 2."
  },
  {
    question: "O triplo de 15 é:",
    options: ["30", "45", "60", "75"],
    answer: 1,
    hint: "15 x 3."
  },
  {
    question: "Quanto é 81 dividido por 9?",
    options: ["7", "8", "9", "10"],
    answer: 2,
    hint: "81 dividido por 9 = 9."
  },
  {
    question: "Se um número somado com 10 dá 25, qual é o número?",
    options: ["10", "15", "20", "25"],
    answer: 1,
    hint: "25 - 10 = ?"
  },
  {
    question: "Quanto é 5 x 12?",
    options: ["50", "60", "70", "80"],
    answer: 1,
    hint: "5 x 12 = ?"
  },
  {
    question: "Qual é o dobro de 36?",
    options: ["72", "68", "70", "74"],
    answer: 0,
    hint: "Multiplique 36 por 2."
  },
  {
    question: "Qual é a raiz quadrada de 49?",
    options: ["5", "6", "7", "8"],
    answer: 2,
    hint: "Número que multiplicado por ele mesmo dá 49."
  },
  {
    question: "Qual o próximo número da sequência: 2, 4, 6, 8, ...?",
    options: ["9", "10", "11", "12"],
    answer: 1,
    hint: "Sequência de números pares."
  },
  {
    question: "Quanto é 15% de 200?",
    options: ["20", "25", "30", "35"],
    answer: 2,
    hint: "Calcule 15% de 200."
  },
  {
    question: "Um retângulo tem 5 cm de base e 8 cm de altura. Qual a área?",
    options: ["40 cm²", "13 cm²", "20 cm²", "30 cm²"],
    answer: 0,
    hint: "Área = base x altura."
  },
  {
    question: "Qual é o valor de x na equação: 2x + 6 = 14?",
    options: ["3", "4", "5", "6"],
    answer: 0,
    hint: "2x = 14 - 6."
  },
  {
    question: "Qual é o perímetro de um quadrado de lado 7 cm?",
    options: ["14 cm", "21 cm", "28 cm", "49 cm"],
    answer: 2,
    hint: "Perímetro = 4 x lado."
  },
  {
    question: "Se uma loja vende um produto por R$ 120, e dá 20% de desconto, qual o preço final?",
    options: ["R$ 96", "R$ 100", "R$ 98", "R$ 90"],
    answer: 0,
    hint: "Calcule 20% de 120 e subtraia."
  },
  {
    question: "Qual é a fração que representa 0,25?",
    options: ["1/2", "1/3", "1/4", "1/5"],
    answer: 2,
    hint: "0,25 = 25% = 1 quarto."
  },
  {
    question: "Se um carro anda 300 km em 5 horas, qual a velocidade média?",
    options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answer: 2,
    hint: "Divida a distância pelo tempo."
  },
  {
    question: "Quanto é 9²?",
    options: ["18", "27", "81", "72"],
    answer: 2,
    hint: "9 x 9."
  },
  {
    question: "Qual número falta na sequência: 5, 10, 15, __, 25?",
    options: ["18", "20", "22", "23"],
    answer: 1,
    hint: "Sequência de múltiplos de 5."
  },
  {
    question: "Se um ângulo tem 120°, qual é o seu complemento?",
    options: ["60°", "30°", "90°", "120°"],
    answer: 1,
    hint: "Ângulos complementares somam 90°."
  },
 
  {
    question: "Qual a forma correta do plural de 'lápis'?",
    options: ["lápises", "lápis", "lápizes", "lápise"],
    answer: 1,
    hint: "Palavras terminadas em -is têm plural com -is."
  },
  {
    question: "Assinale a frase com erro de concordância verbal:",
    options: [
      "Eles foram ao parque.",
      "Nós gostamos de música.",
      "Ele querem sair cedo.",
      "Você está correto."
    ],
    answer: 2,
    hint: "O verbo deve concordar com o sujeito."
  },
  {
    question: "Qual a classe gramatical da palavra 'rápido' em: 'Ele corre rápido'?",
    options: ["Adjetivo", "Substantivo", "Advérbio", "Verbo"],
    answer: 2,
    hint: "'Rápido' aqui indica como ele corre."
  },
  {
    question: "Qual a forma correta de escrever o plural de 'animal'?",
    options: ["animals", "animais", "animaises", "animalis"],
    answer: 1,
    hint: "Plural de palavras terminadas em -al é com -ais."
  },
  {
    question: "Assinale a frase com erro de ortografia:",
    options: [
      "Eu vou para casa.",
      "Ela está cansada.",
      "Nós vams ao cinema.",
      "Ele está feliz."
    ],
    answer: 2,
    hint: "Verifique se as palavras estão escritas corretamente."
  },
  {
    question: "Qual a forma correta de usar 'porque' para responder a uma pergunta?",
    options: [
      "'Porque' (junto, sem acento)",
      "'Por que' (separado, sem acento)",
      "'Por quê' (separado com acento)",
      "'Porquê' (junto com acento)"
    ],
    answer: 0,
    hint: "'Porque' é usado para responder, explicando motivo."
  },
  {
    question: "Qual é o antônimo de 'feliz'?",
    options: ["triste", "alegre", "contente", "satisfeito"],
    answer: 0,
    hint: "Antônimo significa o oposto."
  },
  {
    question: "Em qual frase o sujeito está oculto?",
    options: [
      "Nós viajamos ontem.",
      "Ela estuda bastante.",
      "Choveu muito ontem.",
      "Vocês chegaram cedo."
    ],
    answer: 2,
    hint: "Quando não aparece explícito."
  },
  {
    question: "Qual a função da vírgula na frase: 'Vamos, Pedro, para casa.'?",
    options: [
      "Separar elementos de uma lista.",
      "Indicar uma pausa para vocativo.",
      "Separar orações coordenadas.",
      "Marcar uma enumeração."
    ],
    answer: 1,
    hint: "Vocativo é quando se chama alguém."
  },
  {
    question: "Qual o plural de 'cidadão'?",
    options: ["cidadões", "cidadãos", "cidadaes", "cidadães"],
    answer: 1,
    hint: "Palavras terminadas em -ão podem ter plural em -ãos."
  },
  {
    question: "Assinale a frase correta:",
    options: [
      "Eu vi ela ontem.",
      "Eu a vi ontem.",
      "Eu vi-lhe ontem.",
      "Eu viu ela ontem."
    ],
    answer: 1,
    hint: "Pronome correto na função de objeto direto."
  },
  {
    question: "Qual a forma correta do verbo no presente do indicativo: 'Eles (fazer)'?",
    options: ["fazem", "faz", "fazes", "fazo"],
    answer: 0,
    hint: "Eles formam o plural."
  },
  {
    question: "O que é um advérbio?",
    options: [
      "Palavra que modifica verbo, adjetivo ou outro advérbio.",
      "Palavra que nomeia seres.",
      "Palavra que indica ação.",
      "Palavra que substitui o nome."
    ],
    answer: 0,
    hint: "Advérbio indica modo, tempo, lugar, intensidade."
  },
  {
    question: "Assinale a frase com erro de pontuação:",
    options: [
      "Ela gosta de ler, escrever e pintar.",
      "Ele chegou, e saiu cedo.",
      "Fui ao mercado.",
      "Vamos ao parque amanhã."
    ],
    answer: 1,
    hint: "Evite vírgula entre sujeito e verbo."
  },
  {
    question: "Qual a forma correta do plural de 'pão'?",
    options: ["pães", "pãos", "pãons", "páes"],
    answer: 0,
    hint: "Palavras terminadas em -ão com plural em -ães."
  },
  {
    question: "Qual a função do sujeito na frase?",
    options: [
      "Indicar quem pratica a ação.",
      "Indicar o objeto da ação.",
      "Indicar a consequência da ação.",
      "Indicar o lugar da ação."
    ],
    answer: 0,
    hint: "Quem realiza a ação é o sujeito."
  },
  {
    question: "Qual a forma correta: 'Mau' ou 'Mal'?",
    options: [
      "'Mau' é oposto de bom, 'Mal' é oposto de bem.",
      "'Mau' e 'Mal' são sinônimos.",
      "'Mal' é adjetivo, 'Mau' é advérbio.",
      "'Mau' é um verbo."
    ],
    answer: 0,
    hint: "Preste atenção no significado das palavras."
  },
  {
    question: "Qual é o verbo na frase: 'Eles correram rápido.'?",
    options: ["Eles", "correram", "rápido", "ninguém"],
    answer: 1,
    hint: "Verbo expressa ação."
  },
  {
    question: "Assinale a alternativa que apresenta um substantivo:",
    options: ["Correr", "Bonito", "Casa", "Rápido"],
    answer: 2,
    hint: "Substantivo nomeia seres, lugares ou coisas."
  },
  {
    question: "Qual o tempo verbal da frase: 'Eu comerei amanhã'?",
    options: ["Presente", "Pretérito", "Futuro", "Imperativo"],
    answer: 2,
    hint: "Indica ação que ainda vai acontecer."
  },
  {
    question: "Qual a função do pronome na frase: 'Ela gosta dele'?",
    options: [
      "Sujeito",
      "Objeto direto",
      "Objeto indireto",
      "Adjunto adverbial"
    ],
    answer: 2,
    hint: "Preposição indica objeto indireto."
  },
  {
    question: "Assinale a frase com erro de regência verbal:",
    options: [
      "Gosto de música.",
      "Preciso de ajuda.",
      "Cheguei a casa.",
      "Ela gosta com ele."
    ],
    answer: 3,
    hint: "Preposição errada com o verbo 'gostar'."
  },
  {
    question: "Qual a forma correta do plural de 'farol'?",
    options: ["faróis", "farols", "faroles", "faroleses"],
    answer: 0,
    hint: "Palavras terminadas em -ol têm plural em -óis."
  },
  {
    question: "Qual a função do sujeito oculto na frase: 'Choveu bastante ontem'?",
    options: [
      "Sujeito simples",
      "Sujeito composto",
      "Sujeito inexistente",
      "Sujeito oculto"
    ],
    answer: 2,
    hint: "Verbo indica fenômeno da natureza."
  }


  
];



let prizeLevels = [1000, 5000, 10000, 25000, 50000, 100000, 200000, 400000, 700000, 1000000];
let currentPrizeIndex = 0;
let currentQuestionIndex;
let usedQuestions = [];
let ajudaUniversitarios = 3;
let ajudaDica = 2;
let ajudaPular = 1;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const scoreElement = document.getElementById('score');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');
const helpUniversitariosBtn = document.getElementById('help-universitarios');
const helpDicaBtn = document.getElementById('help-dica');
const helpPularBtn = document.getElementById('help-pular');

function startGame() {
    currentPrizeIndex = 0;
    usedQuestions = [];
    ajudaUniversitarios = 3;
    ajudaDica = 2;
    ajudaPular = 1;

    helpUniversitariosBtn.textContent = `👨‍🎓 Universitários (${ajudaUniversitarios})`;
    helpDicaBtn.textContent = `💡 Dica (${ajudaDica})`;
    helpPularBtn.textContent = `⏭️ Pular (${ajudaPular})`;
    scoreElement.textContent = "R$ " + prizeLevels[currentPrizeIndex].toLocaleString('pt-BR');
    getRandomQuestion();
}

function getRandomQuestion() {
    let availableQuestions = questions.filter((q, index) => !usedQuestions.includes(index));
    if (availableQuestions.length === 0) {
        alert("Parabéns! Você venceu o jogo e ganhou R$ " + prizeLevels[currentPrizeIndex].toLocaleString('pt-BR') + "!");
        startGame();
        return;
    }
    let randomIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestionIndex = questions.indexOf(availableQuestions[randomIndex]);
    usedQuestions.push(currentQuestionIndex);
    showQuestion();
}

function showQuestion() {
    let q = questions[currentQuestionIndex];
    questionElement.textContent = q.question;
    answersElement.innerHTML = '';

    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        answersElement.appendChild(btn);
    });

    nextButton.disabled = true;
    feedbackElement.textContent = '';
}

function checkAnswer(selected) {
    let q = questions[currentQuestionIndex];
    let allButtons = answersElement.querySelectorAll('button');

    if (selected === q.answer) {
        allButtons[selected].classList.add('correct');
        feedbackElement.textContent = "✅ Resposta Correta!";
        currentPrizeIndex++;

        if (currentPrizeIndex >= prizeLevels.length) {
            alert("Incrível! Você ganhou R$ 1.000.000!!!");
            startGame();
            return;
        }
    } else {
        allButtons[selected].classList.add('incorrect');
        allButtons[q.answer].classList.add('correct');
        feedbackElement.textContent = "❌ Resposta Incorreta!";
        setTimeout(() => {
            alert(`Jogo Encerrado! Você ganhou R$ ${currentPrizeIndex > 0 ? prizeLevels[currentPrizeIndex - 1].toLocaleString('pt-BR') : "0"}.`);
            startGame();
        }, 1000);
        return;
    }

    scoreElement.textContent = "R$ " + prizeLevels[Math.min(currentPrizeIndex, prizeLevels.length - 1)].toLocaleString('pt-BR');
    allButtons.forEach(btn => btn.disabled = true);
    nextButton.disabled = false;
}

nextButton.onclick = getRandomQuestion;

helpUniversitariosBtn.onclick = () => {
    if (ajudaUniversitarios > 0) {
        ajudaUniversitarios--;
        let q = questions[currentQuestionIndex];
        alert("👨‍🎓 Os universitários acham que a resposta é: " + q.options[q.answer]);
        helpUniversitariosBtn.textContent = `👨‍🎓 Universitários (${ajudaUniversitarios})`;
    } else {
        alert("Você já usou todas as ajudas dos universitários!");
    }
};

helpDicaBtn.onclick = () => {
    if (ajudaDica > 0) {
        ajudaDica--;
        let q = questions[currentQuestionIndex];
        alert("💡 Dica: " + q.hint);
        helpDicaBtn.textContent = `💡 Dica (${ajudaDica})`;
    } else {
        alert("Você já usou todas as dicas!");
    }
};

helpPularBtn.onclick = () => {
    if (ajudaPular > 0) {
        ajudaPular--;
        alert("⏭️ Você pulou a pergunta!");
        helpPularBtn.textContent = `⏭️ Pular (${ajudaPular})`;
        getRandomQuestion();
    } else {
        alert("Você já usou seu pulo!");
    }
};

window.onload = startGame;
