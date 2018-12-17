// do action X to thing Y until condition Z is met

var
  benchmark = 0
;

const	TASK_HARVEST	1
const	TASK_TRANSFER	2

const	PRIORITY_LOW	1
const	PRIORITY_MEDIUM	2
const	PRIORITY_HIGH	3

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

RoomObject.prototype.createTask = function(vTask, vName, vTargetid, vTargetPos, vPriority)
{
	let	freeSlot,
		taskData = { task: vTask, name: vName, targetid:, vTargetid, targetPos: vTargetPos, priority: vPriority };
	for(i = 0; i < this.memory.tasks; i ++)
	{
		if(!this.memory.tasks[i])
		{
			freeSlot = i;
			break;
		}
	}
	this.memory.tasks[freeSlot] = taskData;
}

function newTask(creep)
{
	let sysselmann = creep.memory.sysselmann,
		assigned[10],
		priorityLevel = PRIORITY_LOW;
	for(i = 0; i < sysselmann.memory.tasks.length; i ++)
	{
		if(sysselmann.memory.tasks[i].priority < priorityLevel) continue;
		if(canDoTask(creep.memory.role, sysselmann.memory.tasks[i]))
		{
			for(x = 0; x < assigned.length; x ++)
			{
				if(!assigned)
				{
					assigned[x] = sysselmann.memory.tasks[i];
					if(sysselmann.memory.tasks[i].priority > priorityLevel)
					{
						assigned = [];
						priorityLevel = sysselmann.memory.tasks[i].priority;
					}
					break;
				}
			}
		}
	}
	creep.memory.task = findClosestByRange(assigned.targetPos);
}

Creep.prototype.task = function(assignment)
{
	this.memory.task = assignment;
}

Creep.prototype.run = function()
{
	
}

module.exports.loop = function()
{
	for(var name in Memory.creeps)
	{
		if(!Game.creeps[name])
		{
			delete Memory.creeps[name];
		}
		else
		{
			let creep = Game.creeps[name];
			if(creep.isIdle)
			{
				newTask(creep);
			}
			creep.run();
		}
	}
	
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
