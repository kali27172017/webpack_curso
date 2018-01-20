import './estilos.css'
import { mensaje , delayedMessage } from './message.js'
import data from './cursos.json';



data.cursos.map((el) => {
    console.log(el.name)
    console.log(el.profesor)
})




console.log('HOLA MUNDO')
delayedMessage()

