import React, { Component } from 'react';
import { Form, Button, Message, Divider } from 'semantic-ui-react'

class Login extends Component {

  render() {
    const { handleInputs, login, register, form1err, form2err } = this.props;
    return (
      <div style={{height: '100%'}}>
        <div className='login-top'>
          <h1 className='login-title'>TTP Stock Application</h1>
        </div>
        <div className='login-bottom'>

          <Form error className='login-form-1' onSubmit={()=>login()}>
            <Form.Input
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
                  content="We aren't unable to find your account. Please try again."
                  />)
                : null
            }

            <Button inverted color='green' content='Login'/>
          </Form>

          <Divider vertical>Or</Divider>

          <Form error className='login-form-2' onSubmit={()=>register()}>

            <Form.Input
              icon='user'
              iconPosition='left'
              label='Full Name'
              placeholder='Full Name'
              onChange={handleInputs}
              name="fullname"
              required
            />
            <Form.Input
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

            <Button inverted color='blue' content='Register!' primary />
          </Form>

        </div>
      </div>
    );
  }

}

export default Login;
