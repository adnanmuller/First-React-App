import React from 'react'
import {render} from 'react-dom'

function Notes(props){
  return(
    <div id="notesContainer">
    <React.Fragment>
    {props.info1?<p className="text-danger">{props.info1}</p>:""}
    {props.info2?<p>{props.info2}</p>:""}
    {props.info3?<p>{props.info3}</p>:""}
    </React.Fragment>
    </div>
  )
}










export default Notes
