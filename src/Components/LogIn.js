import React, { Component } from 'react';
import fire from '../config/Fire';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleLogin = (e) => {
    const { email, password } = this.state
    e.preventDefault();
    fire.auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => { })
      .catch((error) => {
        console.log(error)
      });
  }

  handleSingup = (e) => {
    const { email, password } = this.state
    e.preventDefault();
    fire.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(((u) => { }))
      .then((u) => { console.log(u) });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className='bg-light card p-3 mt1 '>
          <div className='col-md-6' >
            <form>
              <div className='form-group'>
                <label for='exampleInputEmail1'>Email address</label>
                <input
                  className='form-control'
                  value={this.email}
                  onChange={this.handleChange}
                  type='email'
                  name='email'
                  id='exampleInputEmail1'
                />
                <label for='exampleInputEmail1'>Password</label>
                <input
                  className='form-control'
                  value={this.password}
                  onChange={this.handleChange}
                  type='password'
                  name='password'
                  id='exampleInputPassword1'
                />
                <button
                  type='submit'
                  onClick={() => this.handleSignup()}
                  className='btn btn-success btn-md mt-4'

                >
                  Sign up
                </button>
                <button
                  className='btn btn-primary btn-md ml-4 mt-4'
                  onClick={() => this.handleLogin()}
                >
                  Log in
                </button>

              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default LogIn;
