let roleHarvester =
{
	newTask: function(creep)
	{
		if(creep.carry.energy < creep.carry.energyCapacity)
		{
			creep.memory.task = {task: TASK_HARVEST, sources[0].id, sources[0].pos, PRIORITY_MEDIUM
			
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
