import React from 'react'
import {render} from 'react-dom'
import {CONFIG} from './Config.js'

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {account:{}};


    this.displayStatusMessages=this.displayStatusMessages.bind(this);
  }


    componentWillMount() {

      axios.get(CONFIG.apiUrl + "?delay=0.5").then(function(response) {
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


  export default Account
