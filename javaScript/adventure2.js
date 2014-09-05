var user = prompt("Go east or west?").toUpperCase();

switch(user){
    case "EAST":
        
        var stickRock = prompt("You are fighting panthers. Do you use a stick or rocks?").toUpperCase();
        if (stickRock === "ROCKS") {
            console.log("You're a bad aimer, and you're dead")}
            else if(stickRock === "STICK") {
                console.log("Great job! You got him in the mouth! You survive another day."); 
                } else { 
                    console.log("you're dead.");
                };
            

        break; 
        
      case "WEST":
        
        var playRun = prompt("You are fighting bears. Do you play dead or run?").toUpperCase();
        if (playRun = "PLAY DEAD") {
        var playDead = prompt("Are you really going good at it?").toUpperCase();}
        
        if(playRun === "RUN") {
        var run = prompt("Are you a fast runner?").toUpperCase();}
        
                    
            if (run === "YES" || playDead === "YES") {console.log("You live another day!")}; 
        if (run === "YES" && playDead === "YES") {console.log("You're amazing at everything!")} 
               else {
        console.log("Learn how to read.");  
               }
                    break; 
        
        case "NORTH":
        console.log("To the ice fields."); 
        break; 
        
         default:
        console.log("Learn how to read."); 
    
    }
    