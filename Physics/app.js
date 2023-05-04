const quizData = [{
    question: "A horse-shoe magnet is an example of ________.Natural magnet",
    a: "Artificial magnet",
    b: "Natural magnet",
    c: "Neither natural nor artificial",
    d: "None of these options",
    correct: "a",
},
{
    question: " A freely suspended magnet aligns in which direction?",
    a: "South-west",
    b: "East-west",
    c: "North-south",
    d: "North-west",
    correct: "c",
},
{
    question: "Which among the following materials display higher magnetic susceptibility",
    a: "Ferromagnetic material",
    b: "Paramagnetic material",
    c: "Diamagnetic material",
    d: "None of the above",
    correct: "a",
},
{
    question: "A permanent magnet has the capacity to attract",
    a: "All substances",
    b: "Some substances",
    c: "Only ferromagnetic substances",
    d: "None of the above",
    correct: "c",
},
{
    question: "The SI unit of magnetic flux is",
    a: "Dyne",
    b: "Tesla",
    c: "Weber",
    d: "Ohm",
    correct: "c",
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