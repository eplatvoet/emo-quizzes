document.addEventListener("DOMContentLoaded", function() {
    const quizzes = [
        {
            imgSrc: "./extras/images/black-parade.jpg",
            questions: [
                {
                    question: "When I was a young (_____)",
                    options: ["girl", "kitty", "man", "boy"],
                    correctAnswer: "boy"
                },
                {
                    question: "My father took me into (_________)",
                    options: ["the ocean", "the city", "the summer", "the fire"],
                    correctAnswer: "the city"
                },
                {
                    question: "To see a marching (_____)",
                    options: ["band", "army", "dog", "hand"],
                    correctAnswer: "band"
                },
                {
                    question: "He said, 'Son when you (_____)",
                    options: ["throw up", "glow up", "grow up", "die"],
                    correctAnswer: "grow up"
                },
                {
                    question: "Would you be the savior of the (________), the beaten and the damned?'",
                    options: ["token", "broken", "killjoys", "kitties"],
                    correctAnswer: "broken"
                },
                {
                    question: "He said 'Will you (_____)",
                    options: ["beat them", "eat them", "treat them", "defeat them"],
                    correctAnswer: "defeat them"
                },
                {
                    question: "Your demons, and all the (_____), the plans that they have made",
                    options: ["non-believers", "emo kids", "angels", "fans"],
                    correctAnswer: "non-believers"
                },
                {
                    question: "Because one day, I'll leave you a phantom, to lead you in the (_____)",
                    options: ["winter", "summer", "spring", "fall"],
                    correctAnswer: "summer"
                },
                {
                    question: "to join the (_____)",
                    options: ["white walkers", "killjoys", "army", "Black Parade"],
                    correctAnswer: "Black Parade"
                }
            ],
            videoSrc: 'https://www.youtube.com/embed/RRKJiM9Njr8?si=QVSPoCEjWq1GMtZ7',
            songInformation: `"Welcome to the Black Parade" was released on September 12, 2006 as the lead single off the band's third studio album. The entire band collaborated to write the song.`
        },
        {
            imgSrc: "./extras/images/taste-of-ink.jpg",
            questions: [
                {
                    question: "Is it worth it, can you even (______)?",
                    options: ["see me", "hear me", "feel me", "find me"],
                    correctAnswer: "hear me"
                },
                {
                    question: "Standing with your (______) on me",
                    options: ["spotlight", "disco ball", "flashlight", "eyes"],
                    correctAnswer: "spotlight"
                },
                {
                    question: "Not enough to (______________)",
                    options: ["feed the poor", "care", "hydrate the thirsty", "feed the hungry"],
                    correctAnswer: "feed the hungry"
                },
                {
                    question: "I'm (_____), and I've felt it for a while now",
                    options: ["exhausted", "hungry", "tired", "sleepy"],
                    correctAnswer: "tired"
                },
                {
                    question: "In this sea of lonely, the (______) of ink is getting old",
                    options: ["smell", "sight", "taste", "color"],
                    correctAnswer: "taste"
                },
                {
                    question: "It's (_____) o'clock in the ******* morning, Each day gets more and more like the last day",
                    options: ["four", "three", "two", "five"],
                    correctAnswer: "four"
                },
                {
                    question: "Still I can see it coming, While I'm standing in the river (_______)",
                    options: ["swimming", "drowning", "singing", "dancing"],
                    correctAnswer: "drowning"
                },
                {
                    question: "This could be my chance to break out, This could be my chance to say (______)",
                    options: ["hello", "yo", "goodbye", "see ya"],
                    correctAnswer: "goodbye"
                },
                {
                    question: "At last it's finally over, Couldn't take this (______) much longer",
                    options: ["city", "home", "show", "town"],
                    correctAnswer: "town"
                },
                {
                    question: "Being half dead wasn't what I planned to be, Now I'm ready to be (_____)",
                    options: ["free", "alive", "present", "dead"],
                    correctAnswer: "free"
                }
            ],
            videoSrc: 'https://www.youtube.com/embed/aJXRFcyWgdk?si=wiBrJP0aDXePMlDq',
            songInformation: `"The Taste of Ink" was released to radio stations with a music video in September 2002, prior to the release of their self-titled debut album. The song was written by Bert McCracken.`
        },
        {
            imgSrc: "./extras/images/I-miss-you.png",
            questions: [
                {
                    question: "Hello, there - The (______) from my nightmare",
                    options: ["devil", "angel", "monster", "ghost"],
                    correctAnswer: "angel"
                },
                {
                    question: "The (_____) in the background of the morgue",
                    options: ["shadow", "ghost", "flower", "monster"],
                    correctAnswer: "shadow"
                },
                {
                    question: "The unsuspecting victim of darkness in the (_______)",
                    options: ["alley", "hallway", "field", "valley"],
                    correctAnswer: "valley"
                },
                {
                    question: "We can live like (_______________) if we want",
                    options: ["Hack & Tally", "Jack and Zero", "Jack and Sally", "Harry and Sally"],
                    correctAnswer: "Jack and Sally"
                },
                {
                    question: "Where you can always find me and we'll have Halloween on (________)",
                    options: ["Christmas", "Thanksgiving", "Valentine's Day", "Flag Day"],
                    correctAnswer: "Christmas"
                },
                {
                    question: "And in the (______), we'll wish this never ends - we'll wish this never ends. I miss you, I miss you. I miss you, I miss you",
                    options: ["end", "night", "day", "afternoon"],
                    correctAnswer: "night"
                },
                {
                    question: "Where are you? And (___________)",
                    options: ["I'm so hungry", "I'm so tired", "I'm so bored", "I'm so sorry"],
                    correctAnswer: "I'm so sorry"
                },
                {
                    question: "I cannot sleep, I cannot (_____) tonight",
                    options: ["dream", "eat", "drink", "work"],
                    correctAnswer: "dream"
                },
                {
                    question: "I need somebody and always. This sick, strange darkness comes creeping on, so (_________) every time",
                    options: ["spooky", "scary", "haunting", "surprising"],
                    correctAnswer: "haunting"
                },
                {
                    question: "And as I stare, I counted the webs from all the (_______). Catching things and eating their insides",
                    options: ["bees", "mosquitos", "fireflies", "spiders"],
                    correctAnswer: "spiders"
                },
                {
                    question: "Like indecision to call you and hear your voice of (________)",
                    options: ["treason", "reason", "sadness", "excitement"],
                    correctAnswer: "treason"
                },
                {
                    question: "Will you come (_____) and stop this pain tonight? Stop this pain tonight",
                    options: ["here", "down", "home", "to town"],
                    correctAnswer: "home"
                }
            ],
            videoSrc: 'https://www.youtube.com/embed/s1tAYmMjLdY?si=AuRZyqH1nhimmtlF',
            songInformation: `"I Miss You" was released on February 2, 2004 as the second single off the band's self titled album. The song was co-written by Tom Delonge and Mark Hoppus.`
        },
        {
            imgSrc: "./extras/images/vindicated.png",
            questions: [
                {
                    question: "Hope dangles on a (______)",
                    options: ["wire", "line", "string", "hanger"],
                    correctAnswer: "string"
                },
                {
                    question: "Like slow-spinning (________)",
                    options: ["redemption", "globe", "revenge", "adaptation"],
                    correctAnswer: "redemption"
                },
                {
                    question: "Winding in, and winding out. The (______) of it has caught my eye.",
                    options: ["glow", "power", "attraction", "shine"],
                    correctAnswer: "shine"
                },
                {
                    question: "And (_______) me in so mesmerizing, so hypnotizing",
                    options: ["roped", "pulled", "lured", "persuaded"],
                    correctAnswer: "roped"
                },
                {
                    question: "I am (________), I am....",
                    options: ["attracted", "captivated", "captivating", "addictive"],
                    correctAnswer: "captivated"
                },
                {
                    question: "Vindicated, I am (________), I am wrong",
                    options: ["wrong", "right", "selfish", "greedy"],
                    correctAnswer: "selfish"
                },
                {
                    question: "I am right, I swear I'm right. Swear I (_____) it all along",
                    options: ["knew", "called", "foresaw", "predicted"],
                    correctAnswer: "knew"
                },
                {
                    question: "And I am (_______)",
                    options: ["dangerous", "damaged", "fixed", "flawed"],
                    correctAnswer: "flawed"
                },
                {
                    question: "But I am (________) so well",
                    options: ["growing up", "glowing up", "tidying up", "cleaning up"],
                    correctAnswer: "cleaning up"
                },
                {
                    question: "I am seeing in me (______)",
                    options: ["finally", "now", "again", "at last"],
                    correctAnswer: "now"
                },
                {
                    question: "The things you (______) you saw yourself",
                    options: ["swore", "knew", "said", "thought"],
                    correctAnswer: "swore"
                }
            ],
            videoSrc: 'https://www.youtube.com/embed/8FhQhoh7XqA?si=y1WmS9_-K4pdf7Xg',
            songInformation: '"Vindicated" was released on May 31, 2004, as the lead single for the Spiderman 2 soundtrack. The song was written by Chris Carrabba.'
        }
    ];

    const songChoices = document.querySelector('.song-choices');
    const ogStateWrapper = document.querySelector('.og-state-wrapper');
    const quizWrapper = document.querySelector('#quiz-wrapper');
    const quizImg = document.querySelector('#quiz-img');
    const questionWrapper = document.querySelector('#question');
    const optionsWrapper = document.querySelector('#options');
    const resultWrapper = document.querySelector('#result');
    const resultsWrapper = document.querySelector('#results-wrapper');
    const totalScore = document.querySelector('#total-score');
    const resultsMessage = document.querySelector('#results-message');
    const songInfo = document.querySelector('#song-info');
    const videoPlayerWrapper = document.querySelector('#video-player-wrapper iframe');
    const retakeQuizButton = document.querySelector('#retake-quiz');
    const backToHomeButton = document.querySelector('#back-to-home');

    let currentQuiz = null;
    let currentQuizIndex = 0;
    let currentQuestionIndex = 0;
    let score = 0;

    songChoices.addEventListener('click', (e) => {
        const option = e.target.closest('.option');
        if (option) {
            const quizIndex = option.dataset.index;
            startQuiz(quizIndex);
        }
    });

    optionsWrapper.addEventListener('click', (e) => {
        const selectedOption = e.target;
        if (selectedOption.tagName === 'BUTTON') {
            checkAnswer(selectedOption.textContent);
        }
    });

    retakeQuizButton.addEventListener('click', () => {
        startQuiz(currentQuizIndex); // Use the stored quiz index
    });

    backToHomeButton.addEventListener('click', () => {
        resetQuiz();
    });

    function startQuiz(index) {
        currentQuizIndex = index; // Store the quiz index
        currentQuiz = quizzes[index];
        currentQuestionIndex = 0; // Reset question index
        score = 0;
        if(!resultsWrapper.classList.contains('hidden')){
            resultsWrapper.classList.add('hidden');
        }
        ogStateWrapper.classList.add('hidden');
        quizWrapper.classList.remove('hidden');
        quizWrapper.classList.add('show');
        loadQuestion();
        quizImg.src = currentQuiz.imgSrc;
    }

    function loadQuestion() {
        const currentQuestion = currentQuiz.questions[currentQuestionIndex];
        questionWrapper.textContent = currentQuestion.question;
        optionsWrapper.innerHTML = '';
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            optionsWrapper.appendChild(button);
        });
    }

    function checkAnswer(selectedAnswer) {
        const currentQuestion = currentQuiz.questions[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correctAnswer) {
            resultWrapper.textContent = "Correct 🤘🏼";
            score++;
        } else {
            resultWrapper.textContent = "Woops - that's not right...";
        }

        setTimeout(() => {
            currentQuestionIndex++;
            resultWrapper.textContent = ''; // Clear result message

            if (currentQuestionIndex < currentQuiz.questions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }, 1000); // 1 second delay before loading the next question
    }

    function showResults() {
        quizWrapper.classList.remove('show');
        quizWrapper.classList.add('hidden');
        resultsWrapper.classList.remove('hidden');
        resultsMessage.textContent = "Alright - let's see how you did....";
        totalScore.textContent = `You scored ${score} out of ${currentQuiz.questions.length}!`;
        songInfo.textContent = currentQuiz.songInformation;
        videoPlayerWrapper.src = currentQuiz.videoSrc;
    }

    function resetQuiz() {
        resultsWrapper.classList.add('hidden');
        ogStateWrapper.classList.remove('hidden');
        videoPlayerWrapper.src = '';
    }
});