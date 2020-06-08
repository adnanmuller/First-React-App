import React from 'react'
import {render} from 'react-dom'

function Notes(props){
  return(
    <div id="notesContainer">
    <React.Fragment>
    <p>{props.info1}</p>
    <p>{props.info2}</p>
    </React.Fragment>
    </div>
  )
}










export default Notes
