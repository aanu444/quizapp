const question=document.querySelector("#question-set");
const choices=Array.from(document.querySelectorAll('.choices'));
let quesStart=document.querySelector("#start");
let quesEnd=document.querySelector("#end");
const score=document.querySelector("#score");

let currentQuestion={};
let acceptingAnswers=true;
let scoreTable=0;
let questionCounter=0;
let availableQuestions=[];


let questions=[{
    question:"What year was I born?",
    choice1:"1995",
    choice2:"1992",
    choice3:"1990",
    choice4:"1996",
    answer:1
},
{
    question:"What is my favourite colour?",
    choice1:"Brown",
    choice2:"Peach",
    choice3:"Pink",
    choice4:"Purple",
    answer:3
},
{
    question:"What is my ideal dream in life?",
    choice1:"To make money",
    choice2:"To be successful",
    choice3:"To live a content life with my family",
    choice4:"To have more than one child",
    answer:3
},
{
    question:"Who is my ideal man",
    choice1:"A guy with packs",
    choice2:"A guy with money",
    choice3:"A guy with sense",
    choice4:"A man who values me",
    answer:4
},
{
    question:"Who is my bestfriend?",
    choice1:"Deborah Ketiku",
    choice2:"Lauretta Osubour",
    choice3:"Christabel Kadiri",
    choice4:"I don't do best friends",
    answer:4
},
{
    question:"Mommy or daddy's girl",
    choice1:"Mommy's girl",
    choice2:"Daddy's girl",
    choice3:"Both",
    choice4:"None",
    answer:1
},
{
    question:"When did I start using glasses? ",
    choice1:"12",
    choice2:"6",
    choice3:"10",
    choice4:"18",
    answer:3
},
{
    question:"Which country have I not travelled to?",
    choice1:"USA",
    choice2:"Dubai",
    choice3:"Paris",
    choice4:"Togo",
    answer:1
}

];

const SCORE_POINTS=10;
const MAX_QUESTIONS=8;

startGame = () =>{
    questionCounter=0;
    scoreTable=0;
    availableQuestions=[...questions];
    getNewQuestion();
}

getNewQuestion =() =>{
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore", scoreTable);

        return window.location.assign("end.html");
    }

    questionCounter++;
    quesStart.innerText=questionCounter;
    quesEnd.innerText=MAX_QUESTIONS;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion=availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice =>{
        const number = choice.dataset['number'];
        choice.innerText=currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers=true;
}

choices.forEach(choice =>{
    choice.addEventListener("click", e =>{
        if (!acceptingAnswers) return;
        acceptingAnswers=false;
        const selectedChoice=e.target;
        const selectedAnswer=selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === "correct"){
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.classList.add(classToApply);

        setTimeout(()=>{
            selectedChoice.classList.remove(classToApply)
            getNewQuestion();
        }, 1000);

    })
})

incrementScore=num =>{
    scoreTable += num;
    score.innerText = scoreTable;
}

startGame();