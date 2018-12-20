const	TASK_HARVEST	= 1
const	TASK_TRANSFER	= 2

import {TASK_HARVEST, TASK_TRANSFER} from '../main';

function isEnergyStructure(structure)
{
	return structure.energy != undefined && structure.energyCapacity != undefined;
}

Creep.prototype.task = function(vTask, vTargetid, vTargetPos)
{
    this.memory.task = null;
    this.memory.task = taskData = { task: vTask, targetid: vTargetid, targetPos: vTargetPos };
}

let roleHarvester =
{
	newTask: function(creep)
	{
		if(creep.carry.energy < creep.carry.energyCapacity)
		{
			let sources = creep.room.find(FIND_SOURCES),
				sourceOccupied = 0;
			for(x = 0; x < sources.length; x ++)
			{
		 		for(let name in Game.creeps)
				{
					if(Game.creeps[name].memory.task.targetid == sources[x].id)
					{
                        sourceOccupied = 1;
                        break;
					}
				}
				if(!sourceOccupied)
				{
                    creep.task(TASK_HARVEST, sources[x].id, sources[x].pos);
					break;
				}
				sourceOccupied = 0;
			}
		}
		else
		{
			let jarldomStorage = creep.room.memory.jarldom.memory.storage;
			if(jarldomStorage) creep.task(TASK_TRANSFER, jarldomStorage, getObjectById(jarldomStorage).pos);
			else
			{
				let targets = creep.room.find(FIND_MY_STRUCTURES, { filter: (structure) =>
                                { return (isEnergyStructure(structure)) && structure.energy < structure.energyCapacity; } });
				creep.task(TASK_TRANSFER, targets[0].id, targets[0].pos);
			}
		}
    }
	work: function(creep)
	{
		switch(creep.memory.task)
		{
			case TASK_HARVEST:
			{
				if(creep.harvest(getObjectById(creep.memory.task.targetid)) == ERR_NOT_IN_RANGE)
				{
					//room.memory.paths.sourcepath[0] = { startobject: Game.spawns['Spawn1'], endobject: sources[0].id, path:  }
					switch(creep.memory.task.targetid)
					{
						case creep.room.memory.paths.sourcepath[0].endobject: creep.moveByPath(creep.room.memory.paths.sourcepath[0].path);
						case creep.room.memory.paths.sourcepath[1].endobject: creep.moveByPath(creep.room.memory.paths.sourcepath[1].path);
						default: creep.moveTo(getObjectById(creep.memory.task.targetid));
					}
				}
            }
            case TASK_TRANSFER:
            {
                if(creep.transfer(getObjectById(creep.memory.task.targetid), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
				{
					//room.memory.paths.sourcepath[0] = { startobject: Game.spawns['Spawn1'], endobject: sources[0].id, path:  }
					switch(creep.memory.task.targetid)
					{
						case creep.room.memory.paths.sourcepath[0].endobject: creep.moveByPath(creep.room.memory.paths.sourcepath[0].path);
						case creep.room.memory.paths.sourcepath[1].endobject: creep.moveByPath(creep.room.memory.paths.sourcepath[1].path);
						default: creep.moveTo(getObjectById(creep.memory.task.targetid));
					}
				}
            }
		}
	}
}

module.exports = roleHarvester;
