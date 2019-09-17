import React, { Component } from 'react';
// import { connect } from 'react-redux';



class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top " Style="background-color: deeppink" > {/*bsStyle="background-color: deeppink" */ /*mfesh klam dh*/}
       <div className="container-fluid">
         <h1>hello</h1>
         <button className="btn btn-danger navbar-btn">Button</button>
         <ul className="nav navbar-nav navbar-right">
          <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
       </div>
      </nav>
    );
  }
}

export default Navbar