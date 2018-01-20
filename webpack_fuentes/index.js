import './estilos.css'
import { mensaje , delayedMessage } from './message.js'
import CreateDom from './create.js'
import RenderDom from './render.js'
import  leoImg from './leo.jpg';


console.log('HOLA MUNDO')
const imagen = CreateDom(leoImg,'img')
RenderDom(imagen)
delayedMessage()

