

const quizDisplay = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const resultDisplay = document.getElementById('result');

function buildQuiz(){
   const output = [ ]; 
    quizData.forEach(  
        (currentQuestion, questionNum) => { 
                    const answers = [ ];     
                    for(item in currentQuestion.answers){  
                                answers.push(`<label>
                                             <input type="radio" name="question${questionNum}" value="${item}">
                                                 ${item} : ${currentQuestion.answers[item]}
                                             </label>`);
                       }
                          output.push(`<div class="question"> ${currentQuestion.question}</div>
                                       <div class="answer">${answers.join('')}</div>`);
                 }              
    );
       quizDisplay.innerHTML = output.join('</br>');
 }

function showResult(){
      const answerDisplays = quizDisplay.querySelectorAll('.answer');  
        let numCorrect = 0; 

         quizData.forEach( (currentQuestion, questionNum)=>{
                const answerDisplay = answerDisplays[questionNum]; 
                const selector = `input[name=question${questionNum}]:checked`;  
                const userAnswer = (answerDisplay.querySelector(selector) || {}).value;  


                 if(userAnswer === currentQuestion.correct){    
                         numCorrect++;
                         answerDisplays[questionNum].style.color = 'lightgreen';
                 }else{
                         answerDisplays[questionNum].style.color = 'red';
                 }
         });
           resultDisplay.innerHTML = `${numCorrect} out of ${quizData.length}`; 
 }

 buildQuiz(); 
 submitBtn.addEventListener('click',showResult);   