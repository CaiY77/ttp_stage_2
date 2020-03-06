import React, { Component } from 'react';
import { Form, Button, Label, Divider } from 'semantic-ui-react'

class Login extends Component {

  render() {
    const { handleInputs, login, register } = this.props;
    return (
      <div style={{height: '100%'}}>
        <div className='login-top'>
          <h1 className='login-title'>TTP Stock Application</h1>
        </div>
        <div className='login-bottom'>

          <Form className='login-form-1' onSubmit={()=>login()}>
            <Form.Input
              icon='mail'
              iconPosition='left'
              label='Email'
              placeholder='Email Address'
              type='email'
              onChange={handleInputs}
              name = "email"
            />
            
            <Form.Input
              icon='lock'
              iconPosition='left'
              label='Password'
              type='password'
              placeholder="Password"
              onChange={handleInputs}
              name="password"
            />

            <Button inverted color='green' content='Login'/>
          </Form>

          <Divider vertical>Or</Divider>

          <Form className='login-form-2' onSubmit={()=>register()}>

            <Form.Input
              icon='user'
              iconPosition='left'
              label='Full Name'
              placeholder='Full Name'
              onChange={handleInputs}
              name="fullname"
            />
            <Form.Input
              icon='mail'
              iconPosition='left'
              label='Email'
              type='email'
              placeholder='Email Address'
              onChange={handleInputs}
              name="newEmail"
            />

            <Form.Input
              icon='lock'
              iconPosition='left'
              label='Password'
              type='password'
              placeholder="Password"
              onChange={handleInputs}
              name="newPassword"
            />

            <Button inverted color='blue' content='Register!' primary />
          </Form>

        </div>
      </div>
    );
  }

}

export default Login;
