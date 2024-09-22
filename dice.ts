document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("diceCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    const diceSize = 100;
    const diceX = (canvas.width - diceSize) / 2;
    const diceY = (canvas.height - diceSize) / 2;

    // Function to draw a dice face with a given number
    function drawDice(number: number) {
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.rect(diceX, diceY, diceSize, diceSize);
            ctx.stroke();

            ctx.font = "30px Arial";
            ctx.fillStyle = "blue";
            ctx.textAlign = "center";
        ctx.fillText(number.toString(), diceX + diceSize / 2, diceY + diceSize / 2 + 10);
        }
    }

    // Function to generate a random number between 1 and 6
    function rollDice(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Event listener for space key press
    document.addEventListener("keydown", (event) => {
        if (event.code === "Space") {
            const randomNumber = rollDice();
            drawDice(randomNumber);
        }
    });

    // Draw initial dice face
    if (ctx) {
        drawDice(1);
    }
});