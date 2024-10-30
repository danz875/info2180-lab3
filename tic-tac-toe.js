document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");

    // Add the "square" class to each square div
    squares.forEach((square) => {
        square.classList.add("square");
    });
});