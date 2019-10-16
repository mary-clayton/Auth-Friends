import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import LoginStyle from '../styling/loginstyle'

class Login extends Component {
     state = {
        isLoading: false,
        credentials: {
            username: '',
            password: ''
        }
 }
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }; // end handlechange

     login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/dashboard');
        })
        .catch(err => console.log(err.response))
    }; //end login event

    render() {
        if (this.state.isLoading) 
            return (
            <div>
                <h1>Loading...</h1>
            </div>
                )
        else {
        return (
            <LoginStyle className="Login">
                <h1>Auth Friends</h1>
                <form onSubmit={this.login}>
                    <label>Username:</label>
                    <input 
                    type="text"
                     name="username"
                     value={this.state.credentials.username}
                     onChange={this.handleChange} required
                     />
                      <label>Password:</label>
                     <input 
                    type="password"
                     name="password"
                     value={this.state.credentials.password}
                     onChange={this.handleChange} required
                     />
                     <button>Log in</button>
      )}
                </form>
            </LoginStyle>
        )
        }
    }
} // end Login

export default Login;
