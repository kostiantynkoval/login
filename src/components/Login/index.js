import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
  
  state = {
    email: '',
    password: '',
    emailerr: '',
    pwderr: ''
  }
  
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value, emailerr: '', pwderr: ''})
  }
  
  submitLogin = (e) => {
    e.preventDefault();
    console.log(e)
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
    fetch('https://lab.lectrum.io/redux/api/user/login', {
      method: 'post',
      body: {
        email: this.state.email,
        password: this.state.password
      }
    }).then(res => console.log(res)).catch(err => console.log('err', err))
  }
  
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.submitLogin}>
        <input className='input' name="email" type="text" onChange={this.onChange}/>
        {this.state.emailerr !== '' && <div className='error'>{this.state.emailerr}</div>}
        <input className='input' name="password" type="password" onChange={this.onChange}/>
        {this.state.pwderr !== '' && <div className='error'>{this.state.pwderr}</div>}
        <input type="submit"/>
      </form>
    );
  }
}

export default Login;