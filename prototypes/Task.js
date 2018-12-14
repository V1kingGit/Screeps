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

//var taskdata = { task: 'TaskName', name: Game.creeps['CreepName'], targetid: sources[0].id, targetPos: sources[0].pos, done: null }

### Implementation example

import {Jarldom, JarldomLevel, DEFCON} from '../Jarldom';

#define	TASK_TRANSFER	19

Bryti.prototype.Village = function()
{
	var
		spawns,
		extensions,
		links, // UNUSED
		towers // UNUSED
	;
	
	this.spawns = Jarldom.spawns;
	this.extensions = Jarldom.extensions;
	
	memory: HatcheryMemory;
	spawns: StructureSpawn[]; 								// List of spawns in the hatchery
	availableSpawns: StructureSpawn[]; 						// Spawns that are available to make stuff right now
	extensions: StructureExtension[]; 						// List of extensions in the hatchery
	energyStructures: (StructureSpawn | StructureExtension)[]; 	// All spawns and extensions
	link: StructureLink | undefined; 						// The input link
	towers: StructureTower[]; 								// All towers that aren't in the command center
	battery: StructureContainer | undefined;				// The container to provide an energy buffer
	transportRequests: TransportRequestGroup;				// Box for energy requests
	overlord: QueenOverlord | BunkerQueenOverlord;			// Hatchery overlord if past larva stage
}

function newTask(vTask, vName, vTargetid, vTargetPos)
{
	var taskdata = { task: vTask, name: vName, targetid:, vTargetid, targetPos: vTargetPos };
	
}

module.exports.loop = function ()
{
	if(Village.energy < Village.energyCapacity)
	{
		newTask(TASK_TRANSFER, 'creep', Game.spawns['Spawn1'], Game.spawns['Spawn1'].pos);
	}
}

function getBryti(creep)
{
	if(creep.memory.bryti)
	{
		return King.brytis[creep.memory.bryti];
	}
	else return null;
}
