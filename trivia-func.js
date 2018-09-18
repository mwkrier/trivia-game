
var submit = document.getElementById('submit');
var start = document.getElementById('start');
var form = document.getElementById('form');
var timer = document.getElementById('timer');
var win = document.getElementById('win');
var lose = document.getElementById('lose');
var tryAgain = document.getElementById('tryAgain');
var level2 = document.getElementById('level2');

var number = 50;
var intervalId;

var correct = 0;
var incorrect = 0;


start.addEventListener('click', function(){
    start.style.display = "None";
    form.style.display = "block";
    timer.style.display = "block";
    startTimer();

});


submit.addEventListener('click', function(){
   question1();
   question2();
   question3();
   question4();
   question5();
   console.log("correct: " + correct);
   console.log("incorrect: " + incorrect);

   if(correct > incorrect){
       form.style.display = "none";
       timer.style.display = "none";
       win.style.display = "block";
       win.innerHTML += "<p class='text'><br> Correct: " + correct + "</p><br>" + "<p class='text' Incorrect: " + incorrect + "</p>";
       level2.style.display = "block";

       level2.addEventListener('click', function(){
            win.innerHTML += "<h1 class='text'> Coming Soon </h1>"
       });

   }else {
        form.style.display = "none";
        timer.style.display = "none";
        lose.style.display = "block";
        lose.innerHTML += "<p class='text'><br> Correct: " + correct + "</p><br>" + "<p class='text' Incorrect: " + incorrect + "</p>";
        tryAgain.style.display = "block";

        tryAgain.addEventListener('click', function(){
            start.style.display = "block";
            lose.style.display="none";
        });
   }
});

function question1(){
    var dots = document.getElementsByName("q1");
    if(dots[0].checked){
        correct++;
    }else {
        incorrect++;
    }
    event.preventDefault();
};

function question2(){
    var dots = document.getElementsByName("q2");
    if(dots[2].checked){
        correct++;
    }else {
        incorrect++;
    }
    event.preventDefault();
};

function question3(){
    var dots = document.getElementsByName("q3");
    if(dots[0].checked){
        correct++;
    }else {
        incorrect++;
    }
    event.preventDefault();
};

function question4(){
    var dots = document.getElementsByName("q4");
    if(dots[2].checked){
        correct++;
    }else {
        incorrect++;
    }
    event.preventDefault();
};

function question5(){
    var dots = document.getElementsByName("q5");
    if(dots[2].checked){
        correct++;
    }else {
        incorrect++;
    }
    event.preventDefault();
};


function startTimer(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

function decrement(){
    number--;
    timer.innerHTML = "<h2> Timer: " + number + "<h2>";
    console.log(number);

    if(number === 0){
        clearInterval(intervalId);
        form.style.display = "none";
        timer.style.display = "none";
        lose.style.display = "block";
    }
};


