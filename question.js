var pos = 0, test, test_status, question, choice, choices, chA, chB, chC,chD, correct = 0;
var questions = [
  ["You can make telephone calls over the Internet using a technology called…?","Skynet", "VoIP", "Intertel", "Telenet", "B"],
   ["Bluetooth technology supports networking over?","Ethernet cable connections", "USB cable connections", "Wi-Fi standard wireless radio connections", "Its own standard wireless radio connections", "D"],
  ["A computer must have an IP address when… ?","Connecting to a home network router","Playing media from the hard drive", "Communicating with another computer using TCP", "Connecting to a Wi-Fi hotspot","C"],
  ["Limewire, Kazaa and Bearshare are all examples of?", "Brand names of networking hardware products", "Wireless network communication protocols","Web sites that store MP3 music files and Malware","Software applications for peer-to-peer connection (P2P) file sharing", "D"],
  ["A home computer network is sometimes also called a?","WAN" ,"SAN", "LAN", "MAN","C"],
  ["A home router is ?", "Boils water", "Enables safe sharing of resources among network devices in the home", "Makes home computers run faster", "Helps people build Web sites", "B"],
	["Wi-Fi is a ?", "Popular technologies and standards for wireless computer networking","Computer programs that help people make money on the Internet", "Type of computer", "Type of network cable","A"]
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