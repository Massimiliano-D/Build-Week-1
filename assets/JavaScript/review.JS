const stars = document.querySelectorAll(".stars");

// stars.forEach((star) => {
//   star.onclick = selection;
// });
let starI = 0;
function selection(event) {
  let div = document.getElementById("starsBox");
  for (let i = 0; i < stars.length; i++) {
    if (stars[i] === event.target) {
      console.log("ciao");
    } else {
      console.log("ciao2");
    }
  }
}

//se un utente preme una stella tutte le stelle precendenti a quella stella si devono illuminare insieme ad essa
//step1 creo un ciclo per ciclare l'array stars
//step2 gli dobbiamo porre una condizione
//assegnare la classe click
