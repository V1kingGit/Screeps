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

•	Takes energy from link to store in Storage or Tower.

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

• Signs another Room's Controller.
