const questions = {
    general: [
        {
            question: "What is the capital of India?",
            options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
            answer: "New Delhi"
        },
        {
            question: "Which is the largest ocean in the world?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "How many continents are there in the world?",
            options: ["5", "6", "7", "8"],
            answer: "7"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Mars"
        },
        {
            question: "Who wrote the national anthem of India?",
            options: ["Rabindranath Tagore", "Mahatma Gandhi", "Sarojini Naidu", "Bankim Chandra Chattopadhyay"],
            answer: "Rabindranath Tagore"
        },
        {
            question: "Which is the fastest land animal?",
            options: ["Lion", "Cheetah", "Tiger", "Leopard"],
            answer: "Cheetah"
        },
        {
            question: "Which country is famous for the Eiffel Tower?",
            options: ["Italy", "France", "Spain", "Germany"],
            answer: "France"
        },
        {
            question: "How many days are there in a leap year?",
            options: ["364", "365", "366", "367"],
            answer: "366"
        },
        {
            question: "Which is the largest planet in our solar system?",
            options: ["Saturn", "Earth", "Jupiter", "Neptune"],
            answer: "Jupiter"
        },
        {
            question: "What is the currency of Japan?",
            options: ["Yuan", "Won", "Yen", "Ringgit"],
            answer: "Yen"
        }
    ],

    science: [
        {
            question: "What is the chemical symbol for water?",
            options: ["CO2", "H2O", "O2", "NaCl"],
            answer: "H2O"
        },
        {
            question: "What gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            answer: "Carbon Dioxide"
        },
        {
            question: "What is the center of an atom called?",
            options: ["Electron", "Nucleus", "Proton", "Neutron"],
            answer: "Nucleus"
        },
        {
            question: "Which organ pumps blood throughout the human body?",
            options: ["Brain", "Liver", "Heart", "Lungs"],
            answer: "Heart"
        },
        {
            question: "What force keeps planets in orbit around the Sun?",
            options: ["Friction", "Gravity", "Magnetism", "Pressure"],
            answer: "Gravity"
        },
        {
            question: "Which vitamin is produced by the body through sunlight exposure?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            answer: "Vitamin D"
        },
        {
            question: "What is the boiling point of water at sea level?",
            options: ["50°C", "75°C", "100°C", "150°C"],
            answer: "100°C"
        },
        {
            question: "Which part of a plant performs most photosynthesis?",
            options: ["Root", "Stem", "Leaf", "Flower"],
            answer: "Leaf"
        },
        {
            question: "What is the nearest star to Earth?",
            options: ["Sirius", "Polaris", "The Sun", "Alpha Centauri"],
            answer: "The Sun"
        },
        {
            question: "What is the basic unit of life?",
            options: ["Atom", "Cell", "Organ", "Tissue"],
            answer: "Cell"
        }
    ],

    technology: [
        {
            question: "What does CPU stand for?",
            options: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Computer Processing Utility"
            ],
            answer: "Central Processing Unit"
        },
        {
            question: "Which company developed the Android operating system?",
            options: ["Microsoft", "Google", "Apple", "IBM"],
            answer: "Google"
        },
        {
            question: "What does RAM stand for?",
            options: [
                "Random Access Memory",
                "Read Access Memory",
                "Rapid Application Memory",
                "Random Application Module"
            ],
            answer: "Random Access Memory"
        },
        {
            question: "Which device is used to connect computers to a network?",
            options: ["Monitor", "Router", "Keyboard", "Printer"],
            answer: "Router"
        },
        {
            question: "Which company created Windows?",
            options: ["Apple", "Google", "Microsoft", "Intel"],
            answer: "Microsoft"
        },
        {
            question: "What does URL stand for?",
            options: [
                "Uniform Resource Locator",
                "Universal Reference Link",
                "Uniform Reference Location",
                "Universal Resource Link"
            ],
            answer: "Uniform Resource Locator"
        },
        {
            question: "Which storage device has no moving mechanical parts?",
            options: ["HDD", "SSD", "Floppy Disk", "CD-ROM"],
            answer: "SSD"
        },
        {
            question: "What is used to protect a computer network from unauthorized access?",
            options: ["Compiler", "Firewall", "Browser", "Editor"],
            answer: "Firewall"
        },
        {
            question: "Which language is primarily used for styling web pages?",
            options: ["HTML", "CSS", "Python", "SQL"],
            answer: "CSS"
        },
        {
            question: "Which technology is used to store and manage data in rows and columns?",
            options: ["Database", "Browser", "Compiler", "Operating System"],
            answer: "Database"
        }
    ],

    web: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlink Text Management Language",
                "Home Tool Markup Language"
            ],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: "<a>"
        },
        {
            question: "Which CSS property changes text color?",
            options: ["font-color", "text-color", "color", "foreground"],
            answer: "color"
        },
        {
            question: "Which language adds interactivity to web pages?",
            options: ["HTML", "CSS", "JavaScript", "SQL"],
            answer: "JavaScript"
        },
        {
            question: "Which CSS property is used to create a flex container?",
            options: [
                "display: flex",
                "position: flex",
                "flex: display",
                "container: flex"
            ],
            answer: "display: flex"
        },
        {
            question: "Which HTML tag is used for the largest heading?",
            options: ["<heading>", "<h6>", "<h1>", "<head>"],
            answer: "<h1>"
        },
        {
            question: "Which method is used to select an element by ID in JavaScript?",
            options: [
                "getElementById()",
                "getElement()",
                "selectById()",
                "queryById()"
            ],
            answer: "getElementById()"
        },
        {
            question: "Which symbol is used for an ID selector in CSS?",
            options: [".", "#", "*", "&"],
            answer: "#"
        },
        {
            question: "Which property is used to make rounded corners in CSS?",
            options: [
                "corner-radius",
                "border-radius",
                "round-border",
                "radius"
            ],
            answer: "border-radius"
        },
        {
            question: "Which HTML element is used to create an unordered list?",
            options: ["<ol>", "<list>", "<ul>", "<li>"],
            answer: "<ul>"
        }
    ]
};

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const nextBtn = document.getElementById("nextBtn");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const questionNumber = document.getElementById("questionNumber");
const scoreDisplay = document.getElementById("scoreDisplay");
const categoryName = document.getElementById("categoryName");

const timerElement = document.getElementById("timer");
const progressElement = document.getElementById("progress");

const totalQuestionsElement = document.getElementById("totalQuestions");
const correctAnswersElement = document.getElementById("correctAnswers");
const wrongAnswersElement = document.getElementById("wrongAnswers");
const finalScoreElement = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");

const categories = document.querySelectorAll(".category");

let selectedCategory = "general";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let timer;
let timeLeft = 30;

const categoryLabels = {
    general: "General Knowledge",
    science: "Science",
    technology: "Technology",
    web: "Web Development"
};

categories.forEach(category => {
    category.addEventListener("click", () => {

        categories.forEach(item => {
            item.classList.remove("active");
        });

        category.classList.add("active");

        selectedCategory = category.dataset.category;
    });
});

startBtn.addEventListener("click", startQuiz);

restartBtn.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

nextBtn.addEventListener("click", nextQuestion);

function startQuiz() {

    currentQuestions = [...questions[selectedCategory]];

    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    categoryName.textContent = categoryLabels[selectedCategory];

    showQuestion();
}

function showQuestion() {

    clearInterval(timer);

    selectedAnswer = null;
    nextBtn.disabled = true;

    const currentQuestion = currentQuestions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    questionNumber.textContent =
        `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;

    scoreDisplay.textContent = `Score: ${score}`;

    progressElement.style.width =
        `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;

    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {

        const button = document.createElement("button");

        button.className = "option";
        button.textContent = option;

        button.addEventListener("click", () => {
            selectAnswer(button, option);
        });

        optionsElement.appendChild(button);
    });

    startTimer();
}

function selectAnswer(button, answer) {

    if (selectedAnswer !== null) {
        return;
    }

    selectedAnswer = answer;

    const currentQuestion = currentQuestions[currentQuestionIndex];

    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach(option => {
        option.disabled = true;
    });

    if (answer === currentQuestion.answer) {

        button.classList.add("correct");

        score++;

        scoreDisplay.textContent = `Score: ${score}`;

    } else {

        button.classList.add("wrong");

        allOptions.forEach(option => {

            if (option.textContent === currentQuestion.answer) {
                option.classList.add("correct");
            }

        });
    }

    nextBtn.disabled = false;

    clearInterval(timer);
}

function startTimer() {

    timeLeft = 30;

    timerElement.textContent = timeLeft;

    timerElement.classList.remove("warning");

    timer = setInterval(() => {

        timeLeft--;

        timerElement.textContent = timeLeft;

        if (timeLeft <= 10) {
            timerElement.classList.add("warning");
        }

        if (timeLeft <= 0) {

            clearInterval(timer);

            timeUp();
        }

    }, 1000);
}

function timeUp() {

    if (selectedAnswer !== null) {
        return;
    }

    selectedAnswer = "timeout";

    const currentQuestion = currentQuestions[currentQuestionIndex];

    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach(option => {

        option.disabled = true;

        if (option.textContent === currentQuestion.answer) {
            option.classList.add("correct");
        }

    });

    nextBtn.disabled = false;
}

function nextQuestion() {

    clearInterval(timer);

    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {

        showQuestion();

    } else {

        showResult();
    }
}

function showResult() {

    clearInterval(timer);

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const total = currentQuestions.length;
    const wrong = total - score;
    const percentage = Math.round((score / total) * 100);

    totalQuestionsElement.textContent = total;
    correctAnswersElement.textContent = score;
    wrongAnswersElement.textContent = wrong;
    finalScoreElement.textContent = `${percentage}%`;

    if (percentage === 100) {

        resultMessage.textContent =
            "Perfect score! You have excellent knowledge.";

    } else if (percentage >= 80) {

        resultMessage.textContent =
            "Excellent work! You really know your stuff.";

    } else if (percentage >= 60) {

        resultMessage.textContent =
            "Good job! Keep practicing to improve your score.";

    } else if (percentage >= 40) {

        resultMessage.textContent =
            "Not bad! A little more practice will help.";

    } else {

        resultMessage.textContent =
            "Keep learning and try the quiz again!";
    }
}