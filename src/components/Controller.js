import React from 'react'
import {render} from 'react-dom'
import PeopleList from './PeopleList.js'

const RenderPeople= render(
    <PeopleList />,
    document.getElementById('root2')
  )










class Controller extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};

  }
render(){
  let Nation=["RANDOM","AU", "BR", "CA", "CH", "DE", "DK", "ES", "FI", "FR", "GB", "IE", "IR", "NO", "NL", "NZ", "TR", "US"];
  let Gender=["Random","male","female"];
  return(
  <div className="text-center">
  <button  type="button" data-toggle="collapse" data-target="#demo" class="btn btn-dark" id="minimize">-</button>
  <div id="demo" class="collapse show">
  <button className="btn btn-dark" id="reloadButton" onClick={()=>RenderPeople.newrequest()}>Reload</button><br />
  <div className="centerButton"><button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot(1,"add")}>+1</button>
  <button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot(1,"sub")}>-1</button></div>
  <div className="centerButton"><button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot(10,"add")}>+10</button>
  <button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot(10,"sub")}>-10</button></div>
  <div className="centerButton"><button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot(20,"add")}>+20</button>
  <button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot(20,"sub")}>-20</button></div>
  <div className="centerButton"><button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot(50,"add")}>+50</button>
  <button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot(50,"sub")}>-50</button></div>
  <div className="centerButton"><button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot(100,"add")}>+100</button>
  <button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot(100,"sub")}>-100</button></div>
  <div class="form-group selector">
    <label for="sel1" className="labelEach">Select Nationality</label>
      <select class="form-control selectorEach" id="nationValue" onChange={()=>RenderPeople.updateNation()}>
      {Nation.map((nat,i)=>(<option key={i}>{nat}</option>))
      }}
      </select>
  </div>
  <div class="form-group selector">
    <label for="sel1"  className="labelEach">Select Gender</label>
      <select class="form-control selectorEach" id="genderValue" onChange={()=>RenderPeople.updateGender()}>
      {Gender.map((gend,i)=>(<option key={i} >{gend}</option>))
      }}
      </select>
  </div>
</div>


    </div>
  )
}
}

export default Controller
