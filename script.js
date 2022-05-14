

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
     showQuestions(0);
     queCounter(1);
}

let queCount = 0;
let queNumb = 1;

const nextBtn = document.querySelector(".next-btn")

nextBtn.onclick = ()=>{
    if(queCount < questions.length - 1){
        queCount++;
        queNumb++;
        showQuestions(queCount);
        queCounter(queNumb);
    }else{
        console.log("Questions Completed");
    }
}

function showQuestions(index){
    const queText = document.querySelector(".question-text");
    const optionList = document.querySelector(".option-list");
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
    if (userAns == correctAns){
        answer.classList.add("correct");
        console.log("ANSWER IS CORRECT");
    }else{
        console.log("answer is wrong");
    }
}







function queCounter(index){
    const bottomQueCounter  = quizBox.querySelector(".total-questions");
let totalQueTag = '<span><p>'+ index +'</p><p>/</p><p>'+ questions.length +'</p>Questions</span>';
bottomQueCounter.innerHTML = totalQueTag;
}