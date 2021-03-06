// do action X to thing Y until condition Z is met

var
  benchmark = 0
;

export const	TASK_HARVEST	= 1
export const	TASK_TRANSFER	= 2

const	PRIORITY_LOW	= 1
const	PRIORITY_MEDIUM	= 2
const	PRIORITY_HIGH	= 3

let roleHarvester = require('role.harvester');
let adminKing = require('Kingdom/King');
let adminJarl = require('Jarldom/Jarl')

// Sysselmann.newTask(TASK_HARVEST, 'creep', sources[0].id, sources[0].pos, PRIORITY_MEDIUM);

function canDoTask(role, task)
{
	switch(task)
	{
		case TASK_HARVEST:
		{
			switch(role)
			{
				case 'harvester': return true;
				default: return false;
			}
		}
		default: return false;
	}
}

/*RoomObject.prototype.createTask = function(vTask, vName, vTargetid, vTargetPos, vPriority)
{
	let	freeSlot,
		taskData = { task: vTask, name: vName, targetid: vTargetid, targetPos: vTargetPos, priority: vPriority };
	for(i = 0; i < this.memory.tasks; i ++)
	{
		if(!this.memory.tasks[i])
		{
			freeSlot = i;
			break;
		}
	}
	this.memory.tasks[freeSlot] = taskData;
}*/

Creep.prototype.hasValidTask = function()
{
    if(this.memory.task && isValidTask(this, this.memory.task)) return this.memory.task;
    else return 0;
}

function isValidTask(creep, task)
{
    switch(task.task)
    {
        case TASK_HARVEST:
        {
            if(creep.carry.energy >= creep.carryCapacity) return 0;
            if(getObjectById(task.targetid).energy <= 0) return 0;
        }
        case TASK_TRANSFER:
        {
            if(!creep.carry.energy) return 0;
            let target = getObjectById(task.targetid);
            if(target.energy >= target.energyCapacity) return 0;
        }
    }
}

module.exports.loop = function()
{
    let creeps = _.values(Game.creeps);

    // Separate creeps by role
    let harvesters = _.filter(creeps, creep => creep.name.includes("Harvester"));
    //let upgraders = _.filter(creeps, creep => creep.name.includes("Upgrader"));
    //let patrollers = _.filter(creeps, creep => creep.name.includes("Patroller"));

	for(var name in Memory.creeps)
	{
		if(!Game.creeps[name])
		{
			delete Memory.creeps[name];
		}
		else
		{
			let creep = Game.creeps[name];
			if(creep.hasValidTask())
			{
				roleHarvester.newTask(creep);
			}
			else
			{
				roleHarvester.work(creep);
			}
		}
    }

    for(var )
	
	// -- Info Log --
	benchmark = benchmark + Game.cpu.getUsed();
	if(Game.time % 30 == 0)
	{
		moduleBaseBuilding.run(spawn1.room.controller.level, spawn1)
		console.log('_____[ ' + Date() + ' ]_____')
		for(let i in Game.rooms)
		{
			roomAmount ++;
			console.log('| Room ' + i + ' | Creeps:[' + Game.rooms[i].find(FIND_MY_CREEPS).length + '] Workers:[' + NaN + ']');
		}
		console.log('---------------------------[ Global ]---------------------------')
		console.log('| Technical | AvgCPU:[' + Math.round((benchmark / 30 + 0.0001) * 100) / 100 + '%] GCL:[' + Game.gcl.level + '] Rooms:[' +  + ']')
		console.log('| Population | Creeps:[' +  + '] Workers:[' +  + '] Haulers:[' +  + '] Miners:[' +  + '] Engineers:[' +  + ']')
		console.log('________________________________________________________________')
		benchmark = 0;
	}
}
