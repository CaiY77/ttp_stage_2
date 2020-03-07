import React, { Component } from 'react';
import { findUser , makeUser, updateUser, getUser, makeStock, getStocks} from './service/apiservice.js'
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
      isLogged: true,
      userID:'',
      wallet:'',
      name:'',
      stocks:'',
      form1err:false,
      form2err:false
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
      email: email,
      password: password
    }

    const user = await findUser(cred);
      if (user) {
        this.setState({
          userID: user.id,
          wallet: user.wallet,
          name: user.fullname
        });
        this.toggleLogged();
      } else {
        this.setState({
          form1err: true
        });
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
      this.setState({
        form2err: true
      });
      console.log('email in use')
    }

  }

  handleInputs = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {isLogged, form1err ,form2err} = this.state
    return (<div className='main-div'>
      {
        (isLogged)
          ? <Dashboard />
          : <Login
            form1err={form1err}
            form2err= {form2err}
            handleInputs={this.handleInputs}
            login={this.login}
            register={this.register}/>
      }
    </div>);

  }

}

export default App;
