let visitorsFirstName = "";
let visitorsLastName = ``;
let vistorsEmailAddress = '';

setTimeout(() => {

    /* visitorsFirstName = prompt("Hey, what is your first name?");
    visitorsLastName = prompt("And what is your last name?");
    vistorsEmailAddress = prompt("What is your email address?");

    const welcomeStatement = "Welcome"; */

    /**
     * String concatnation, String Interpolation
     * Concate using +
     * Interpolation ${}
     */
    // concatnation
    // console.log(welcomeStatement + " " + visitorsFirstName.toUpperCase());
    // console.log(`Your last name has ${visitorsLastName.length} charactors`);
    // console.log(`We will communicate with you using this email:-${vistorsEmailAddress}`);


    // Calculate the circumfress of a piece of land
    const pi = 22/7;
    const diameterOfLand = prompt("What is the diameter of your piece of lande?");
    console.log("typef of 200", typeof diameterOfLand);

    if( isNaN( diameterOfLand ) ){ // type coasion
        alert("Please refresh and try entering a number this time");
    }
    else{
        const circumfres = pi * Number(diameterOfLand);
        console.log(`Your land has a circumfres of ${ circumfres.toFixed(1) }`);
    }
    


}, 1000);


// Application Programming Interface