
function greeting(name) {
    var today = new Date();
    var hour = today.getHours();
    var greet;

    if(hour >= 4 && hour <= 11 ) {
        greet = "morning"
    }
    else if( hour >= 12 && hour <= 16 ) {
        greet = "afternoon"
    }
    else if (hour >= 17 && hour <= 19) {
        greet = "evening"
    }
    else {
        greet = "night";
    }

    console.log("Good " + greet  +", " + name + "!");

}

greeting("sandrine");