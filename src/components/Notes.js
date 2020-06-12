import React from 'react'
import {render} from 'react-dom'
import {Transition} from "react-transition-group";
import {CSSTransition, TransitionGroup} from "react-transition-group";
const $=require("jquery");



function Notes(props){
  var target1=document.getElementById("NotesInfo");
  console.log(target1)
  
  return(

    <div id="notesContainer">


    <React.Fragment>
    {props.info1?<p className="text-danger" id="NotesInfo" >{props.info1}</p>:""}
    {props.info2?<p>{props.info2}</p>:""}
    {props.info3?<p>{props.info3}</p>:""}
    </React.Fragment>


    </div>

  )
}


function fadeInNotesInfo(){
  let target=document.getElementById("NotesInfo");
  target.fadeIn();
}







export default Notes
