function changeGreeting() {
    document.getElementById("greeting").textContent = "Hello, Atlassian!";
}

async function fetchJoke() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
        const data = await response.json();
        document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
    } catch (error) {
        console.error("Error fetching joke:", error);
    }
}
