const answer =Number( Math.floor(Math.random() * (3 - 1 + 1) + 1) +""+ Math.floor(Math.random() * (3 - 1 + 1) + 1)+ ""+ Math.floor(Math.random() * (3 - 1+ 1) + 1))
const button = document.querySelector("button");


button.addEventListener("click", guess);




function guess() {

    if(document.getElementById('attempts').innerHTML==0){
        alert("The Cops Arrived. You Are A Terrible CodeBreaker!");

        return "finished";
    }

    function clear(){
        document.getElementById('fname1').value= null;
        document.getElementById('fname2').value= null;
        document.getElementById('fname3').value= null;
        const attempt= document.createElement("p");
        attempt.textContent = guess;
        document.body.appendChild(attempt);
        document.getElementById('attempts').innerHTML=Number(document.getElementById('attempts').innerHTML)-1
    }

  const guess = Number(document.getElementById('fname1').value+document.getElementById('fname2').value+document.getElementById('fname3').value);

  if(guess==answer){
  alert("Congrats!! You Won!!");
  clear();
  return "finished";
  }
  else if(guess>answer){
  alert("Too High");
  clear();

}
  else if(guess<answer){
  alert("Too Low");
  clear();
}
  else{
  alert("Whole Numbers Only!");
  }

}
