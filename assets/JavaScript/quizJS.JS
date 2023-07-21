let questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// const startTime = () => {
//   let seconds = 60;
//   let torta = document.getElementById("torta");

//   let timer = setInterval(function () {
//     seconds--;
//     torta.innerText = seconds;
//     if (seconds <= 0) {
//       console.log(seconds);
//       clearInterval(timer);
//     }
//   }, 1000);
// };
<<<<<<< Updated upstream
let indexOfUsedQuestions = [];
let indexOfFooter = [];
for (let i = 1; i <= 10; i++) {
  indexOfFooter.push(i);
}
console.log(indexOfFooter);
const removeFooter = () => {
  let h3 = document.querySelectorAll("h3");
  h3[0].remove();
};
function generateRandomQuestion() {
  // Controlla se sono state esaurite tutte le domande disponibili
  if (indexOfUsedQuestions.length === questions.length) {
    alert("Hai esaurito tutte le domande disponibili!");
    return;
  }
<<<<<<< Updated upstream

  // Genera un indice casuale per selezionare una domanda non ancora utilizzata
  let randomQuestionIndex;
  do {
    randomQuestionIndex = getRandomQuestionIndex();
  } while (indexOfUsedQuestions.includes(randomQuestionIndex));

  indexOfUsedQuestions.push(randomQuestionIndex); // Aggiungi l'indice alla lista delle domande utilizzate

  const randomQuestion = questions[randomQuestionIndex];
  const correctAnswer = randomQuestion.correct_answer;
  const incorrectAnswers = randomQuestion.incorrect_answers.flat();

  let h1 = document.querySelector("h1");
  h1.innerText = randomQuestion.question;

  createButtons(correctAnswer, incorrectAnswers);
}
generateRandomQuestion();
function removeAllButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => button.remove());
}
let num = 0;
const numQuestions = () => {
  let footer = document.querySelector("footer");
  let h3 = document.createElement("h3");
  num += 1;
  footer.appendChild(h3);
  let allH3 = document.querySelectorAll("h3");
  h3.innerHTML = `QUESTION <span>${num}</span>/10`;
  let span = document.querySelector("span");
  // span.innerHTML = `${num}`;
  console.log(num);
};
function createButtons(correctAnswer, incorrectAnswers) {
  removeAllButtons(); // Rimuovi tutti i bottoni precedenti prima di creare quelli nuovi

  const totalOptions = incorrectAnswers.length + 1;
  const numButtons = correctAnswer === "True" || correctAnswer === "False" ? 2 : totalOptions;
  let div = document.getElementById("answer");
  for (let i = 0; i < numButtons; i++) {
    const button = document.createElement("button");
    button.innerText = i === 0 ? correctAnswer : incorrectAnswers[i - 1];
    div.appendChild(button);
    let buttons = document.querySelectorAll("button");
    buttons[i].addEventListener("click", (event) => {
      generateRandomQuestion();
      numQuestions();
      removeFooter();
=======
  console.log(risposte);
  risposte = mischiaArray(risposte);
  for (let i = 0; i < risposte.length; i++) {
    //creo un bottone dinamicamente
    let bottone = document.createElement("button");
    bottone.textContent = risposte[i].risposta;
    bottone.classList.add("bottoni");
    bottone.addEventListener("click", function () {
      const obj = risposte[i];
      rispondi(obj);
      pulisciTimer();
>>>>>>> Stashed changes
    });
  }
}

<<<<<<< Updated upstream
const startTime = () => {
  let seconds = 60;
  let torta = document.getElementById("torta");
=======
// funzione per mischiare gli ogetti contenuti nel array
function mischiaArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function rispondi(test) {
  risposte.push(test);
  inizia();
}

// Funzione per calcolare la percentuale di 'true' rispetto agli elementi totali
function calcolaPercentualeTrue() {
  // Contatori per 'true' e 'false'
  let trueCount = 0;
  let falseCount = 0;

  // Itera sugli oggetti dell'array
  for (const oggetto of risposte) {
    if (oggetto.correct === true) {
      trueCount++;
    } else {
      falseCount++;
    }
  }

  // Calcola la percentuale di 'true'
  const percentualeTrue = (trueCount / (trueCount + falseCount)) * 100;
  // Calcola la percentuale di 'false'
  const percentualeFalse = (falseCount / (trueCount + falseCount)) * 100;

  return { percentualeTrue, percentualeFalse, trueCount, falseCount };
}

//avvio il codice
prossimaDomanda(questions[0]);
let seconds = 60;
const startTime = (event) => {
  let torta = document.querySelector("div p");
>>>>>>> Stashed changes

  let timer = setInterval(function () {
    seconds--;
    torta.innerText = seconds;
    if (seconds <= 0) {
      console.log(seconds);
      clearInterval(timer);
      contaRisp += 1;
      prossimaDomanda(questions[contaRisp]);
      risposte.push({ risposta: questions[0].incorrect_answers, correct: false });
      pulisciTimer();
      startTime();
    }
  }, 1000);
};
startTime();
<<<<<<< Updated upstream
numQuestions();
=======
// startTime();
// numQuestions();
>>>>>>> Stashed changes
=======
const pulisciTimer = () => {
  seconds = 60;
};
>>>>>>> Stashed changes
