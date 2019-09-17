import React, { Component } from 'react';
// import { connect } from 'react-redux';

// function mapStateToProps(state) {
//   return {

//   };
// }

class About extends Component {
  constructor(props){
    super(props);
    this.state={
      Con: 0,
     
    }
    this.Inc = this.Inc.bind(this)
  }
  Inc(){
    this.setState({
      Con : this.state.Con + 1
    });
  }
  render() {
    return (
      <div>
        <h1>Welcome About!</h1>
        <button type="Submit" onClick={this.Inc}>Submit</button>
        <h1>{this.state.Con}</h1>
      </div>
    );
  }
}

export default About
// export default connect(
//   mapStateToProps,
// )(About);