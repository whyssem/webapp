let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
const url = "https://api.quotable.io/random";

let getQuote = async () => {
    try {
        const response = await fetch(url);
        console.log(response)
        const item = await response.json();
        quote.innerText = `"${item.content}"`;
        author.innerText = `- ${item.author}`;
    } catch (error) {
        console.error("Erreur lors de la récupération de la citation :", error);
        quote.innerText = "Une erreur est survenue. Veuillez réessayer.";
        author.innerText = "";
    }
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
