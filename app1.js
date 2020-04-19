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
            count:0,
            prevCount:10


        }
        this.shoot=this.shoot.bind(this);
        this.add=this.add.bind(this);
        this.sub=this.sub.bind(this);


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



 /*getSnapshotBeforeUpdate(prevProps, prevState) {
    var test=prevProps.count;
    console.log(test);
  }*/

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
        case "add":
          this.add(10)
          this.newrequest();
          break;
          case "sub":
            this.sub(10)
            this.newrequest();
            break;
        default:

      }

    }

    add(a){

      this.setState({count:this.state.count+=a});
      console.log("new state 20:"+ this.state.count)

    }

    sub(a){
      this.setState({count:this.state.count-=a})
    }

    render() {
      const{count, prevCount}=this.state
        const { data, loading, loaded } = this.state
        return (loading) ?
            <div>Loading...</div> :
            <ul className="people-list">
                {data.map((person, i) => {
                    const {first, last} = person.name
                    const {thumbnail}=person.picture
                    const {age}=person.dob
                    const {gender}=person
                    const {city, postcode, state,country}=person.location
                    const {number,name}=person.location.street
                    return (
                            <div className="people_all">  <li className="people_each" key={i} >
                            <img className="profileIMG" src={thumbnail} />
                          <div className="paraInfo"><h2 className="name"> {first} {last}</h2>
                          <h3 className="ageGender"> {age} Years old {gender}</h3>
                          <p>{number} {name}<br />
                           {postcode} {city}<br/>
                            {country}</p>
                            </div>
                          </li></div>
                            )
                })}
                <div id="command">
                <button className="btn btn-dark" onClick={()=>this.newrequest()}>Reload</button>
                <button className="btn btn-dark" onClick={()=>this.shoot("add")}>+10</button>
                <button className="btn btn-dark" onClick={()=>this.shoot("sub")}>-10</button>
                <PrevState count={count-10} />
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
