// Function to roll a dice with a given number of sides
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

// Add click event listeners to all dice icons
document.querySelectorAll('.dice-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const sides = parseInt(icon.getAttribute('data-sides'));
        let counter = 0;
        let interval = setInterval(() => {
            if (counter < 20) {
                const result = rollDice(sides);
                document.getElementById('result').innerText = `Rolling... ${result}`;
                counter++;
            } else {
                clearInterval(interval);
                const finalResult = rollDice(sides);
                document.getElementById('result').innerText = `Rolled a D${sides}: ${finalResult}`;
                
                // Add specific actions for nat 1 and nat 20 on D20
                if (sides === 20) {
                    if (finalResult === 1) {
                        alert("Knight slashes the die!");
                        // Add your knight slash animation logic here
                    } else if (finalResult === 20) {
                        alert("Wizard ignites the die!");
                        // Add your wizard ignite animation logic here
                    }
                }
            }
        }, 100);
    });
});
