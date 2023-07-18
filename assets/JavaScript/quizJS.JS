const questions = [
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

let correctAnswer = [];
for (let i = 0; i < questions.length; i++) {
  correctAnswer.push(questions[i].correct_answer);
}
let incorrectAnswers = [];
for (let i = 0; i < questions.length; i++) {
  incorrectAnswers.push(questions[i].incorrect_answers);
}
console.log(incorrectAnswers);
let domande = [];
for (let i = 0; i < questions.length; i++) {
  domande.push(questions[i].question);
}

function createButtons(correctAnswer, incorrectAnswers) {
  const totalOptions = incorrectAnswers.length + 1;
  const numButtons = correctAnswer === "True" || correctAnswer === "False" ? 2 : totalOptions;

  for (let i = 0; i < numButtons; i++) {
    const button = document.createElement("button");
    button.innerText = i === 0 ? correctAnswer : incorrectAnswers[i - 1];
    document.body.appendChild(button);
    let buttons = document.querySelectorAll("button");
    buttons[i].addEventListener("click", generateRandomQuestion);
  }
}

// Genera un indice casuale per selezionare una domanda dall'array
function getRandomQuestionIndex() {
  return Math.floor(Math.random() * questions.length);
}
let indexOfUsedQuestions = [];

// Ottiene una domanda casuale e crea i bottoni corrispondenti
function generateRandomQuestion() {
  const randomQuestionIndex = getRandomQuestionIndex();
  const randomQuestion = questions[randomQuestionIndex];
  const correctAnswer = randomQuestion.correct_answer;
  const incorrectAnswers = randomQuestion.incorrect_answers.flat();
  let h1 = document.querySelector("h1");
  h1.innerText = randomQuestion.question;
  indexOfUsedQuestions.push(randomQuestionIndex);
  createButtons(correctAnswer, incorrectAnswers);
}
// console.log(indexOfUsedQuestions);
// Esegui la generazione di una domanda casuale
generateRandomQuestion();
const advanceQuestions = () => {
  const span = document.querySelector("span");

  for (let i = 0; i < 10; i++) {
    span.innerText = i + 1;
    break;
  }
};
