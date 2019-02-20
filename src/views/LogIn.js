import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      .then((data) => {
        const { user } = data;
        localStorage.setItem('user', user.email);
        localStorage.setItem('token', user.refreshToken);
        localStorage.setItem('authenticated', true);
        this.props.history.push('/profile');
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  handleSingup = (e) => {
    const { email, password } = this.state
    e.preventDefault();
    console.log(email, password)
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })

  }

  isAuthenticated = () => {
    return typeof localStorage.getItem('authenticated') === 'string';
  }

  render() {
    const { email, password } = this.state
    return (
      <React.Fragment>
        {!this.isAuthenticated() ? (
          <div className='bg-light card p-3 mt1 '>
            <div className='col-md-6' >
              <form>
                <div className='form-group'>
                  <label>Email address</label>
                  <input
                    className='form-control'
                    value={email}
                    onChange={this.handleChange}
                    type='email'
                    name='email'
                  />
                  <label for='exampleInputEmail1'>Password</label>
                  <input
                    className='form-control'
                    value={password}
                    onChange={this.handleChange}
                    type='password'
                    name='password'
                  />
                  <button
                    type='submit'
                    onClick={this.handleSingup}
                    className='btn btn-success btn-md mt-4'
                  >
                    Sign up
                </button>
                  <button
                    className='btn btn-primary btn-md ml-4 mt-4'
                    onClick={this.handleLogin}
                  >
                    Log in
                </button>

                </div>
              </form>
            </div>
          </div>
        ) : (
            <React.Fragment>
              <div className="container">
                <Link to="profile" className="nav-link active badge badge-primary p-3">View Profile</Link>
              </div>
            </React.Fragment>
          )}
      </React.Fragment>
    )
  }
}
export default LogIn;
