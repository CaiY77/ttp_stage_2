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
