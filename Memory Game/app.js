document.addEventListener("DOMContentLoaded", () => {
  // card options
  const cardArray = [
    {
      name: "ace",
      img: "images/ace.png",
    },
    {
      name: "ace",
      img: "images/ace.png",
    },
    {
      name: "pik",
      img: "images/pik.png",
    },
    {
      name: "pik",
      img: "images/pik.png",
    },
    {
      name: "prince",
      img: "images/prince.png",
    },
    {
      name: "prince",
      img: "images/prince.png",
    },
    {
      name: "queen",
      img: "images/queen.jpeg",
    },
    {
      name: "queen",
      img: "images/queen.jpeg",
    },
    {
      name: "seven",
      img: "images/seven.png",
    },
    {
      name: "seven",
      img: "images/seven.png",
    },
    {
      name: "blank",
      img: "images/blank.png",
    },
    {
      name: "blank",
      img: "images/blank.png",
    },
  ];

  // sortuje randomowo tablicę kart
  cardArray.sort(() => 0.5 - Math.random());

  // wybieramy div, który będzie tablicą
  const grid = document.querySelector(".grid");
  // wybieramy span, który będzie wynikiem
  const resultDisplay = document.querySelector("#result");
  // tworzymy tablice z wybranymi kartami oraz tablice z id tych kart
  let cardsChosen = [];
  let cardsChosenId = [];
  // tworzymy tablice z kartami wygranymi
  const cardsWon = [];

  //   tworzymy plansze do gry
  function createBoard() {
    // wykonujemy iteracje po tablicy kart
    for (let card in cardArray) {
      // za pomocą zmiennej counter uzyskamy indeks karty
      let counter = card;
      // tworzymy element (tag) img
      card = document.createElement("img");
      // nadajemy im atrybuty src i data-id oraz podajemy źródło dla src i dla data-id indeks
      card.setAttribute("src", "images/back.png");
      card.setAttribute("data-id", counter);
      // dodajemy wydarzenie do klikniętej karty
      card.addEventListener("click", flipcard);
      // do naszej planszy dodajemy karty
      grid.appendChild(card);
    }
    console.log(cardArray[2]);
  }
  // kolejnym etapem jest stworzenie funkcji, która odwróci nam karty

  // csprawdzamy czy karta pasuje do drugiej karty
  function checkForMatch() {
    // wybieramy wszystkie karty
    let cards = document.querySelectorAll("img");
    console.log(cards);
    // z tablicy cardsChosenId wybieramy pojedynczo dwa elementy
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    // jeśli pierwsza karta z tablicy cardsChosen = druga karta z tablicy cardsChosen to alert 'znalazłeś parę' i ustawiamy atrybut src na czystą kartę
    // oraz wrzucamy te karty do tablicy kart wygranych cardsWon
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match  ");
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      cardsWon.push(cardsChosen);
    }
    // jeśli nie trafimy pary to odwracamy z powrotem karty oraz dajemy alert zeby próbować dalej
    else {
      cards[optionOneId].setAttribute("src", "images/back.png");
      cards[optionTwoId].setAttribute("src", "images/back.png");
      alert("Sorry, try again");
    }
    // przechowujemy tu referencje do tablic cardsChosen i cardsChosenId
    cardsChosen = [];
    cardsChosenId = [];
    // zmieniamy wynik (rezultat) na długość tablicy kart wygranych
    resultDisplay.textContent = cardsWon.length;
    // jeśli tablica kart wygranych będzie równa połowie tablicy wszystkich kart to zmieniamy wynik na "znalazłeś wszystkie" i odwracamy karty z powrotem
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations. You found them all";
      cards.forEach((el) => {
        el.setAttribute("src", "images/back.png");
      });
    }
  }

  // flipcard
  function flipcard() {
    // dostajemy się do ID konkretnej karty
    let cardId = this.getAttribute("data-id");
    // nastepnie wrzucamy jej nazwę (name) do tablicy kart wybranych
    cardsChosen.push(cardArray[cardId].name);
    // oraz do tablic z ID kart wybranych
    cardsChosenId.push(cardId);
    // zmieniamy wartość `trybutu src na ten wybrany z data-id
    this.setAttribute("src", cardArray[cardId].img);
    // jesli długość tablicy kart wybranych równa się 2 to czekamy chwilę i wywołujemy funkcję sprawdzająca dopasowanie kart
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
    console.log(cardsChosen);
    console.log(cardsChosenId);
  }

  createBoard();
});
