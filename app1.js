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
            prevCount:0


        }
        this.shoot=this.shoot.bind(this);
        this.add=this.add.bind(this);
        this.sub=this.sub.bind(this);
        this.addCardRight=this.addCardRight.bind(this);


    }




    componentWillMount() {
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





  newrequest(){
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
          this.newrequest();
          break;
          case "sub1":
            this.sub(1)
            this.newrequest();
            break;
        case "add10":
          this.add(10)
          this.newrequest();
          break;
          case "sub10":
            this.sub(10)
            this.newrequest();
            break;
            case "add20":
              this.add(20)
              this.newrequest();
              break;
              case "sub20":
                this.sub(20)
                this.newrequest();
                break;
                case "add50":
                  this.add(50)
                  this.newrequest();
                  break;
                  case "sub50":
                    this.sub(50)
                    this.newrequest();
                    break;
                    case "add100":
                      this.add(100)
                      this.newrequest();
                      break;
                      case "sub100":
                        this.sub(100)
                        this.newrequest();
                        brea20
        default:

      }

    }

    add(a){

      this.setState({prevCount:this.state.count,
                    count:this.state.count+=a});


    }

    sub(a){
      this.setState({prevCount:this.state.count,
                      count:this.state.count-=a})
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
                <div id="command">
                <button className="btn btn-dark" onClick={()=>this.newrequest()}>Reload</button><br />
                <button className="btn btn-dark btnValue" onClick={()=>this.shoot("add1")}>+1</button>
                <button className="btn btn-dark btnValue" onClick={()=>this.shoot("sub1")}>-1</button><br />
                <button className="btn btn-dark btnValue" onClick={()=>this.shoot("add10")}>+10</button>
                <button className="btn btn-dark btnValue" onClick={()=>this.shoot("sub10")}>-10</button><br />
                <button className="btn btn-dark btnValue" onClick={()=>this.shoot("add20")}>+20</button>
                <button className="btn btn-dark btnValue" onClick={()=>this.shoot("sub20")}>-20</button><br />
                <button className="btn btn-dark btnValue" onClick={()=>this.shoot("add50")}>+50</button>
                <button className="btn btn-dark btnValue" onClick={()=>this.shoot("sub50")}>-50</button><br />
                <button className="btn btn-dark btnValue" onClick={()=>this.shoot("add100")}>+100</button>
                <button className="btn btn-dark btnValue" onClick={()=>this.shoot("sub100")}>-100</button>
                <PrevState count={prevCount} />
                <ActualState count={count} />
                </div>
            </ul>
    }
  }
  ReactDOM.render(
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
  console.log("props"+props)
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
