const quizData = [{
    question: "The river Godavari is often referred to as Vridha Ganga because",
    a: "It is the older river of India",
    b: "Of its large size and extent among the peninsular rivers",
    c: "There are a fairly large number of pilgrimage centres situated on its banks",
    d: "Its length is nearly the same as that of the river Ganges",
    correct: "b",
},
{
    question: "The scarcity or crop failure of which of the following can cause a serious edible oil crisis in India?",
    a: "Coconut",
    b: "Groundnut",
    c: "Linseed",
    d: "Mustard",
    correct: "b",
},
{
    question: "What is the capital city of Australia?",
    a: "Sydney",
    b: "Canberra",
    c: "Melbourne",
    d: "Perth",
    correct: "b",
},
{
    question: "What is the highest mountain peak in Africa?",
    a: "Mount Kilimanjaro",
    b: "Mount Everest",
    c: "Mount McKinley",
    d: "Mount Aconcagua",
    correct: "a",
},
{
    question: "Which continent is the largest by land area?",
    a: "Asia",
    b: "Africa",
    c: "North America",
    d: "South America",
    correct: "a",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);