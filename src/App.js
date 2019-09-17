import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Router,Switch, Route, Link} from 'react-router-dom';
import HomePage  from './Components/Pages/HomePage';
// import HomePage from './HomePage1'
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login'
import About from './Components/Pages/About'
// import Navbar from './Components/Navbar'
// import LOL from './LOL'
// import Modal from 'react-'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <div className="row ">
        {/* <Navbar/> */}
            <Link to="/">Home</Link><br/>
            <Link to="/Register">Register</Link><br/>
            <Link to="/Login">Login</Link><br/>
            <Link to="/About">About</Link><br/>
        
         </div>
        <div>
          {/* <Switch> */}
            <Route path="/" exact component={HomePage}/>
            <Route path="/Register"  component={Register}/>
            <Route path="/Login"  component={Login}/>
            <Route path="/About"  component={About}/>
          {/* </Switch> */}
        </div>

        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
                <p>Some text in the modal.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    //  <div>
    //     {/* <h1>Welcome...</h1> */}
    //     {/* <Route path="/" exact component={HomePage} /> */} {/* m4 tmam */}
    //     <Route path="/" exact component={Register} /> {/* tmam */}
    //     {/* <Register/> */}   {/* tmam */}
    //     <Link to="/LOL" > link</Link> {/* tmam */}
    //     <Route path="/LOL" component={LOL}/> {/* tmam */}
    //     {/* <Route path="/LOL?"/> */}
         
    //  </div>
    );
  }
}

export default App;