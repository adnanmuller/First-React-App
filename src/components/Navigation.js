import React from 'react'
import {render} from 'react-dom'

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

export default Navigation;
