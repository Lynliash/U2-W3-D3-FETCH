const libraryUrl = `https://striveschool-api.herokuapp.com/books`;

const createLibrary = function () {
  fetch(libraryUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupero della libreria");
      }
    })
    .then((data) => {
      console.log("libri", data);
      const filmTitle = data[0].title;
      const filmImg = data[0].img;
      const filmPrice = data[0].price;

      const row = document.getElementById("books-row");

      for (let i = 0; i < data.length; i++) {
        // console.log("Titolo", data[i].title);
        // console.log("Immagine", data[i].img);
        // console.log("Prezzo", data[i].price);

        row.innerHTML += `
  <div class="col-md-6 col-sm-12 col-lg-3 mb-4 px-4">
    <div class="card h-100" style="width: 100%;">
      <img src="${data[i].img}" class="card-img-top resize" alt="copertina film">
      <div class="card-body text-center">
        <h5 class="card-title book-title">${data[i].title}</h5>
        <p class="card-text text-danger fw-bold">${data[i].price} €</p>
        <a href="#" class="btn btn-primary remove">Scarta</a>
      </div>
    </div>
  </div>
`;
      }
    })
    .catch((err) => {
      console.log("errore", err);
    });
};

createLibrary();

const removeButton = function () {
  const row = document.getElementById("books-row");

  row.addEventListener("click", (e) => {
    console.log(e.target);
    // e.target mi ritorna l'elemento del DOM su cui sto cliccando
    if (e.target.classList.contains("remove")) {
      const card = e.target.closest(".col-md-6");
      card.remove();
    }
  });
};

removeButton();
