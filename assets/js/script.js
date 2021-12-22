
var quizQuestions = [
    {
        question: "What is the script tag commonly used for? ",
        answers: ["linking a javascript file to an index.html document", "seperating sections in javascript", "evaluating a block of code and returning a boolean ", "signifying the end of a javascript file"],
        correct: "linking a javascript file to an index.html document"
    },
    {
        question: "what kind of information does an object hold?",
        answers: ["booleans", "strings", "arrays", "All of the above"],
        correct: "All of the above"
    
    }, 
    {
        question: "What does the if statement do?",
        answers: ["evaluates a condition in parentheses and, if the result is true, executes a block of code.", "returns undefined", "puts together multiple strings of information", "none of the above"],
        correct: "evaluates a condition in parentheses and, if the result is true, executes a block of code."
    },
    ];

    var startContainer = document.getElementById('startContainer');
    var startButton = document.getElementById('start');
    var questionContainer = document.getElementById('questionContainer');
    var scoreContainer = document.getElementById('scoreContainer');
    var currentQuestionIndex = 0;
    var answersHTML = document.getElementById('answers')
    var score = 0;


const showQuestions = () => {
    answersHTML.innerHTML = "";
        // In the first line, we are setting the variable current question to the quizQuestions Object (with all the questions and answers) and we are adding the currentQuestionIndex which will help us target each individual question.
    var currentQuestion = quizQuestions[currentQuestionIndex];
        // In the second line we are setting the question title to the questionTitle variable we established in index.HTML
    var questionTitle = document.getElementById('questionTitle');
      //In the third line, we are changing the questionTitle to be the appropriate question title for the question the user is answering. We are doing this by targeting the "currentQuestion" variable we established above and then targeting the property "question" to target the question title in js.
    questionTitle.innerHTML = currentQuestion.question;


    // In this section of code, we are adding the answers to the buttons for each indiviudal question. 
        currentQuestion.answers.forEach( (answer) => {
            var button = document.createElement("button");
            button.innerText = answer;
            button.className = "choice-btn"
            answersHTML.append(button);
        });
     
        //We are adding the click event to each answer-button. Then, we are comparing whether the option the user chose is the same as the "correct" answer. This is console.logged for the programmer. 
    var choices = document.getElementsByClassName("choice-btn")
    Array.from(choices).forEach((choice)=> {
        choice.addEventListener('click',  (e) => {
            console.log(e.target.innerText)
            if (e.target.innerText === currentQuestion.correct) {
                console.log('boom correct')
               score += 1;
           } else {
                console.log('loser')
                // this is for you. I did not forget this here. 
               score += 0;
                timeleft -= (1000 * 5);
           }
        

    if(quizQuestions.length > currentQuestionIndex+1) {
        currentQuestionIndex = currentQuestionIndex +1
        showQuestions();
    } else {
        console.log("end of quiz")
      
        scoreContainer.innerHTML = "Score :  " + score;
        startContainer.classList.add('hidden');
        questionContainer.classList.add('hidden');
        scoreContainer.classList.remove('hidden');
    }
        });
    })
}
    
// Whenever we click on the start button we will run the function in the block of code. First, we are preventing the default setting that refreshes the page. And then, we are removing the start container after pressing "start" and showing the first question. 
    startButton.addEventListener('click', (e) => {
        e.preventDefault();
        startContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        // startgame();
        showQuestions();
    });
    //----------------------------------------------------------------------
//   This is our timer countdown from 60 seconds
var timeleft = 30000;
var quizTimer = setInterval(()=>{
  if(timeleft <= 0){
    clearInterval(quizTimer);
    document.getElementById("time").innerHTML = "Finished";
  } else {
    document.getElementById("time").innerHTML = timeleft/1000 + " seconds remaining";
  }
  timeleft -= 1000;
}, 1000);
