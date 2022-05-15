

const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitBtn = document.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz-box");
const timeCount = quizBox.querySelector(".timer .timer-sec");
const optionList = document.querySelector(".option-list");


startBtn.onclick = () =>{
    infoBox.classList.add("activateInfo");
}

exitBtn.onclick = () =>{
    infoBox.classList.remove("activateInfo");
}

continueBtn.onclick = () =>{
    infoBox.classList.remove("activateInfo");
    quizBox.classList.add("activateQuiz");
     showQuestions(0);
     queCounter(1);
     startTimer(59);
}

let queCount = 0;
let queNumb = 1;
let counter;
let userScore = 0;


const nextBtn = document.querySelector(".next-btn");
const resultBox = document.querySelector(".result-box");
const restartQuiz = resultBox.querySelector(".buttons submit-btn")

nextBtn.onclick = ()=>{
    if(queCount < questions.length - 1){
        queCount++;
        queNumb++;
        showQuestions(queCount);
        queCounter(queNumb);
    }else{
        console.log("Questions Completed");
        showResultBox();
    }
}

function showQuestions(index){
    const queText = document.querySelector(".question-text");
    let queTag = '<span> '+ questions[index].numb + "."+ questions[index].question + '</span>';
    let optionTag = '<div class="option"> '+ questions[index].options[0] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    +'<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    +'<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
    const option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', "optionSelected(this)");
    }
}

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    let allOptions = optionList.children.length;
    if(userAns == correctAns ){
        answer.classList.add("correct");
        console.log("answer right")
    }else{
        answer.classList.add("incorrect");
        console.log("answer wrong")
    }
    console.log(correctAns)

    for( let i = 0; i< allOptions; i++){
        if(optionList.children[i].textContent == correctAns){
            optionList.children[i].setAttribute('class', "option correct")
        };
    }
    
    for( let i = 0; i< allOptions; i++){
        optionList.children[i].classList.add("disabled");
    }

}

function  showResultBox(){
    infoBox.classList.remove("activateInfo");
    quizBox.classList.remove("activateQuiz");
    resultBox.classList.add("activateResults");
}

function startTimer(time){
    counter= setInterval(timer,1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 0){
            timeCount.textContent = "00"
        }
    }

}







function queCounter(index){
    const bottomQueCounter  = quizBox.querySelector(".total-questions");
let totalQueTag = '<span><p>'+ index +'</p><p>/</p><p>'+ questions.length +'</p>Questions</span>';
bottomQueCounter.innerHTML = totalQueTag;
}