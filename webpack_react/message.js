import RenderDom from './render.js'
import CreateDom from './create.js'


const waitTime = new Promise((todoOk,todoMal)  => {
   setTimeout(()  => {
       todoOk('Han pasado tres segundos')
   },3000)
})



module.exports = {
    mensaje:'HOLA MUNDO FELIZ',
    delayedMessage:async () => {
       const men = await waitTime;
       const ele = CreateDom(men,'p')
       //const element = document.createElement('p')
       //element.textContent = men

       RenderDom(ele)
    }
}


