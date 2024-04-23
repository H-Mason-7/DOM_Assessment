const main = document.querySelector("main");

const jokeOne = "Why did the bike fall over? Because it was two tired";
const jokeTwo = "Why did the man get hit by a bike every day? He was stuck in a vicious cycle";
const jokeThree = "Why are bank tellers not allowed to ride bicycles? They tend to lose their balance";

const template = `
    <section>
        <h2 class = "header">My Jokes</h2>
        <ul>
            <li id = "firstJoke">${jokeOne}</li>
            <li id = "secondJoke">${jokeTwo}</li>
            <li id = "thirdJoke">${jokeThree}</li>
        </ul>
    </section>
`;

main.innerHTML = template;

const paragraph = document.createElement("p");
paragraph.textContent = "That's all folks!";

const body = document.querySelector("body");
body.appendChild(paragraph);