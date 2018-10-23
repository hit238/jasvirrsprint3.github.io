var pos = 0, test, test_status, question, choice, choices, chA, chB, chC,chD, correct = 0;
var questions = [
  ["1.Javascript is _________ language.","Programming", "Application", "None of These", "Scripting", "D"],
   ["2.JavaScript is ______ Browser","Server", "ISP", "None of these", "A"],
  ["3.JavaScript is designed for following purpose -","To Style HTML Pages","To add interactivity to HTML Pages.", "To Perform Server Side Scripting Opertion", "To Execute Query Related to DB on Server","B"],
  ["4.JavaScript Code is written inside file having extension __________.", ".jvs", ".javascript",".js",".jsc", "C"],
  ["5.Local Browser used for validations on the Web Pages uses __________.","Java" ,"CSS", "HTML", "JS","D"],
  ["6.JavaScript Code can be called by using _________.", "Function", "RMI", "Triggering Event", "Preprocessor", "A"],
  ];
  
function get(x){
  return document.getElementById(x);
}
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    
    pos = 0;
    correct = 0;
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  chD = questions[pos][4];
  test.innerHTML = "<h3>"+question+"</h3>";
  
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
 
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  
  if(choice == questions[pos][5]){
    correct++;
  }
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);