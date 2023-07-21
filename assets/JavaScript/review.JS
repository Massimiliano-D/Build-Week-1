const stars = document.querySelectorAll(".stars");
stars.forEach((star, index) => {
  star.onclick = () => selection(index);
});

function selection(clickedIndex) {
  for (let i = 0; i <= clickedIndex; i++) {
    stars[i].classList.add("selected");
  }
}
