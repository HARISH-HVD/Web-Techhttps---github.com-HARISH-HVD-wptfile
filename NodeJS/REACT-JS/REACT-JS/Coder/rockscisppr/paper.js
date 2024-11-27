let player1_score = 0;
let player2_score = 0;

let playerChoices = {
    player1: null,
    player2: null,
};

// Rules for the game
let choices_object = {
    'rock': { 'rock': 'draw', 'scissor': 'win', 'paper': 'lose' },
    'scissor': { 'rock': 'lose', 'scissor': 'draw', 'paper': 'win' },
    'paper': { 'rock': 'win', 'scissor': 'lose', 'paper': 'draw' }
};

// Function to handle player choice
function makeChoice(choice, player) {
    playerChoices[player] = choice;

    if (player === 'player1') {
        // Show Player 2's choice section
        document.getElementById('player1_section').style.display = 'none';
        document.getElementById('player2_section').style.display = 'block';
    } else if (player === 'player2') {
        // Both players have chosen, calculate result
        determineWinner();
    }
}

// Function to determine the winner
function determineWinner() {
    const { player1, player2 } = playerChoices;

    if (!player1 || !player2) return; // Ensure both players have made choices

    let resultText = '';

    switch (choices_object[player1][player2]) {
        case 'win':
            resultText = "Player 1 Wins!";
            player1_score++;
            break;
        case 'lose':
            resultText = "Player 2 Wins!";
            player2_score++;
            break;
        default:
            resultText = "It's a Draw!";
            break;
    }

    // Update scores and display result
    document.getElementById('player1_score').innerText = player1_score;
    document.getElementById('player2_score').innerText = player2_score;
    document.getElementById('result').innerText = resultText;

    // Reset for the next round
    resetGame();
}

// Reset game for the next round
function resetGame() {
    playerChoices = { player1: null, player2: null };
    document.getElementById('player1_section').style.display = 'block';
    document.getElementById('player2_section').style.display = 'none';
    document.getElementById('result').innerText = '';
}
