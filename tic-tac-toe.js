document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";  // Starts with player "X"
    let gameState = Array(9).fill(null); // Array to keep track of game state

    // Add the "square" class to each square div
    squares.forEach((square, index) => {
        square.classList.add("square");

        // Add click event to each square
        square.addEventListener("click", () => {
            // If the square is already occupied, exit the function
            if (gameState[index]) return;

            // Set the innerHTML to currentPlayer ("X" or "O")
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer); // Apply the appropriate class for styling
            gameState[index] = currentPlayer; // Update the game state array

            // Switch the player
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });
    });
});