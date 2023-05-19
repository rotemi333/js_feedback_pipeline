
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
        },
        items: []
    },
    hallway: {
        description: "You are in scary hallway... there is zombies behind you, and door to the east",
        exits: {
            back: "start",
            behind: "zombies",
            east: "door locked"
        },
        items: ['key']
    },
    "door locked": {
        description: "You are in fornt of locked door. there is a keyhole",
        exits: {
            // east: "treasure room" -> Should be exist onlt if the key is used
        }
    },
    "treasure room": {
        description: "You are in the treasure room, look for it",
        items: ['treasure']
    }

}

function getCurrentRoomObject(){
    var currentLocation = player.currentLocation;
    return rooms[currentLocation];
}


function use(item){

    // check if the user have the item
    // if the player is located in the locked room and the item is key
    // we will do the following:
    // 1. key shouled be removed fomr the inventory
    // 2. we will add new exist to the locked door room

}


/**
 * Responsible for taking an item from the current room
 * and put it into the users inventory.
 * The item should be taken only if exist in the room.
 * The item should be removed from the room after it has been taken.
 * @param {string} item 
 */
function take(item){
    var roomObject = getCurrentRoomObject();
    var roomItems = roomObject.items;

    if(!roomItems.includes(item)){
        return console.log("This item is not located in ypur room...")
    }

    var itemIndex = roomItems.indexOf(item)
    player.invetory.push(item);
    roomItems.splice(itemIndex, 1);

    return console.log("We took the item!");
}


/**
 * Go function should allow the user to move from one room to another.
 * the direction must be avilable in the current room.
 * @param {string} direction 
 */
function go(direction){
    var roomObject = getCurrentRoomObject()
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
        case 'take':
            take(objective);
            break;
        default:
            console.log('this action is no supprted...');
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

    if(player.invetory.includes('treasure')){
        console.log("You win!!!!!!!!")
        break;
    }

}