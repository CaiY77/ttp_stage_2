import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newUser: true
    };
  }

  toggleUser = () => {
    const { newUser } = this.state;
    this.setState({
      newUser: !newUser
    });
  }

  render() {
    const { handleInputs, login, register, form1err, form2err } = this.props;
    const { newUser } = this.state;
    return (
      <div style={{height: '100%'}}>

        <h1 className='login-title'>TTP Stocks</h1>

        <div className='login-bottom'>
          {
            (newUser)
              ?(<div className='form-reg-div'>
                <Form error className='form-reg' onSubmit={()=>register()}>

                  <Form.Input
                    className="login-font"
                    icon='user'
                    iconPosition='left'
                    label='Full Name'
                    placeholder='Full Name'
                    onChange={handleInputs}
                    name="fullname"
                    required
                  />
                  <Form.Input
                    className="login-font"
                    icon='mail'
                    iconPosition='left'
                    label='Email'
                    type='email'
                    placeholder='Email Address'
                    onChange={handleInputs}
                    name="newEmail"
                    required
                  />

                  <Form.Input
                    className="login-font"
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    type='password'
                    placeholder="Password"
                    onChange={handleInputs}
                    name="newPassword"
                    required
                  />

                  {
                    (form2err)
                      ?(<Message
                        error
                        header='Unable to register'
                        content='This email address is already in use. Please try with a new email.'
                        />)
                      : null
                  }

                  <Button inverted className="login-font" color='blue' content='Register!' primary />
                </Form>
                <div className = "button-center">
                  <Button color='green' className="button-style login-font" onClick={this.toggleUser} content="Existing User? Sign In!"/>
                </div>
              </div>)
              :(<div className='form-login-div'>
                <Form error className='form-login' onSubmit={()=>login()}>
                  <Form.Input
                    className="login-font"
                    icon='mail'
                    iconPosition='left'
                    label='Email'
                    placeholder='Email Address'
                    type='email'
                    onChange={handleInputs}
                    name = "email"
                    required
                  />

                  <Form.Input
                    className="login-font"
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    type='password'
                    placeholder="Password"
                    onChange={handleInputs}
                    name="password"
                    required
                  />
                  {
                    (form1err)
                      ?(<Message
                        error
                        header='Invalid email or password'
                        content="We are unable to find your account. Please try again."
                        />)
                      : null
                  }

                  <Button inverted className="login-font" color='green' content='Login'/>
                </Form>
                <div className = "button-center">
                  <Button inverted className="button-style login-font" color='blue' onClick={this.toggleUser} content="New User? Sign Up!"/>
                </div>
              </div>)
          }
        </div>
      </div>
    );
  }

}

export default Login;
