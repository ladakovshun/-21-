function startGame() {
  const playerName = document.getElementById("playerName").value;

  if (!playerName) {
    alert("Введіть ім'я!");
    return;
  }

  
  const cardValues = [6, 7, 8, 9, 10, 2, 3, 4, 11];
  

  function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cardValues.length);
    return cardValues[randomIndex];
  }

  function getCardImageFilename(cardValue) {
    switch (cardValue) {
      case 2:
        return '2.png';
      case 3:
        return '3.png';
      case 4:
        return '4.png';
      case 6:
        return '6.png';
      case 7:
        return '7.png';
      case 8:
        return '8.png';
      case 9:
        return '9.png';
      case 10:
        return '10.png';
      case 11:
        return '11.png';
      default:
        return 'back.png';
    }
  }

  function createCardImageElement(cardValue, folder) {
    const cardImage = document.createElement('img');
    cardImage.src = `${folder}/${getCardImageFilename(cardValue)}`;
    cardImage.alt = `Card ${cardValue}`;
    cardImage.className = 'card';
    return cardImage;
  }

  let playerScore = 0;
  let computerScore = 0;
  let rounds = 3;

  const playerCardsContainer = document.getElementById('playerCards');
  const computerCardsContainer = document.getElementById('computerCards');

  playerCardsContainer.innerHTML = '';
  computerCardsContainer.innerHTML = '';

  for (let i = 0; i < rounds; i++) {
    const playerCard = getRandomCard();
    const computerCard = getRandomCard();

    playerCardsContainer.appendChild(createCardImageElement(playerCard, 'playerCards'));
    computerCardsContainer.appendChild(createCardImageElement(computerCard, 'computerCards'));

    playerScore += playerCard;
    computerScore += computerCard;
  }
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `<p>Рахунок ${playerName}': ${playerScore}</p>
                             <p>Рахунок компютера: ${computerScore}</p>
                             <p>${playerScore > computerScore ? 'Ти переміг!' : 'Переміг компютер!'}</p>`;
}
