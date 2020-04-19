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

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root1'));

class PeopleList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loaded: false,
            loading: false,
            count:10
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
                data
            }))
    }

    shoot(a){
      this.setState({loading:true})
      fetch('https://randomuser.me/api/?results='+a)
          .then(response => response.json())
          .then(obj => obj.results)
          .then(data => this.setState({
                loaded: true,
                loading: false,
                data
            }))
    }

    add(a){
      this.setState({count:this.state.count+a})
    }

    sub(a){
      this.setState({count:this.state.count-a})
    }

    render() {
      const{count}=this.state
        const { data, loading, loaded } = this.state
        return (loading) ?
            <div>Loading...</div> :
            <ol className="people-list">
                {data.map((person, i) => {
                    const {first, last} = person.name
                    const {thumbnail}=person.picture
                    return (
                            <div>  <li key={i} className="people">{first} {last}</li><img src={thumbnail} /></div>
                            )
                })}
                <button onClick={()=>this.shoot(count)}>Print New List</button><br/>
                <button onClick={()=>this.add(10)}>+10</button><span>{count}</span><br/>
                <button onClick={()=>this.sub(10)}>-10</button><span>{count}</span>
            </ol>
    }
  }
  ReactDOM.render(
    <PeopleList />,
    document.getElementById('root2')
  )
