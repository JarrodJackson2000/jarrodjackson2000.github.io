function rollDice() {
  var diceSelector = document.getElementById("dice_selector");
  var selectedDice = diceSelector.value;

  var numberOfSides;

  if (selectedDice == 6) {
    numberOfSides = 6;
  } else if (selectedDice == 10) {
    numberOfSides = 10;
  }

  // Roll the dice (random number between 1 and numberOfSides)
  var diceResult = Math.floor(Math.random() * numberOfSides) + 1;

  var displayBox = document.getElementById("displayBox");
  var displayText = document.getElementById("displayText");
  displayText.textContent = diceResult;
}
