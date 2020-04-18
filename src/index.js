import readline from 'readline'

import async from './async'
import events from './events'

const file = process.argv[2]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(
    `Como quiere leer el fichero?
    1. De forma asincrona (default)
    2. Con eventos
    Seleccione una opcion: `,
    value => {
        console.log(`Ha seleccionado el valor ${value}\n\n`)

        switch (value){
            case '2':
                events(file)
                break;
            case '1':
                default:
                    async(file)
        }

        rl.close()
    }


)
