var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");

player_1_score=0;
player_2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player_1_score;
document.getElementById("player2_score").innerHTML=player_2_score;

document.getElementById("player_question").innerHTML="Question turn : "+player1_name
document.getElementById("player_answer").innerHTML="Answer turn : "+player2_name;

function send() {
    Number1=document.getElementById("number1").value;
    Number2=document.getElementById("number2").value;
    AnsweR=parseInt(Number1)*parseInt(Number2);
    question_number = "<h4>" + Number1 + " X "+ Number2 +"</h4>";
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";
      check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
      row = question_number + input_box + check_button ;
       document.getElementById("output").innerHTML = row;
        document.getElementById("number1").value = "";
     document.getElementById("number2").value = "";

}