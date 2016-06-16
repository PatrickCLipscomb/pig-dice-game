var playerTurn = 100;
var playerOneTally = 0;
var playerTwoTally = 0;
var playerOneTempTally = 0;
var playerTwoTempTally = 0;

var playerOneTurn = function() {
  var tempRoll = 0;
  if (playerTurn.toString().charAt(1) === '0') {
    $('#playerOneNote').empty();
    tempRoll = Math.ceil(6 * Math.random());
    if (tempRoll === 1) {
      playerTurn = 110
      playerOneTempTally = 0;
      $('#playerTwoNote').text("You rolled a 1!! Player 2's turn now.")
    } else {
      playerOneTempTally += tempRoll;
      $('#playerOneNote').text('+' + tempRoll);
    }
  } else {
    playerTurn = 110
  }
}

var playerTwoTurn = function() {
  var tempRoll = 0;
  if (playerTurn.toString().charAt(2) === '0') {
    $('#playerTwoNote').empty();
    var tempRoll = Math.ceil(6 * Math.random());
    if (tempRoll === 1) {
      playerTurn = 101
      playerTwoTempTally = 0;
      $('#playerOneNote').text("You rolled a 1!! Player 1's turn now.")
    } else {
      playerTwoTempTally += tempRoll;
      $('#playerTwoNote').text('+' + tempRoll);
    }
  } else {
    playerTurn = 101
  }
}

var hold = function() {
  if (playerTurn.toString().charAt(1) === '0') {
    playerTurn = 110;
  } else if (playerTurn.toString().charAt(2) === '0') {
    playerTurn = 101;
  } else {
    console.log('bad one');
  }
  playerOneTempTally = 0;
  playerTwoTempTally = 0;
  $('#playerOneNote').text('');
  $('#playerTwoNote').text('');
  scoreChecker();
}

var display = function() {
  $('span#playerOneScoreOutput').text(playerOneTally);
  $('span#playerOneTempScoreOutput').text("Current Tally: " + playerOneTempTally);
  $('span#playerTwoScoreOutput').text(playerTwoTally);
  $('span#playerTwoTempScoreOutput').text("Current Tally: " + playerTwoTempTally);
}

var scoreChecker = function() {
  debugger;
  if (playerOneTally >= 100) {
    $('#winNote').text('Player 1 is the winner!')
    resetGame();
  } else if (playerTwoTally >= 100) {
    $('#winNote').text('Player 2 is the winner!')
    resetGame();
  }
}

var resetGame = function() {
  playerOneTally = 0;
  playerTwoTally = 0;
  playerOneTempTally = 0;
  playerTwoTempTally = 0;
  playerTurn = 100;
}

$(document).ready(function() {
  $('form#playerOneForm').submit(function(event) {
    event.preventDefault();
    playerOneTurn();
    scoreChecker();
    display();
  })
  $('form#playerTwoForm').submit(function(event) {
    event.preventDefault();
    playerTwoTurn();
    scoreChecker();
    display();
  })
  $('form#hold').submit(function(event) {
    event.preventDefault();
    playerOneTally += playerOneTempTally;
    playerTwoTally += playerTwoTempTally;
    hold();
    scoreChecker();
    display();
  })
});
