# Task Experiments

### Task Storage

console.log('-------------------------');

var sources = Game.spawns['Spawn1'].room.find(FIND_SOURCES); // Finds a source
    
console.log('id: ' + sources[0].id); // Converts the source to an ID
console.log('object: ' + Game.getObjectById(sources[0].id)); // Converts the source ID back to an object

var taskplain = { task: 'Harvest', target: sources[0].id, position: sources[0].pos }; // Saves the source ID, easier than the object, as compressed data

var taskstring = JSON.stringify(taskplain); // Saves the compressed data as a string
var taskdata = JSON.parse(taskstring); // Converts the string back to data

console.log('string: ' + taskstring);
console.log('data: ' + taskdata);

console.log('get: ' + taskdata.task)

// Store taskstring in Memory
// Convert memory back to taskdata
// Use taskdata.X to extract different information from taskdata

###### Output: 
 
-------------------------
[12:08:40 PM]id: 1f190211362fbaccc1cfed6a
[12:08:40 PM]object: [source #1f190211362fbaccc1cfed6a]
[12:08:40 PM]string: {"task":"Harvest","target":"1f190211362fbaccc1cfed6a","position":{"x":35,"y":20,"roomName":"sim"}}
[12:08:40 PM]data: [object Object]
[12:08:40 PM]get: Harvest

### Task Setup

//var taskdata { task: 'TaskName', name: Game.creeps['CreepName'], targetid: sources[0].id, targetPos: sources[0].pos, done: null }

var taskdata { task: 