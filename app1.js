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
            cards:0


        }
        this.shoot=this.shoot.bind(this);
        this.add=this.add.bind(this);
        this.sub=this.sub.bind(this);
        this.addCardRight=this.addCardRight.bind(this);


    }




    componentWillMount() {
      ReactDOM.render(<Controller />,document.getElementById("controller"));
      ReactDOM.render(<ControllerInfo count={this.state.count} prevCount={this.state.prevCount} />,document.getElementById("controllerInfo"));
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
      ReactDOM.render(<ControllerInfo count={this.state.count} prevCount={this.state.prevCount} />,document.getElementById("controllerInfo"));
 }





  newrequest(){
    document.getElementById('controllerWarning').innerHTML="";
    this.setState({loading:true})
    fetch('https://randomuser.me/api/?results='+this.state.count)
        .then(response => response.json())
        .then(obj => obj.results)
        .then(data => this.setState({
              loaded: true,
              loading: false,
              data
          }))
  }


    shoot(flag){
      switch (flag) {
        case "add1":
          this.add(1)
          break;
          case "sub1":
            this.sub(1)
            break;
        case "add10":
          this.add(10)
          break;
          case "sub10":
            this.sub(10)
            break;
            case "add20":
              this.add(20)
              break;
              case "sub20":
                this.sub(20)
                break;
                case "add50":
                  this.add(50)
                  break;
                  case "sub50":
                    this.sub(50)
                    break;
                    case "add100":
                      this.add(100)
                      break;
                      case "sub100":
                        this.sub(100)
                        break;
                            default:

      }

    }

    add(a){
      document.getElementById('controllerWarning').innerHTML="";
      this.setState({prevCount:this.state.count,
                    count:this.state.count+=a});
      this.newrequest();

    }

    sub(a){
      if(a>this.state.count){
        console.log("Number to Substract is to high!");
        document.getElementById('controllerWarning').innerHTML="Number "+a+" is to high!";
      }else{
        this.setState({prevCount:this.state.count,
                        count:this.state.count-=a})
        this.newrequest();
      }

    }

    addCardRight(person,e){
        e.preventDefault();
        console.log(person);
        ReactDOM.render(
          <PersonCard info={person} />,
          document.getElementById('card')
        )
    }



    render() {
      const{count, prevCount}=this.state
        const { data, loading, loaded } = this.state
        return (loading) ?
            <img id="loading" src="/img/loading2.gif" />  :
            <ul className="people-list">
                {data.map((person, i) => {
                    const {first, last} = person.name
                    const {thumbnail, large}=person.picture
                    const {age}=person.dob
                    const {gender,email,cell,nat}=person
                    const {city, postcode, state,country}=person.location
                    const {number,name}=person.location.street
                    const infoAll=[first,last,thumbnail,age,gender,city,postcode,state,country,number,name,large,email,cell,nat];
                    return (
                            <div className="people_all"><a class="peopleAncestor" href="" onClick={(e)=>this.addCardRight(infoAll,e)}>
                            <li className="people_each" key={i} >
                            <span class="badge badge-secondary">{++i}</span>
                            <img className="profileIMG" src={thumbnail} />
                          <div className="paraInfo"><h2 className="name"> {first} {last}</h2>
                          <h3 className="ageGender"> {age} Years old {gender}</h3>
                          <p>{number} {name}<br />
                           {postcode} {city}<br/>
                            {country}</p>
                            </div>
                          </li></a></div>
                            )
                })}

            </ul>
    }
  }
const RenderPeople= ReactDOM.render(
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

function PersonCard(props){

    return(
      <div className="people_card">
      <img className="profileIMG" src={props.info[11]} />
    <div className="paraInfo"><h2 className="name"> {props.info[0]} {props.info[1]}</h2>
    <h3 className="ageGender"> {props.info[3]} Years old {props.info[4]}</h3>
    <p>{props.info[9]} {props.info[10]}<br />
     {props.info[6]} {props.info[5]}<br/>
      {props.info[8]}<br/>
    email:  {props.info[12]}<br/>
    phone:  {props.info[13]}<br/>
    nationality: {props.info[14]}<br/>
      </p></div>
    </div>
    )
}

function Controller(props){
    return(
      <div className="text-center">
      <button className="btn btn-dark" id="reloadButton" onClick={()=>RenderPeople.newrequest()}>Reload</button><br />
      <div className="centerButton"><button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot("add1")}>+1</button>
      <button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot("sub1")}>-1</button></div>
      <div className="centerButton"><button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot("add10")}>+10</button>
      <button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot("sub10")}>-10</button></div>
      <div className="centerButton"><button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot("add20")}>+20</button>
      <button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot("sub20")}>-20</button></div>
      <div className="centerButton"><button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot("add50")}>+50</button>
      <button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot("sub50")}>-50</button></div>
      <div className="centerButton"><button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot("add100")}>+100</button>
      <button className="btn btn-dark btnValue" onClick={()=>RenderPeople.shoot("sub100")}>-100</button></div>
      </div>
    )
}

function ControllerInfo(props){
  return(
    <div>
    <PrevState count={props.prevCount} />
    <ActualState count={props.count} />
    </div>
  )
}
