import React from 'react'
import {render} from 'react-dom'
import PersonCard from './PersonCard.js';


class PeopleList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loaded: false,
            loading: false,
            count:10,
            prevCount:0,
            increments:0,
            cards:0,
            gender:"",
            nation:"",
            female:0,
            male:0


        }
        this.shoot=this.shoot.bind(this);
        this.add=this.add.bind(this);
        this.sub=this.sub.bind(this);
        this.addCardRight=this.addCardRight.bind(this);
        this.updateGender=this.updateGender.bind(this);
        this.newrequest=this.newrequest.bind(this);


    }




    componentWillMount() {

      render(<ControllerInfo count={this.state.count} prevCount={this.state.prevCount} />,document.getElementById("controllerInfo"));
      this.setState({loading:true})
      fetch('https://randomuser.me/api/?results=10')
          .then(response => response.json())
          .then(obj => obj.results)
          .then(data => this.setState({
                loaded: true,
                loading: false,
                count:10,
                data
            }))
    };

    componentDidUpdate() {
      render(<ControllerInfo count={this.state.count} prevCount={this.state.prevCount} />,document.getElementById("controllerInfo"));
      /*if(this.state.data.map((data,i)=>{return data.gender=="male"})){
        this.setState({male:this.state.male+=1});
      }else if(this.state.data.map((data,i)=>{return data.gender=="female"})){
        this.setState({female:this.state.female+=1});
      }*/
 }





  newrequest(a){
    document.getElementById('controllerWarning').innerHTML="";
    this.setState({loading:true})
    fetch('https://randomuser.me/api/?results='+a+"&gender="+this.state.gender+"&nat="+this.state.nation)
        .then(response => response.json())
        .then(obj => obj.results)
        .then(data => this.setState({
              loaded: true,
              loading: false,
              data:this.state.data.concat(data)
          }))
  }


shoot(value,operation){
if(operation==="add"){
this.add(value);
}else if (operation==="sub") {
  this.sub(value);
}else{
  console.error("error while trying to run function add or sub!");
}

}

    add(a){
      document.getElementById('controllerWarning').innerHTML="";
      this.setState({prevCount:this.state.count,
                    count:this.state.count+=a,
                  increments:a});
      this.newrequest(a);

    }

    sub(a){
      if(a>this.state.count){
        console.log("Number to Substract is to high!");
        document.getElementById('controllerWarning').innerHTML="Number "+a+" is to high!";
      }else{
        let decrementValue=this.state.data.length-a;
        console.log(a);
        this.state.data.reverse();
        this.setState({prevCount:this.state.count,
                        count:this.state.count-=a,
                        data:this.state.data.splice(a).reverse()}
                    )

      }

    }

    addCardRight(info,e){
        e.preventDefault();
        console.log(info);
        render(
          <PersonCard info={{info}} />,
          document.getElementById('card')
        )
    }

    updateGender(gender){
      console.log("GENDER");
      let value=document.getElementById("genderValue").value;
      if(value=="Random"){
        this.setState({gender:""})
      }else{
        this.setState({gender:value})}
    }

    updateNation(){
      console.log("Nation");
      let value=document.getElementById("nationValue").value;
      if(value=="RANDOM"){
        this.setState({nation:""})
      }else{
        this.setState({nation:value})}
    }



    render() {
      const{count, prevCount}=this.state
        const { data, loading, loaded } = this.state
        return (loading) ?
            <img id="loading" src="img/loading2.gif" />  :

            <ul className="people-list">
                {data.map((person, i) => {
                    const {first, last} = person.name
                    const {thumbnail, large}=person.picture
                    const {age}=person.dob
                    const {gender,email,cell,nat}=person
                    const {city, postcode, state,country}=person.location
                    const {number,name}=person.location.street
                    const {md5}=person.login;
                    const infoAll=[first,last,thumbnail,age,gender,city,postcode,state,country,number,name,large,email,cell,nat,md5];
                    return (
                            <div className="people_all" ><a className="peopleAncestor" href="" onClick={(e)=>this.addCardRight(infoAll,e)}>
                            <li className="people_each" key={i} >
                            <span class="badge badge-secondary">{i+1}</span>
                            <img className="profileIMG" src={thumbnail} />
                          <div className="paraInfo"><h2 className="name"> {first} {last}</h2>
                          <h3 className="ageGender"> {age} Years old {gender}</h3>
                          <div id={"a"+i} className="collapse">
                          <p>{number} {name}<br />
                           {postcode} {city}<br/>
                            {country}</p>
                            </div></div>

                          </li></a>
                            <img src="img/biger2.png" href={"#a"+i} data-toggle="collapse" className="minimizer"  />

                          </div>
                            )
                })}

            </ul>
    }
  }
  function ControllerInfo(props){
    return(
      <div>
      <PrevState count={props.prevCount} />
      <ActualState count={props.count} />
      </div>
    )
  }

  function PrevState(props){
    return(
      <span class="badge badge-info badge1">prev people:<span>{props.count}</span> </span>
    )
  }

  function ActualState(props){
    return(
      <span className="badge badge-info badge1">Actual people:<span>{props.count}</span></span>
    )
  }


    export default PeopleList
