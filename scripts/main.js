// do action X to thing Y until condition Z is met

var
  benchmark = 0
;

Creep.prototype.isIdle = function()
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
		console.log('| Technical | AvgCPU:[' + Math.round((benchmark / 30 + 0.0001) * 100) / 100 + '%] GCL:[' + Game.gcl.level + '] Rooms:[' + roomAmount + '] Tick:[' + Game.time + ']')
		console.log('| Population | Creeps:[' + amount + '] Workers:[' + workerAmount + '] Haulers:[' + haulerAmount + '] Miners:[' + minerAmount + '] Engineers:[' + engineerAmount + ']')
		console.log('________________________________________________________________')
		benchmark = 0;
	}
}
