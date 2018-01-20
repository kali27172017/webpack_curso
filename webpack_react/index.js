import './estilos.css'
import { mensaje , delayedMessage } from './message.js'
import data from './cursos.json';

import React , { Component } from 'react'
import { render } from 'react-dom'




class Cursos extends Component{
   render(){
       return(
            <ul className='lista'>
               {
                   this.props.data.cursos.map((cursosData) => {
                      return  <Curso {...cursosData} />
                   })
               }
            </ul>    
       )
   }

}


function Curso(props){
    return(
          <li>
             {props.name}
             {props.profesor}
          </li>   
    )
}




render( <Cursos data={data}/>, document.getElementById('main'))


/*data.cursos.map((el) => {
    console.log(el.name)
    console.log(el.profesor)
})*/





delayedMessage()

