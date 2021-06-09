console.log("loading JavaScript")

//VARAIBLES 
var startButton = document.getElementById("btnStart");
var submitButton = document.getElementById("btnSubmit");
let timeLeft = 60;
let timeInterval;
let questionIndex = 0;
let score = 0;
let quizList = [
    {
        question: "What is Java Script? ",
        choices: ["Coffee List", "Scripting Language", "Dating App", "Movie"],
        correctAns: "Scripting Language"
    },
     {
        question: "What does HTML stand for?",
        choices: ["Hardware Timed Multi Lane", "Handle To Mainframe Language", "Nothing", "Hypertext Markup Laguage"],
        correctAns: "Hypertext Markup Laguage"
    },
     {
        question: "What does CSS stand for?",
        choices: ["Computer Style Sheet", "Creative Software Syntax", "Cascading Style Sheet", "Computing Sytem Software"],
        correctAns: "Cascading Style Sheet"
    },
    {
       question: "If you cannot get a line of code to run what should you do?",
       choices: ["Commit Seppuku", "Use Google", "Quit Your Job", "Restart Your Computer"],
       correctAns: "Use Google"
   },
   {
      question: "How should reslove conflict with a co-worker?",
      choices: ["Trial By Combat", "Talk To Your Supervisor", "Talk To The Co-Worker", "Talk To Your Mom"],
      correctAns: "Trial By Combat"
  }
];



//FUNCTIONS 
function startQuiz() {
    console.log("Start button clicked");
    //Hide the start screen 
    var divStart = document.getElementById("startScreen");
    console.log(divStart);
    divStart.setAttribute("class", "hide");
    //display the question and ans screen 
    var divQAEle = document.getElementById("displayQuestions");
    divQAEle.removeAttribute("class");
    // start the clock 
    timeInterval = setInterval(coundown, 1000);
    //display Question 
    nextQuestion();
    //*var str = "ABC";
    //*var strLength = str.length;
   
}

function coundown() {
    //update time 
    timeLeft--; //going dowwn by a sec 
    document.getElementById("clock").textContent = timeLeft;

    if (timeLeft <= 0) {
        //stop clock
        alert  ("GAME OVER");
        clearInterval(timeInterval);
        //Scoreboard.setAttribute("class", "hide");
    }

}
function nextQuestion ()
{
    console.log(questionIndex); 
    //Display Q and Choices 
    var currentQuestion = quizList[questionIndex]; 
    document.getElementById("question").textContent = currentQuestion.question;

    document.getElementById("btn1").textContent = currentQuestion.choices[0];
    document.getElementById("btn1").onclick = validateAnswer; 
 
    document.getElementById("btn2").textContent = currentQuestion.choices[1];
    document.getElementById("btn2").onclick = validateAnswer; 

    document.getElementById("btn3").textContent = currentQuestion.choices[2];
    document.getElementById("btn3").onclick = validateAnswer; 

    document.getElementById("btn4").textContent = currentQuestion.choices[3];
    document.getElementById("btn4").onclick = validateAnswer; 


    
}
function validateAnswer(){
    console.log("Button clicked", this.textContent, "Right ans is ", quizList[questionIndex].correctAns); 

    //correct ANS 
    if( this.textContent === quizList[questionIndex].correctAns){
        //Increase playscore 
        score += 10; //score = score +10; 
        document.getElementById("correct").textContent = "Correct!!";
    }else {
        //time penality 
        timeLeft -= 10;
        document.getElementById("correct").textContent = "Give Up...";

    }

    //update index 
    questionIndex++; 

    //console.log("Your score is " , score); 

    if (questionIndex === quizList.length ){
        //end quiz here 
        alert("Quiz Over");
        //stop clock 
        clearInterval(timeInterval);
        //*display the score on the html 
       //*getelementbyid playerScore
       var divEnd = document.getElementById("displayQuestions")
       divEnd.setAttribute("class", "hide");
       scoreBoard.removeAttribute("class");
       //score.removeAttribute("class");
        document.getElementById("score").textContent = "Your score :"+ score ;
       
    } else { 
        //moves to the next question 
         nextQuestion(); 
    }
  //* if (playerInitials > 3){
    //*   alert("Max Length 3")
  // }
  //* if (palyerInitials > strLength) {
   //*    alert("3 Character Max!")
  //* }
}
//*function endQuiz(){
//*divQAEle.setAttribute("class", "hide");


function saveScore () {
    //grab ther playe intial and the score set it to local storage item 
    // console.log("Save score", score);
    var previousScores = JSON.parse(localStorage.getItem("saveScore"))|| []; 
    console.log(previousScores);
    var name = document.getElementById("playerInitials").value; 
    // console.log("Player Intials",name ); 
    //creating aan object 
    var playerScore = { 
        //key : value
        savedScore: score,
        initials: name
    };
    //appending new player score to the existing list 
    previousScores.push(playerScore); 
    // console.log(playerScore);
    //Saving in the local Storage 
    localStorage.setItem("saveScore", JSON.stringify(previousScores));
   
}
//Assing value of each button, the values must change for the next round of questions
//Test type multipul choice, one ansewer select only

//EVENT LISTENERS 
startButton.onclick = startQuiz;

submitButton.onclick = saveScore;