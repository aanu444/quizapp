const highScoresList=document.querySelector("#highscoreslist");
const highscores =JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML=highscores.map(score=>{
    return `<li class="highscore">${score.name} - ${score.score}</li>`;
}).join('');