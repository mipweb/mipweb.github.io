const questions = [
    {
        question: "1. Pak Adi sedang berangkat berkerja ke sawah. Pak Adi mulai melihat kondisi tanaman padinya. Di pekarangan terdapat tumbuhan yang memiliki daun mirip dengan padi, namun berbeda ukuran, tinggi dan bentuk buahnya. Tentukan tingkatan keanekaragaman hayati yang ditemui Pak Adi...",
        answers: [
                {text: "Keanekaragaman Tingkat Gen", correct: false},
                {text: "Keanekaragaman Tingkat Spesies", correct: true},
                {text: "Keanekaragaman Tingkat Ekosistem", correct: false}
        ]
        
    },
    {
        question: "2. Ani diminta Ibunya membeli buah mangga di pasar. Di pasar Ani melihat banyak sekali macam-macam buah mangga dari berbagai ras, seperti yang terlihat pada gambar. Tentukan tingkatan keanekaragaman hayati yang ditemui Ani...",
        answers: [
                {text: "Keanekaragaman Tingkat Gen", correct: true},
                {text: "Keanekaragaman Tingkat Spesies", correct: false},
                {text: "Keanekaragaman Tingkat Ekosistem", correct: false}
        ]
        
    },
    {
        question: "3. Andre gemar sekali memeliharan anjing. Ia memiliki banyak anjing dari berbagai ras, beberapa seperti yang terlihat pada gambar. Tentukan tingkatan keanekaragaman hayati dari gambar tersebut...",
        answers: [
                {text: "Keanekaragaman Tingkat Gen", correct: true},
                {text: "Keanekaragaman Tingkat Spesies", correct: false},
                {text: "Keanekaragaman Tingkat Ekosistem", correct: false}
        ]
        
    },
    {
        question: "4. Bovidae adalah salah satu nama famili hewan amalia berkaki empat. Di dalam famili Bovidae terdapat banyak spesies yang memiliki ciri tubuh yang hampir mirip, seperti yang terlihat pada gambar. Tentukan tingkatan keanekaragaman hayati dari gambar tersebut...",
        answers: [
                {text: "Keanekaragaman Tingkat Gen", correct: false},
                {text: "Keanekaragaman Tingkat Spesies", correct: true},
                {text: "Keanekaragaman Tingkat Ekosistem", correct: false}
        ]
        
    },
    {
        question: "5. Pak Eko seorang peternak sapi. Beliau memiliki banyak sekali jenis sapi baik dari jenis lokal maupun dari luar negeri. Beberapa sapi ternak milik Pak Eko seperti yang terlihat pada gambar. Tentukan tingkatan keanekaragaman hayati dari gambar tersebut...",
        answers: [
                {text: "Keanekaragaman Tingkat Gen", correct: true},
                {text: "Keanekaragaman Tingkat Spesies", correct: false},
                {text: "Keanekaragaman Tingkat Ekosistem", correct: false}
        ]
        
    },
    {
        question: "6. Kebun Sari Rindu adalah salah satu objek wisata petik buah di negeri Konoha. Banyak buah yang bisa kita petik di sana, contohnya seperti yang terlihat pada gambar. Tentukan tingkatan keanekaragaman hayati dari gambar tersebut...",
        answers: [
                {text: "Keanekaragaman Tingkat Gen", correct: false},
                {text: "Keanekaragaman Tingkat Spesies", correct: true},
                {text: "Keanekaragaman Tingkat Ekosistem", correct: false}
        ]
        
    },
    {
        question: "7. Yadi adalah seorang fotografer yang suka menjelajahi alam. Spot yang paling di sukai yakni seperti yang terlihat pada gambar. Di tempat-tempat tersebut banyak makhluk hidup maupun objek alam yang cocok untuk difoto. Tentukan tingkatan keanekaragaman hayati dari gambar tersebut...",
        answers: [
                {text: "Keanekaragaman Tingkat Gen", correct: false},
                {text: "Keanekaragaman Tingkat Spesies", correct: false},
                {text: "Keanekaragaman Tingkat Ekosistem", correct: true}
        ]
        
    },
    {
        question: "8. Haris adalah seorang pedagang buah pisang di pasar. Pisang yang Ia jual bervariasi dan hasil kebunnya sendiri. Beberapa macam pisang yang dijual yakni seperti yang terlihat pada gambar. Tentukan tingkatan keanekaragaman hayati dari gambar tersebut...",
        answers: [
                {text: "Keanekaragaman Tingkat Gen", correct: true},
                {text: "Keanekaragaman Tingkat Spesies", correct: false},
                {text: "Keanekaragaman Tingkat Ekosistem", correct: false}
        ]
        
    },
    {
        question: "9. Junaedi seorang peneliti yang sedang mengamati hewan di hutan dengan teropongnya. Dia melihat ada seekor anjing dari kejauhan, namun setelah di teliti itu bukan lah anjing melainkan serigala. Ditemukan pula beberapa hewan lain yang mirip anjing seperti yang terlihat pada gambar. Tentukan tingkatan keanekaragaman hayati dari gambar tersebut...",
        answers: [
                {text: "Keanekaragaman Tingkat Gen", correct: false},
                {text: "Keanekaragaman Tingkat Spesies", correct: true},
                {text: "Keanekaragaman Tingkat Ekosistem", correct: false}
        ]
        
    },
    {
        question: "10. Erwin adalah teman Yadi, yang juga seorang fotografer alam. Spot yang paling di sukai yakni seperti yang terlihat pada gambar. Di tempat-tempat tersebut banyak makhluk hidup maupun objek alam yang cocok untuk difoto. Tentukan tingkatan keanekaragaman hayati dari gambar tersebut...",
        answers: [
                {text: "Keanekaragaman Tingkat Gen", correct: false},
                {text: "Keanekaragaman Tingkat Spesies", correct: false},
                {text: "Keanekaragaman Tingkat Ekosistem", correct: true}
        ]
        
    }
];







const imgQuestion = document.querySelector(".img-ques");
const txtQuestion = document.getElementById("question-txt");
const btnAnswers = document.getElementById("answers-btn");
const btnNext = document.getElementById("next-btn");
const ttlInstruc = document.getElementById("question");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    let currentQuestionIndex = 0;
    let score = 0;
    btnNext.innerHTML = 'Selanjutnya <i class="fa-solid fa-forward"></i>';
    showQuestion();
}

function showQuestion(){

    showImg();
    resetSate();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestion + 1;

    
    txtQuestion.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        btnAnswers.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetSate(){
    btnNext.style.display = "none";
    while(btnAnswers.firstChild){
        btnAnswers.removeChild(btnAnswers.firstChild);
    }
}

function showImg(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    imgQuestion.setAttribute('src', '../img/question' + questionNo +'.png');
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(btnAnswers.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.classList.add("disabled");
        button.disabled = true;

    });

    btnNext.style.display = "block";
}


function showScores(){
    resetSate();
    txtQuestion.innerHTML = `Selamat! Kamu mendapat skor: <br><br><br> <span>${score * 10}</span>`;
    txtQuestion.classList.add("txt-skor");
    imgQuestion.setAttribute('src', '../img/img-score.png');
    imgQuestion.style.width = "16rem"
    ttlInstruc.innerHTML = "Hasil Kuis";

    btnNext.innerHTML = "Bermain lagi?";
    btnNext.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScores();
    }
}


btnNext.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();