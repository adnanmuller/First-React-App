const $=require("jquery");



import React from 'react'
import {render} from 'react-dom'
import PeopleList from './components/PeopleList.js';
import Controller from './components/Controller.js';
import Navigation from './components/Navigation.js';
import Account from './components/Account.js';

 render(<Navigation  />,document.getElementById("header"));

  render(<Controller />,document.getElementById("controller"));

















    render(<Account  />,document.getElementById("myInfoBody"));
