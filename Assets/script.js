const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
let correctAnswers = 0

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click',startQuiz)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz(){
    startButton.classList.add('hide') 
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        
        
        button.dataset.correct = answer.correct
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    });
}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild){
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct == 'true'
    createGrade(correct)

    if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    } else {
        question.innerText = 'your grade is ' + correctAnswers*25+'%'
        question.style.color = "blue"
        startButton.innerText ='restart'
        startButton.classList.remove('hide')
        answerButtonElement.classList.add('hide')
    }
}



function createGrade(correct){
    if (correct){
        correctAnswers++
    }
}



const questions = [
    {
        question: 'what does JS stand for?',
        answers:  [
        { text: 'javascript', correct: true},
        { text: 'jobs suck', correct:false},
        { text: 'jorgan sorgan', correct:false},
        { text: 'jeez sally', correct: false}
        ]
    },
    {
        question: 'Do you like to code?',
        answers:  [
        { text: 'No', correct: false},
        { text: 'Maybe', correct:false},
        { text: 'I dont like anything', correct:false},
        { text: 'Yes!!', correct: true}
        ]
    },
    {
        question: 'is HTML considered a programming language?',
        answers:  [
        { text: 'No', correct: true},
        { text: 'Maybe', correct:false},
        { text: 'who cares', correct:false},
        { text: 'Yes!!', correct: false}
        ]
    },
    {
        question: 'is this quiz any good?',
        answers:  [
        { text: 'No', correct: false},
        { text: 'Maybe', correct:true},
        { text: 'It sucks', correct:false},
        { text: 'Yes!!', correct: false}
        ]
    }
]