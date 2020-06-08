import React from 'react'
import {render} from 'react-dom'


class PersonCard extends React.Component{
  constructor(props){
    super(props);
      this.state={person:[]}

      this.removeCard=this.removeCard.bind(this);

  }

  /*static getDerivedStateFromProps(props, state) {
    return {person:state.person.concat(props.info) };

  }*/

  componentWillReceiveProps(nextProps) {
     let alreadyInArray=this.state.person.map(function(a,i){
       if(a.info[0]===nextProps.info.info[0]){
          console.log("Person "+a.info[0]+" already in array");
         return true;
       }else if (a.info[0]!==nextProps.info.info[0]) {
         return false;
       }

     })

     if(alreadyInArray.indexOf(true)==-1||alreadyInArray[0]===undefined){
            this.state.person.reverse();
          this.setState({
            person:this.state.person.concat(nextProps.info).reverse()
          });
          console.log(alreadyInArray);


     }else{
       console.log(alreadyInArray);



     }



      }

  componentDidMount(){
    const screenHeight=window.screen.availHeight;
    const screenDiff=screenHeight-420;
    if(document.getElementById("dynamicHeight")){
        document.getElementById("dynamicHeight").style.setProperty("height",screenDiff+"px");

    }else{
      return;
    }
  }

  removeCard(code){
      console.log("object for removeCard"+ this.state.person);
      console.log(code);
      let NewArrayPerson=this.state.person.filter((person,i)=>person.info[15]!=code);
      console.log("new person Array= "+NewArrayPerson);
      this.setState({person:NewArrayPerson})
  }

render(){

  return(<div className="people_card" id="dynamicHeight">
    {this.state.person.map((person, i) => {
          console.log("array map nr: "+i+person);
      return(<div className="peole_card_each" >
              <img className="profileIMG" src={person.info[11]} />
              <img src="img/bin.png" className="binPersonCard" alt="bin" onClick={()=>this.removeCard(person.info[15])}/>
              <div className="paraInfo"><h2 className="name"> {person.info[0]} {person.info[1]}</h2>
                <h3 className="ageGender"> {person.info[3]} Years old {person.info[4]}</h3>
                <p>{person.info[9]} {person.info[10]}<br />
                {person.info[6]} {person.info[5]}<br/>
                {person.info[8]}<br/>
                email:  {person.info[12]}<br/>
                phone:  {person.info[13]}<br/>
                nationality: {person.info[14]}<br/>
                </p>

              </div>


            </div>
  )})

}

</div>)
}};



export default PersonCard
