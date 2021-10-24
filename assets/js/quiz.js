function buildQuiz(){ }
buildQuiz();


const quizDisplay = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const resultDisplay = document.getElementById('result');



function buildQuiz(){ }
function showResult(){ }


    buildQuiz();


submitBtn.addEventListener('click',showResult);



const quizData = [

  {
      question : '웹개발에 주로 사용되는 프론트언어는?',
      answers : {
        a : "일본어",
        b : "다랑어",
        c : "자바스크립트"
      },
    correct : 'c'
  },
  {
      question : '웹 디자인에 사용되는 언어는?',
      answers : {
          a : '미싱',
          b : 'css',
          c : '돈까s'
      },
    correct : 'b'
  },
  {
        question : '블로그 형태로 웹사이트를 쉽게 개발할 수 있는 방식을 무엇이라고 하는가?',
        answers : {
              a : 'CMS',
              b : 'WAX',
              c : 'KISWISS'
        },
    correct : 'a'
  }
  ]



function buildQuiz(){

  const output = [ ]; //퀴즈 문제와 선택지가 저장된 배열


   quizData.forEach(  //quizData배열값 불러오기
             
      (currentQuestion, questionNum) => { 
      
           const answers = [ ]; //퀴즈 선택지 배열

           for(item in currentQuestion.answers){  
               //퀴즈 선택지 DOM구조 생성
                answers.push(`<label>  
                              <input type="radio" name="question${questionNum}" value="${item}">
                                 ${item} : ${currentQuestion.answers[item]}
                              </label>`);
               }
               
               
                //output배열에 퀴즈와 선택지 DOM 추가하기
                output.push(`<div class="question"> ${currentQuestion.question}</div>
                             <div class="answer">${answers.join('')}</div>`);

           });



       quizDisplay.innerHTML = output.join(' '); //join메서드, 퀴즈 사이에 공백 넣기

}

function showResult(){

  //'answer'이름의 클래스를 배열로 저장하기
   const answerDisplays = quizDisplay.querySelectorAll('.answer');  
   let numCorrect = 0; //퀴즈 정답률 기록
   
   

   //답안 검증하기
   quizData.forEach( (currentQuestion, questionNum)=>{   


      const answerDisplay = answerDisplays[questionNum]; //answerDisplays배열을 index별로 불러오기
      const selector = `input[name=question${questionNum}]:checked`; //input태그의 속성값 지정하기
      const userAnswer = (answerDisplay.querySelector(selector) || {}).value; //input check값 저장


                  if(userAnswer === currentQuestion.correct){  //user가 선택한 값과 정답 검증
                          numCorrect++;
                          answerDisplays[questionNum].style.color = 'lightgreen';
                  }else{
                          answerDisplays[questionNum].style.color = 'red';
                  }
                  
     });
     
     
           //resultDisplay DOM에 결과값 삽입하기
            resultDisplay.innerHTML = `${numCorrect} out of ${quizData.length}`; 
     
     
}