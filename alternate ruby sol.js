$(document).ready(function(){
 //====Players selection (.click = onclick)====
 $('.player').click (function(){
   var userselection = $(this).attr('id')
   console.log(userselection)
   compPlay()
 });
 
 //=====computer selection from an array=====
   function compPlay() {
     var  gameArray = [
       "rock",
       "paper",
       "scissors"
     ];
     var compselection = gameArray[Math.floor(Math.random() * gameArray.length)];
     console.log(compselection)
     return compselection

     anwsers(userselection, compselection)
  };

 //if statment to compare anwsers
 function anwsers (selection, compselection){
   if
     ((userselection === "rock" && compselection === 'scissors') ||  
     (userselection === 'paper' && compselection === 'rock') ||
     (userselection === 'scissors' && compselection === 'paper')){
       console.log.user_win ('winner')}
     
   else if (userselection === compselection){  
       console.log.user_win ('draw')}
   else {console.log.user_lose ('loser')};
 };
});`