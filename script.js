

const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitBtn = document.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz-box");


startBtn.onclick = () =>{
    infoBox.classList.add("activateInfo");
}

exitBtn.onclick = () =>{
    infoBox.classList.remove("activateInfo");
}

continueBtn.onclick = () =>{
    infoBox.classList.remove("activateInfo");
    quizBox.classList.add("activateQuiz");
}

