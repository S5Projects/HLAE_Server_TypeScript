import mirvpgl from './mirvpgl';

var pgl = new mirvpgl(31337, "/radar"); 

pgl.emitter.on('gameEvent',(data:any) => {
    var obj = JSON.parse(data)
	if (obj.name == "player_footstep") {
        // TODO...
	}
})