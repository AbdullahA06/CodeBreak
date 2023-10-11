const answer =Number( Math.floor(Math.random() * (3 - 1 + 1) + 1) +""+ Math.floor(Math.random() * (3 - 1 + 1) + 1)+ ""+ Math.floor(Math.random() * (3 - 1+ 1) + 1))
const button = document.querySelector("button");
let win = 0;

button.addEventListener("click", guess);




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
