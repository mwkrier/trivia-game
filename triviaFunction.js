//$(document).ready(function() {

var triviaQuestions = [{
    question: 'How long did MASH run?',
    answerList: ['11 years', '7 years', '13 years', '9 years'],
    answer: 0,
}, {
    question: 'What does MASH stand for?',
    answerList: ['Mobile Army Survival Hospital', 'Mobile Armed Surgery Hospital', 'Mobile Army Surgical Hosiptal', 'Mobile Army Salvation Hospice'],
    answer: 2,

}, {
    question: 'Who was the second Commanding Officer?',
    answerList: ['Col. Potter', 'Major Burns', 'Lt. Col. Blake', 'Col. Flagg' ],
    answer: 1,
}, {
    question: 'Radar had a mini super power. What was it?',
    answerList: ['He could heal animals', 'He could find anything', 'He could anticipate events', 'He could only eat a bitsize meal'],
    answer: 2,
}, {
    question: 'How many characters stayed through the entire series?',
    answerList: [ '2', '6', '1', '4'],
    answer: 3,
}, {
    question: 'Who were the original bunkmates in the swamp?',
    answerList: ['Hawkeye, Frank, BJ,', 'Hawkeye, Trapper John, Frank,', 'Hawkeye, Trapper John, Frank, Spearchucker Jones', 'Hawkeye, BJ, Frank, Trapper John'],
    answer: 2
}
]

console.log(triviaQuestions[0].answerList);

$("#startGame").on("click", function(){
    displayQ();
    displayChoices();
    //timerfunction

});
//DisplayQuestion
function displayQ(){
    $('#questionContainer').html("<p>" + triviaQuestions[0].question + "</p>");
}
//DisplayAnswerChoices
function displayChoices(){
    //$('#answerContainer').html("<p>"+ triviaQuestions[0].answerList +"</p>");
    var answerDiv = $("#answerContainer");

    // For Loop then loops through our total drink list...
    for (var i = 0; i < triviaQuestions[0].answerList.length; i++) {

      // It then creates a new div for each drink. Note we create divs and add the content in the same line.
      var newAnswerDiv = $("<button>" + triviaQuestions[0].answerList[i] + "</button> <br> <br>");

      // It then adds this new div to the drinkList div.
      answerDiv.append(newAnswerDiv);
}

// I have made numerous attempts on this homework and nothing is working except the above, 
//I cannot figure out my next steps and no amount of googling or reviewing the activties are alleaviating 
// my frustration.

//move to the next question function maybe

// some how collect user data and verify if correct
// if user input === answer 
// display correct and gif
// else
// display wrong and correct answer

//set timer for each question at 15 seconds


// final display box
//display number right 
//display number wrong
// 

}
