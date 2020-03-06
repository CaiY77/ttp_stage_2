import React, { Component } from 'react';
import { findUser , makeUser } from './service/apiservice.js'
import Dashboard from './components/Dashboard.js'
import Login from './components/Login.js'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      newEmail:'',
      newPassword: '',
      fullname: '',
      isLogged: false,
      userID:'',
      wallet:'',
      stocks:'',
      fullname:''
    };
  }

  toggleLogged = () => {
    this.setState({
      isLogged: true
    });
  }

  login = async () => {

    const {email,password} = this.state;

    const cred = {
      email:this.state.email,
      password: this.state.password
    }

    const user = await findUser(cred);
      if (user) {
        this.setState({
          userID: user.id,
          wallet: user.wallet,
          fullname: user.fullname
        });
        this.toggleLogged();
      } else {
        console.log('invalid user')
      }
  }

  register = async () => {
    const { fullname,newEmail,newPassword } = this.state

    const regInfo = {
      fullname: fullname,
      email: newEmail.toLowerCase(),
      password: newPassword
    }

    const user = await makeUser(regInfo);
    if (user) {
      this.setState({
        userID: user.id,
        wallet: user.wallet,
        fullname: user.fullname
      });
      this.toggleLogged();
    } else {
      console.log('email in use')
    }

  }

  handleInputs = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {isLogged} = this.state
    return (<div className='main-div'>
      {
        (isLogged)
          ? <Dashboard />
          : <Login handleInputs={this.handleInputs} login={this.login} register={this.register}/>
      }
    </div>);

  }

}

export default App;
