

function createSandwich(ing){
    if(!ing){
        console.log("Sorry, cannot do it");
        return;
    }
    console.log("I'm creating the sanwich with this: ", ing)
}

function getIng(createSand){
    console.log("Goint to maekrt...")
    console.log("BUying staff...");
    var ing = ["tomato", "bread", "mayo"];

    try{
        createSand(ing);
    } catch(e){
        console.log("cannot create")
    }
}

getIng(createSandwich);