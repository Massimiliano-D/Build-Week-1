
const stars = document.querySelectorAll(".stars");
stars.forEach((star, index) => {
  star.onclick = () => selection(index);
});

function selection(clickedIndex) {
  for (let i = 0; i <= clickedIndex; i++) {
    stars[i].classList.add("selected");
  }
}

//se un utente preme una stella tutte le stelle precendenti a quella stella si devono illuminare insieme ad essa
//step1 creo un ciclo per ciclare l'array stars
//step2 gli dobbiamo porre una condizione
//assegnare la classe click
