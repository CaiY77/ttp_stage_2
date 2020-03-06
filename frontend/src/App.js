import React, { Component } from 'react';
import { findUser , makeUser } from './service/apiservice.js'
import Dashboard from './components/Dashboard.js'
import Login from './components/Login.js'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'test@gmail.com',
      password: 'test123',
      newEmail:"test6@gmail.com",
      newPassword: "test123",
      fullname: "test2",
      isLogged: false
    };
  }

  login = async () => {

    const cred = {
      email:this.state.email,
      password: this.state.password
    }
    const user = await findUser(cred);
    console.log(user)
  }

  register = async () => {
    const regInfo = {
      fullname: this.state.fullname,
      email:this.state.newEmail,
      password: this.state.newPassword
    }
    const user = await makeUser(regInfo);

    (user)
    ? console.log(user)
    : console.log('already exist')
  }

  render() {
    const {isLogged} = this.state
    return (<div className='main-div'>
      {
        (isLogged)
          ? <Dashboard />
          : <Login />
      }
    </div>);

  }

}

export default App;
