// What if a user makes an inappropriate choice like 'dog'? How can we extend the function to handle that?
// What if players in the game could also choose Rope in this game?

// In this version, if both players make the same choice, the game returns a tie. What if the game didn't end there but instead asked both players for new choices?





var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

compare = function(choice1, choice2)
{ 
    if (choice1 === choice2) {
        return "The result is a tie!";
    };
    
    if(choice1 === "rock") {
       
       
    
     if(choice2 === "scissors") 
    {
        return "rock wins"; 
    }
  
    else {
        return "paper wins"; 
    }
    }
    
    if(choice1 === "scissors") {
       
       
    
     if(choice2 === "paper") 
    {
        return "scissors wins"; 
    }
  
    else {
        return "rock wins"; 
    }
    }
    
    
    if(choice1 === "paper") {
       
       
    
     if(choice2 === "scissors") 
    {
        return "scissors wins"; 
    }
  
    else {
        return "paper wins"; 
    }
    

    
}
};

compare(userChoice,computerChoice);
