const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById('question-container')

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

}
function selectAnswer(){

}

function returnGrade(){

}

const questions = [
    {
        question: 'what does JS stand for?',
        answers:  [
        { text: 'javascript', correct: true}
        { text: 'jobs suck', correct:false}
        { text: 'jorgan sorgan', correct:false}
        { text: 'jeez sally', correct: false}
        ]
    }
]