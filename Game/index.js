
/**
 * The player object.
 */
var player = {
    firstName: "",
    health: 100,
    invetory: [],
    currentLocation: "start"
};

/**
 * Room entities
 */
var rooms = {
    start: {
        description: "You are in a dark room... You have hallway to the north and a door to the east",
        exits: {
            north: "hallway"
        }
    },
    hallway: {
        description: "You are in scary hallway... there is zombies behind you, and door to the east",
        exits: {
            back: "start",
            behind: "zombies",
            east: "door"
        }
    }
}

/**
 * Go function should allow the user to move from one room to another.
 * the direction must be avilable in the current room.
 * @param {string} direction 
 */
function go(direction){
    var currentLocation = player.currentLocation;
    var roomObject = rooms[currentLocation];
    var roomExits = roomObject.exits;

    if(!roomExits[direction]){
        return console.log("Sorry, you cannot go this way...")
    }

    player.currentLocation = roomExits[direction];
}

// Commands structure
// [action] [objective]
// go [ direction ]
// take [ object ]
// look
// use [ object ]

/**
 * The function should break down the command, and call the right function
 * with the required arguments.
 * In case the command isn't supported, tell the user and return.
 * @param {string} command - The command provided by the user
 */
function parseCommand(command){

    if(typeof command !== "string"){
        throw new TypeError("Command should be a str")
    }

    var commandBreakdown = command.split(' ');
    var action = commandBreakdown.shift();
    var objective = commandBreakdown.join(' ');

    switch (action){
        case "go":
            go(objective);
            break;
        default:
            console.log('this action is...');
            break;
    }

}

/**
 * Main game loop
 * Each iteration shpuld do the following:
 * 1. Print the current room description to the log
 * 2. Print player stats to the log
 * 3. Ask the user to prompt a command
 * 4. Send the command to the commandParser
 * 5. If user have the treasure in the inventory, he wins
 * 6. If the user run out pf health, he lose.
 */
while(player.health > 0){

    var currentRoom = rooms[player.currentLocation]
    console.log(currentRoom.description);
    console.log("This is your health: ", player.health)
    console.log("This is your Invetory: ", player.invetory)

    var userCommand = prompt("What do you want to do?");
    parseCommand(userCommand);

}