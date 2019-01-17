import React, {Component} from 'react';
import axios from 'axios';
//import {Redirect} from 'react-router-dom';
import './Login.css';

axios.defaults.headers.common['Content-Type'] = 'application/json';

class Login extends Component {
  
  state = {
    email: '',
    password: '',
    emailerr: '',
    pwderr: ''
  }

  componentDidMount() {
    localStorage.setItem('token', '');
  }
  
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value, emailerr: '', pwderr: ''})
  }
  
  submitLogin = (e) => {
    e.preventDefault();
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(this.state.email).toLowerCase())) {
      this.setState({emailerr: 'Email is not valid'})
      return false;
    }
    if(this.state.email === '') {
      this.setState({emailerr: 'Email is required'})
      return false;
    }
    if(this.state.password === '') {
      this.setState({pwderr: 'Password is required'})
      return false;
    }

    axios.post('https://lab.lectrum.io/redux/api/user/login', {
        email: this.state.email,
        password: this.state.password
    }).then(res => {
      localStorage.setItem('token', res.data.data.token);
      this.props.history.push('/');
    }).catch(err => console.log('err', err))
  }
  
  render() {
    return (
      <form onSubmit={this.submitLogin}>
        <input placeholder='Email' className='input' name="email" type="text" onChange={this.onChange}/>
        {this.state.emailerr !== '' && <div className='error'>{this.state.emailerr}</div>}
        <input placeholder='Password' className='input' name="password" type="password" onChange={this.onChange}/>
        {this.state.pwderr !== '' && <div className='error'>{this.state.pwderr}</div>}
        <input type="submit"/>
      </form>
    );
  }
}

export default Login;