import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

class Login extends Component {
    constructor()
 {    super();
     this.state = {
        credentials: {
            username: '',
            password: ''
        }
    }; //end state
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
    
    // logout() {
    //     localStorage.clear();
    // }
    render() {
        return (
            <div>
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
                </form>
                {/* <button className="logout" onClick= {this.logout()}>Log Out</button> */}
            </div>
        )
    }

} // end Login

export default Login;
