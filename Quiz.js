const questions = [
    {
        "que": "What does HTML stand for?",
        "a": "Hyper Text Markup Language",
        "b": "High Tech Multi-Language",
        "c": "Home Tool Markup Language",
        "d": "Hyper Transferable Language",
        "correct":"b"
      },
      {
        "que": "Which programming language is often used for adding interactivity to web pages?",
        "a": "Java",
        "b": "Python",
        "c": "JavaScript",
        "d": "C++",
        "correct":"c"
      },
      {
        "que": "What is the purpose of CSS in web development?",
        "a": "To define the structure of a webpage",
        "b": "To add interactivity to a webpage",
        "c": "To style the presentation of a webpage",
        "d": "To handle server-side logic",
        "correct":"c"
      },

      {
        "que": "Which programming language is often used for building dynamic web pages?",
        "a": "Java",
        "b": "HTML",
        "c": "CSS",
        "d": "JavaScript",
        "correct": "d"
      },
      
{
    "que": "What is the purpose of the 'DOCTYPE' declaration in an HTML document?",
    "a": "To declare the document type and version of HTML",
    "b": "To specify the character encoding of the document",
    "c": "To define the structure of the HTML document",
    "d": "To include external JavaScript files",
    "correct":"d"
  },
  {
    "que": "What is the purpose of the 'alt' attribute in an HTML 'img' tag?",
    "a": "To specify the image source",
    "b": "To provide alternative text for screen readers",
    "c": "To define the image size",
    "d": "To set the image alignment",
    "correct":"a"
  },
  {
    "que": "What is the role of AJAX in web development?",
    "a": "Asynchronous JavaScript and XML for creating dynamic web pages",
    "b": "A tool for server-side scripting",
    "c": "A protocol for secure data transfer",
    "d": "A styling framework for web pages",
    "correct":"a"
  },{
    "que": "Which of the following is not a CSS preprocessor?",
    "a": "Sass",
    "b": "LESS",
    "c": "HTML",
    "d": "Stylus",
    "correct":"c"
  }
  
]

    
    


let index=0;
let total = questions.length;
let right =0, wrong=0;
const quesbox = document.getElementById("quebox")
const optioninputs = document.querySelectorAll(".option")
const loadquestion = () => {
    if(index === total){
        return endQuiz()
    }
    
    
    const data = questions[index]
    
    quesbox.innerText =`${index+1} ${data.que}`;
   
    optioninputs[0].nextElementSibling.innerText =data.a;
    optioninputs[1].nextElementSibling.innerText =data.b;
    optioninputs[2].nextElementSibling.innerText =data.c;
    optioninputs[3].nextElementSibling.innerText =data.d;
}
    
    const submitQuiz = () => {
        const data = questions[index];
        const ans = getAnswer()
        if( ans=== data.correct) {
            right++;
        } else {
            wrong++;
        }
        index++;
        loadquestion();
        return;
    }
    const getAnswer = () => {
        let answer;
        optioninputs.forEach(
            (input) => {
                if(input.checked){
                   
                answer = input.value
                
                } 
            }
        )
       return answer;
    }
      const reset = () => {
        optioninputs.foreach(  
            (input) => {
                input.checked = false
            }
        )
      };
      const endQuiz = () => {
        document.getElementById("box").innerHTML =`
        <div style="text-align-center">
         <h3> Thank you for playing Quiz
        <h2> ${right} / ${total} are correct<h2>
        </div>`
      }

loadquestion();




