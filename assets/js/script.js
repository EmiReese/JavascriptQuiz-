
var quizQuestions = [
    {
        question: "What is the script tag commonly used for? ",
        answers: ["linking a javascript file to an index.html document", "seperating sections in javascript", "evaluating a block of code and returning a boolean ", "signifying the end of a javascript file"],
        correct: "linking a javascript file to an index.html document"
    },
    {
        question: "what kind of information does an object hold?",
        answers: ["booleans", "strings", "arrays", "all of the above"],
        correct: "All of the above"
    
    }, 
    {
        question: "What does the if statement do?",
        answers: ["evaluates a condition in parentheses and, if the result is true, executes a block of code.", "returns undefined", "puts together multiple strings of information", "none of the above"],
        correct: "evaluates a condition in parentheses and, if the result is true, executes a block of code."
    }
    ];
    var startContainer = document.getElementById('startContainer');
    var startButton = document.getElementById('start');
    var questionContainer = document.getElementById('questionContainer');
    var currentQuestionIndex = 0;
    var olEl = document.createElement('ol');
    var answers = document.getElementById('answers');
    // var eachAnswer = document.createElement('li');
    var score = 0;


    function startgame () {
        console.log('click');
        showQuestions();
    }
    // To start the game, we need to call upon the showQuestions functions below. After the user clicks the button, the question will appear. 


    function showQuestions () {
        var currentQuestion = quizQuestions[currentQuestionIndex];
        var questionTitle = document.getElementById('questionTitle');
        questionTitle.innerHTML = currentQuestion.question;
    
        // In the first line, we are setting the variable current question to the quizQuestions Object (with all the questions and answers) and we are adding the currentQuestionIndex which will help us target each individual question
        // In the second line we are setting the question title to the questionTitle we established in index.HTML
        //In the third line, we are changing the questionTitle to be the appropriate question title for the question the user is answering. We are doing this by targeting the "currentQuestion" variable we established above and using the property "question" to target the question title in js.

        // We will be iteerating through each "answer" in the arrays in the object quizQuestions.
         currentQuestion.answers.forEach(function () {
            var eachAnswer = document.createElement('li');
            var button = document.createElement('button');
            button.innerText = answers.text;
             console.log(typeof eachAnswer);  //eachAnswer
            olEl.append(button); //eachAnswerxw
    });
     answers.append(olEl);
    };
    

// Whenever we click on the start button we will run the function in the block of code. First, we are preventing the default setting that refreshes the page. And then, we are removing the start container after pressing "start" and showing the first question. 
    startButton.addEventListener('click', (e) => {
        e.preventDefault();
         startContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        startgame();
    });
    //----------------------------------------------------------------------
//   This is our timer countdown from 60 seconds
var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "Finished";
  } else {
    document.getElementById("time").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);


eachAnswer.addEventListener('click',  function () 
{
    for (var i = 0; i < answers.li; i++){
        if (eachAnswer[i] === quizQuestions.correct) {
            score =+ 1;
            quizQuestions++
        }
        else {
            score += 0;
            quizQuestions++;
            timer -= (1000 * 5);
        }
    }
});
 
      
 
