// do action X to thing Y until condition Z is met

var
  benchmark = 0
;

Creep.prototype.task = function(assignment)
{
	this.memory.task = assignment;
}

task.prototype.harvest = function()
{
	
}

module.exports.loop = function()
{
	
	
	// -- Info Log --
	benchmark = benchmark + Game.cpu.getUsed();
	if(Game.time % 30 == 0)
	{
		moduleBaseBuilding.run(spawn1.room.controller.level, spawn1)
		console.log('_____[ ' + Date() + ' ]_____')
		for(var i in Game.rooms)
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
