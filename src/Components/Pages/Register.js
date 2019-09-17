import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Register extends Component {
  constructor(props){
    super(props);
    this.state ={
      UN : 'UserName',
      Pass : 'Password',
    }
  }
  render() {
    return (
      <div>
       <h1>Register Form:</h1>
        <form>
          <input type="text"></input>
        </form>
      </div>
    );
  }
}

export default Register;
