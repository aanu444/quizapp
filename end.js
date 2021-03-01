const username= document.querySelector("#username");
const saveScoreBtn = document.querySelector("#savebtn");
const finalScore = document.querySelector("#result");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 8;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () =>{
    saveScoreBtn.disabled = !username.value;
})

saveHighScore= e =>{
    e.preventDefault();

    const score = {
        score:mostRecentScore,
        name:username.value
    }

    highScores.push (score);

    highScores.sort((a,b) => {
        return b.score - a.score;
    })

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("index.html");
}