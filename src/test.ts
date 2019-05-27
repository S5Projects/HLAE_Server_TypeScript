import mirvpgl from './mirvpgl';

var pgl = new mirvpgl(31337,"/winter");

pgl.emitter.on('cmd',(cmd) => {
    console.log(cmd)
})

pgl.emitter.on('version',(v) => {
    console.log(v)
})

pgl.emitter.on('cam',(data) => {
    console.log(data)
})

pgl.emitter.on('gameEvent',(data) => {
    console.log(JSON.parse(data))
})

pgl.emitter.on('close',() => {
    console.log("CONNECTION CLOSED!")
})

pgl.emitter.on('error',(e) => {
    console.log("CONNECTION ERROR!")
    console.error(e)
})