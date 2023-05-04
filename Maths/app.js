const quizData = [{
    question: " The decimal expansion of 22/7  is",
    a: "Terminating",
    b: "Non-terminating and repeating",
    c: "Non-terminating and Non-repeating",
    d: "None of the above",
    correct: "b",
},
{
    question: "For some integer n, the odd integer is represented in the form of:",
    a: "n",
    b: "n + 1",
    c: "2n + 1",
    d: "2n",
    correct: "c",
},
{
    question: "HCF of 26 and 91 is:",
    a: "15",
    b: "13",
    c: "19",
    d: "11",
    correct: "b",
},
{
    question: "Which of the following is not irrational?",
    a: "(3 + √7)",
    b: "(3 – √7)",
    c: " (3 + √7) (3 – √7)",
    d: "3√7",
    correct: "c",
},
{
    question: "The addition of a rational number and an irrational number is equal to:",
    a: "Rational number",
    b: "Irrational number",
    c: "Both",
    d: "None of the above",
    correct: "b",
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