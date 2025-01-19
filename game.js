const word = "UNITY"; // Replace with your assigned word
let guessedWord = Array(word.length).fill("_");
let score = 0;
let lives = 3;

document.getElementById("submit-button").addEventListener("click", () => {
    const input = document.getElementById("letter-input").value.toUpperCase();
    document.getElementById("letter-input").value = "";

    if (input.length !== 1) {
        alert("Please enter a single letter.");
        return;
    }

    if (word.includes(input)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === input) {
                guessedWord[i] = input;
            }
        }
        score += 20;
        document.getElementById("score").textContent = `Score: ${score}`;
        document.getElementById("word-display").textContent = guessedWord.join(" ");

        if (!guessedWord.includes("_")) {
            alert("Congratulations! You guessed the word!");
        }
    } else {
        lives--;
        document.getElementById("lives").textContent = `Lives: ${"❤️".repeat(lives)}`;
        if (lives === 0) {
            alert("Game Over! Better luck next time.");
        }
    }
});

document.getElementById("reset-button").addEventListener("click", () => {
    guessedWord = Array(word.length).fill("_");
    score = 0;
    lives = 3;
    document.getElementById("score").textContent = "Score: 0";
    document.getElementById("lives").textContent = "Lives: ❤️❤️❤️";
    document.getElementById("word-display").textContent = guessedWord.join(" ");
});
