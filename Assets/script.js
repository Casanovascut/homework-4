const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
var correctAnswers = 0

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click',startQuiz)

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
    setStatusClass(document.body, correct)
    console.log(correctAnswers)

        
    
}

function setStatusClass(element,correct){
    if (correct){
        correctAnswers++
    }
}

function returnGrade(){

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
    }
]