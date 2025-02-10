let words = ["i", "like", "to", "code"]
const button = document.getElementById("generateBtn")

function generateSentence() {
    let sentence = ""
    const element = document.getElementById("output")

    for(let word of words) {
        sentence = sentence + " " + word
    }

    element.innerHTML = sentence
}
button.addEventListener("click", generateSentence)
