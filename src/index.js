
//Capturar errores, hay mas acciones
process.on('unhandledRejection', (err,p) =>{
    console.log(`Custom unhandledRejection ${err}`)
})


process.on('uncaughtException', (err) => {
    console.log(`Custom uncaughtException ${err}`)
})
// Promise(resolve => JSON.parse({color: 'blue'}))

throw 'mi error'