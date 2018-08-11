var questions = ['1+4=?' , '1+7=?' , '4-3=?' , '8-5=?'];
var count = 0;


function myFunction() {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null && person != " " ) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! We will start quiz as soon as you press start";
        document.getElementById("star").style.display = "block";
    }
}

function afunc(){
   document.getElementById("ques").innerHTML = questions[0];
   count=0;
   document.getElementById("demo").innerHTML = "";
   document.getElementById("skr").innerHTML = "";
   document.getElementById("hela").style.display="none";
}

function bfunc(i){
  var c = i+1;
  var d = questions.length;
  document.getElementById("ques").innerHTML = questions[c];
  ans();
}

function cfunc(i){
  var c = i-1;
  var d = questions.length;
  document.getElementById("ques").innerHTML = questions[c];
  ans();
}
function Next(){
  document.getElementById("result").innerHTML = "";
    var i = 0;
    var c = questions.length;

    for(i; i<c; i++){
      if(document.getElementById("ques").innerHTML === questions[i]){
        bfunc(i);
        break;
      }
   }
}

function previous(){
  var i = 0;
  var c = questions.length;

  for(i; i<c; i++){
    if(document.getElementById("ques").innerHTML === questions[i]){
      cfunc(i);
      break;
    }
 }
}

function score(){
  document.getElementById("skr").innerHTML = "Hey!" + " your score was " + count + " Out of 4";
}
function ans(){
   if(document.getElementById("ques").innerHTML === "1+4=?"){
         var opt1 = document.createElement("button");
         opt1.innerHTML = "6";
         opt1.onclick = function opta(){
              document.getElementById("result").innerHTML = "your answer is wrong.";
              document.getElementById("result").style.color = "red";
               setTimeout(Next, 1000);
               opt1.style.display = "none";
               opt2.style.display = "none";
               opt4.style.display = "none";
               opt3.style.display = "none";
            }
         document.body.appendChild(opt1);

         var opt2 = document.createElement("button");
         opt2.innerHTML = "3";
         opt2.onclick = function optb(){
           document.getElementById("result").innerHTML = "your answer is wrong.";
           document.getElementById("result").style.color = "red";
              setTimeout(Next, 1000);
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
         }
         document.body.appendChild(opt2);

         var opt3 = document.createElement("button");
         opt3.innerHTML = "5";
         opt3.onclick = function optc(){
           document.getElementById("result").innerHTML = "your answer is right.";
           document.getElementById("result").style.color = "green";
              setTimeout(Next, 1000);
                count++;
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
           }
         document.body.appendChild(opt3);

         var opt4 = document.createElement("button");
         opt4.innerHTML = "8";
         opt4.onclick = function optd(){
           document.getElementById("result").innerHTML = "your answer is wrong.";
           document.getElementById("result").style.color = "red";
              setTimeout(Next, 1000);
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
         }
         document.body.appendChild(opt4);

   }

  else if(document.getElementById("ques").innerHTML === "1+7=?"){
         var opt1 = document.createElement("button");
         opt1.innerHTML = "6";
         opt1.onclick = function opta(){
           document.getElementById("result").innerHTML = "your answer is wrong.";
           document.getElementById("result").style.color = "red";
              setTimeout(Next, 1000);
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
         }
         document.body.appendChild(opt1);

         var opt2 = document.createElement("button");
         opt2.innerHTML = "9";
         opt2.onclick = function optb(){
           document.getElementById("result").innerHTML = "your answer is wrong.";
           document.getElementById("result").style.color = "red";
              setTimeout(Next, 1000);
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
         }
         document.body.appendChild(opt2);

         var opt3 = document.createElement("button");
         opt3.innerHTML = "5";
         opt3.onclick = function optc(){
           document.getElementById("result").innerHTML = "your answer is wrong.";
           document.getElementById("result").style.color = "red";
              setTimeout(Next, 1000);
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
         }
         document.body.appendChild(opt3);

         var opt4 = document.createElement("button");
         opt4.innerHTML = "8";
         opt4.onclick = function optd(){
           document.getElementById("result").innerHTML = "your answer is right.";
           document.getElementById("result").style.color = "green";
              setTimeout(Next, 1000);
               count++;
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
           }
         document.body.appendChild(opt4);
   }

   else if(document.getElementById("ques").innerHTML === "4-3=?"){
         var opt1 = document.createElement("button");
         opt1.innerHTML = "7";
         opt1.onclick = function opta(){
           document.getElementById("result").innerHTML = "your answer is wrong.";
           document.getElementById("result").style.color = "red";
              setTimeout(Next, 1000);
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
         }
         document.body.appendChild(opt1);

         var opt2 = document.createElement("button");
         opt2.innerHTML = "1";
         opt2.onclick = function optb(){
           document.getElementById("result").innerHTML = "your answer is right.";
           document.getElementById("result").style.color = "green";
              setTimeout(Next, 1000);
              count++;
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
         }
         document.body.appendChild(opt2);

         var opt3 = document.createElement("button");
         opt3.innerHTML = "5";
         opt3.onclick = function optc(){
           document.getElementById("result").innerHTML = "your answer is wrong.";
           document.getElementById("result").style.color = "red";
              setTimeout(Next, 1000);
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
           }
         document.body.appendChild(opt3);

         var opt4 = document.createElement("button");
         opt4.innerHTML = "8";
         opt4.onclick = function optd(){
           document.getElementById("result").innerHTML = "your answer is wrong.";
           document.getElementById("result").style.color = "red";
              setTimeout(Next, 1000);
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
         }
         document.body.appendChild(opt4);
   }

   else if(document.getElementById("ques").innerHTML === "8-5=?"){
         var opt1 = document.createElement("button");
         opt1.innerHTML = "8";
         opt1.onclick = function opta(){
           document.getElementById("result").innerHTML = "your answer is wrong.";
           document.getElementById("result").style.color = "red";
              setTimeout(Next, 1000);
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
         }
         document.body.appendChild(opt1);

         var opt2 = document.createElement("button");
         opt2.innerHTML = "3";
         opt2.onclick = function optb(){
           document.getElementById("result").innerHTML = "your answer is right.";
           document.getElementById("result").style.color = "green";
              setTimeout(Next, 1000);
                count++;
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
         }
         document.body.appendChild(opt2);

         var opt3 = document.createElement("button");
         opt3.innerHTML = "5";
         opt3.onclick = function optc(){
           document.getElementById("result").innerHTML = "your answer is wrong.";
           document.getElementById("result").style.color = "red";
              setTimeout(Next, 1000);
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
         }
         document.body.appendChild(opt3);

         var opt4 = document.createElement("button");
         opt4.innerHTML = "13";
         opt4.onclick = function optd(){
           document.getElementById("result").innerHTML = "your answer is wrong.";
           document.getElementById("result").style.color = "red";
              setTimeout(Next, 1000);
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
         }
         document.body.appendChild(opt4);
   }

   else{
     document.getElementById("ques").innerHTML="Quiz ends here.";
     score();
   }
}
