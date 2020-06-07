const $=require("jquery");
import React from 'react'
import {render} from 'react-dom'



var CONFIG = {
    apiUrl: "/includes/accountInfo.inc.php"
  };



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

//ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root1'));
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
        ReactDOM.render(
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




const RenderPeople= render(
    <PeopleList />,
    document.getElementById('root2')
  )


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

     if(alreadyInArray[0]===false||alreadyInArray[0]===undefined){
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

  render(<Controller />,document.getElementById("controller"));


function ControllerInfo(props){
  return(
    <div>
    <PrevState count={props.prevCount} />
    <ActualState count={props.count} />
    </div>
  )
}

class Navigation extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};

  }
  render(){
    return(
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

      {/*  <a className="navbar-brand" href="#">Logo</a>  */}


        <ul className="navbar-nav">

        {/*
          <li className="nav-item">
            <a className="nav-link" href="#">Link 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link 2</a>
          </li>
             */}



          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              HOME
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Link </a>
              <a className="dropdown-item" href="#">Link </a>
              <a className="dropdown-item" href="#">Link </a>
            </div>
          </li>
        </ul>



      </nav>
    )

  }
  }


  render(<Navigation  />,document.getElementById("header"));









  class Account extends React.Component {
    constructor(props) {
      super(props);
      this.state = {account:{}};


      this.displayStatusMessages=this.displayStatusMessages.bind(this);
    }


      componentWillMount() {

        axios.get(CONFIG.apiUrl + "?delay=1").then(function(response) {
          this.setState({account:response.data});}.bind(this))

    }

    displayStatusMessages() {



        return (
          <ul>
          <li><span className="accountInfoSpace">first name: </span> {this.state.account.user_first}</li>
          <li><span className="accountInfoSpace">last name: </span> {this.state.account.user_last}</li>
          <li><span className="accountInfoSpace">E-mail: </span> {this.state.account.user_email}</li>
          <li><span className="accountInfoSpace">user id: </span> {this.state.account.user_uid}</li>
          </ul>
        )


    }

      render(){
          return <ul id="status-list">{this.displayStatusMessages()}</ul>;
      }



    }



    render(<Account  />,document.getElementById("myInfoBody"));
