import mirvpgl from './mirvpgl';

var pgl = new mirvpgl(31337,"/mirv"); 
// 31337 = port, /mirv is path.
// for Example...
// mirv_pgl url "ws://127.0.0.1:31337/mirv"


// fires when you type commands in console directly...?
pgl.emitter.on('cmd',(cmd) => {
    console.log(`CMD : ${cmd}`)
})


// fires when CS:GO client connects mirv_pgl server
pgl.emitter.on('version',(v) => {
    console.log(`VERSION : ${v}`)
    pgl.sendcommand(`echo RECEIVED VERSION! version : ${v}`) // Sending back version info
})

// fires when CS:GO client's map has changed
pgl.emitter.on('map',(map) => {
    console.log(`map : ${map}`)
})

// fires each camera pos change
// To receive cam info, Enter below
// mirv_pgl datastart;
pgl.emitter.on('cam',(data) => {
    console.log(data)
})

// fires if you chose version3 mirv_pgl
// mirv_pgl start 3
pgl.emitter.on('gameEvent',(data) => {
    console.log(JSON.parse(data))
})

// mirv_pgl stop
pgl.emitter.on('close',() => {
    console.log("CONNECTION CLOSED!")
})

// error handling
pgl.emitter.on('error',(e) => {
    console.log("CONNECTION ERROR!")
    console.error(e)
})