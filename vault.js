const answer =Number( Math.floor(Math.random() * (3 - 1 + 1) + 1) +""+ Math.floor(Math.random() * (3 - 1 + 1) + 1)+ ""+ Math.floor(Math.random() * (3 - 1+ 1) + 1))
const button1 = document.querySelector("button1");
const button2 = document.querySelector("button2");
const button3 = document.querySelector("button3");
const button4 = document.querySelector("button4");
let win = 0;




button1.addEventListener("click", clear2);
button2.addEventListener("click", guess);
button3.addEventListener("click", rules);
button4.addEventListener("click", reset);


function rules(){
  var rules = document.getElementById('rules');
  if (rules.style.visibility === "hidden"){
    rules.style.visibility = "visible";
  }
  else{
    rules.style.visibility = "hidden";
  }
 
}


function reset(){
  document.location.reload(true);
}


function clear2(){

    document.getElementById('fname1').value= null;
    document.getElementById('fname2').value= null;
    document.getElementById('fname3').value= null;
}



function guess() {

  

    if(win==0){
      const guess = Number(document.getElementById('fname1').value+document.getElementById('fname2').value+document.getElementById('fname3').value);  
    

    if(document.getElementById('attempts').innerHTML==0){
        document.getElementById('fname1').value= null;
        document.getElementById('fname2').value= null;
        document.getElementById('fname3').value= null;
        const attempt3= document.createElement("p");
        attempt3.textContent = "You Lost!";
        document.body.appendChild(attempt3);
        alert("The Cops Arrived. You Are A Terrible CodeBreaker!");

        return "finished";
    }
    
    var range;
    function clear(){
        document.getElementById('fname1').value= null;
        document.getElementById('fname2').value= null;
        document.getElementById('fname3').value= null;
        const attempt= document.createElement("p");
        attempt.textContent = guess+" "+range;
        document.body.appendChild(attempt);
        document.getElementById('attempts').innerHTML=Number(document.getElementById('attempts').innerHTML)-1  
    }
  
  
  
  if(guess==answer){
  var range = "is correct!";
  alert("Congrats!! You Won!!");
  clear();
  win=win+1;
  
  }
  if(guess>answer){
  var range = "is too high!";
 
  clear();

}
  else if(guess<answer){
  var range= "is too low!";
 
  clear();
}
  
  
}
else if (win==1){
  document.getElementById('fname1').value= null;
        document.getElementById('fname2').value= null;
        document.getElementById('fname3').value= null;
  const attempt2= document.createElement("p");
        attempt2.textContent = "You Already Won!";
        document.body.appendChild(attempt2);
}
}
 
