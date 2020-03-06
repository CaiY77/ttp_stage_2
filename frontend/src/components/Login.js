import React, { Component } from 'react';
import { Form, Button, Label, Divider } from 'semantic-ui-react'

class Login extends Component {

  render() {
    return (
      <div style={{height: '100%'}}>
        <div className='login-top'>
          <h1 className='login-title'>TTP Stock Application</h1>
        </div>
        <div className='login-bottom'>

          <Form className='login-form-1'>
            <Form.Input
              icon='mail'
              iconPosition='left'
              label='Email'
              placeholder='Email Address'
              type='email'
            />

            <Form.Input
              icon='lock'
              iconPosition='left'
              label='Password'
              type='password'
              placeholder="Password"
            />

            <Button content='Login' primary />
          </Form>

          <Divider vertical>Or</Divider>

          <Form className='login-form-2'>

            <Form.Input
              icon='user'
              iconPosition='left'
              label='Full Name'
              placeholder='Full Name'
            />
            <Form.Input
              icon='mail'
              iconPosition='left'
              label='Email'
              type='email'
              placeholder='Email Address'
            />

            <Form.Input
              icon='lock'
              iconPosition='left'
              label='Password'
              type='password'
              placeholder="Password"
            />

            <Button content='Register!' primary />
          </Form>

        </div>
      </div>
    );
  }

}

export default Login;
