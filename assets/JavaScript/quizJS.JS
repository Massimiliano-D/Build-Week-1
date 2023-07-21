const answer = document.getElementById("answer");
const quest = document.getElementById("question");
let contaRisp = 0;

//array con le risposte
let risposte = [];

// array con le domande da rispondere

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

questions = mischiaArray(questions);

function inizia() {
  // se le domande sono finite
  if (risposte.length == questions.length) {
    console.log(risposte);
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let percentualeSuccesso = calcolaPercentualeTrue();
    console.log(percentualeSuccesso);
    let risultato = document.getElementById("answer");
    let risultEsame = " hai passato l'esame!";
    let risultEsameDue = "complimenti!";
    const metàLunghezza = questions.length / 2;
    // Verifichiamo se percentualeSuccesso.trueCount è minore della metà della lunghezza di questions
    if (percentualeSuccesso.trueCount < metàLunghezza) {
      risultEsame = "non hai passato l'esame!";
      risultEsameDue = "riprova!";
    }
    risultato.outerHTML =
      ` <div class="all">
<main>
  <nav>
    <h1><strong>Results</strong></h1>
    <p>The summary of your answers:</p>
  </nav>
  <div id="content">
    <h2 class="lft">Correct <br /><strong>` +
      percentualeSuccesso.percentualeTrue +
      `%</strong> <br /><span class="titoletto">` +
      percentualeSuccesso.trueCount +
      `/` +
      questions.length +
      ` questions</span></h2>

    <div id="TORTA">
      <div class="resultText">
      <h3 class="internoh5">
      ` +
      risultEsame +
      ` <br />
      <strong class="congrat">` +
      risultEsameDue +
      `</strong>
    </h3>
   
        
      </div>
    </div>

    <h2 class="rgt">
      Wrong <br /><strong>` +
      percentualeSuccesso.percentualeFalse +
      `%</strong> <br />
      <span class="titoletto">` +
      percentualeSuccesso.falseCount +
      `/` +
      questions.length +
      ` questions</span>
    </h2>
  </div>
  <div id="footer"><button>RATE US</button></div>
</main>
</div>`;
  } else {
    //altrimenti pusha la prossima domanda
    prossimaDomanda(questions[contaRisp]);
    contaRisp++;
  }
}

function prossimaDomanda(obj) {
  answer.textContent = obj.question;
  let risposte = [];
  console.log(risposte);
  risposte.push({ risposta: obj.correct_answer, correct: true });
  console.log(risposte);
  let br = document.createElement("br");
  answer.appendChild(br);
  for (let i = 0; i < obj.incorrect_answers.length; i++) {
    risposte.push({ risposta: obj.incorrect_answers[i], correct: false });
  }
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
    });
    answer.appendChild(bottone);
  }
}

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
const pulisciTimer = () => {
  seconds = 60;
};
