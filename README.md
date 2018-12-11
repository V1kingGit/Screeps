# Screeps

## Dev Notes

## Dev Plan
### Creeps:

#### Harvester

•	Builds a container, transfers energy to it, and calls on a Hauler.

•	If in an owned room, transfer energy to a link.

#### Hauler

•	Can be called by a full Container … (more).

•	Moves on predefined Paths.

•	Transfers Energy to other Haulers infront of it (moves forward or backward).

•	Transfers Energy to Storage (from sources, dropped energy, storages from other rooms).

#### Manager

• Takes energy from link to store in Storage or Tower.

#### Upgrader

• Takes energy from Storage to Upgrade the Controller.

### Experimental

#### Scout

• Used to discover new Rooms.

#### Reserver

• Reserves a Controller in a foreign Room, then calls a Harvester.

#### Nextroomer

• Builds up a Room without a Spawn.

#### Maintainer

• Maintains the base, as well as creates Walls and Ramparts.

### Additional

#### Diplomat

• Goes to another Room and sends a Message.

#### Signer

• Signs another Room's `Controller`.

### Tasks


name	string	Describes the action the task should do	"build"
creep	Creep	The creep the task is assigned to	[Creep worker_0]
target	RoomObject*	The target to perform an action on (*Exceptions: TaskDrop, TaskGoTo, TaskGoToRoom)	[ConstructionSite <id>]
targetPos	RoomPosition	The position of the target, accessible even if the target is not visible	[RoomPosition x y name]
settings	Object	Settings common to a given type of task (e.g. range of an action); shouldn't be modified on a per-instance basis	{targetRange: 3, workOffRoad: true}
options	Object	Options configurable for a specific instance of a task (e.g. don't invalidate task if target visibility is lost)	{blind: true, moveOptions: <options>}
data	Object	Data pertaining to a task instance	{resourceType: "ghodium"}
parent	Task|null	Task to revert to once the current task is finished	null
