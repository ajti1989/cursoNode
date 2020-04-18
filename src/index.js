import fs from 'fs'

const file = process.argv[2]

//al no ser asincrono hasta que no termina no se muestra, por esa razón se ejecuta antes la última linea de código
fs.readFile(file, (err, contents) =>{
    if(err){
        return console.log(err)
    }

    const lines = contents.toString().split('\n')

    for(let line of lines){
        console.log(`Número de caracteres por linea: ${line.length}`)
    }

    console.log(`Número de elementos que : ${lines.length}`)
})

console.log(`Se está leyendo el fichero: ${file}`)