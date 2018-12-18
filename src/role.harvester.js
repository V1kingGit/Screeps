const	TASK_HARVEST	1
const	TASK_TRANSFER	2

function isEnergyStructure(structure)
{
	return structure.energy != undefined && structure.energyCapacity != undefined;
}

let roleHarvester =
{
	newTask: function(creep)
	{
		if(creep.carry.energy < creep.carry.energyCapacity)
		{
			let sources = creep.room.find(FIND_SOURCES)
				sourceOccupied = 0;
			for(x = 0; x < sources.length; x ++)
			{
		 		for(let i in Game.creeps)
				{
					if(Game.creeps[i].memory.task.targetid == sources[x].id)
					{
						sourceOccupied = 1;
						break;
					}
				}
				if(!sourceOccupied)
				{
					creep.memory.task = { task: TASK_HARVEST, sources[x].id, sources[x].pos };
					break;
				}
				sourceOccupied = 0;
			}
		}
		else
		{
			let targets = creep.room.find(FIND_MY_STRUCTURES),
				jarldomStorage = creep.room.memory.jarldom.memory.storage;
			if(jarldomStorage)
					creep.memory.task = { task: TASK_TRANSFER, jarldomStorage, getObjectById(jarldomStorage).pos };
			else
			{
				let targets = creep.room.find(FIND_MY_STRUCTURES, { filter: (structure) =>
								{ return (isEnergyStructure(structure)) && structure.energy < structure.energyCapacity; } });
				creep.memory.task = { task: TASK_TRANSFER, targets[0].id, targets[0].pos };
			}
		}
	}
	work: function()
	{
	}
	move: function()
}

module.exports = roleHarvester;

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
