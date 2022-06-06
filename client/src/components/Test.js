import React,{Component} from 'react';
import axios from 'axios';
require('typeface-roboto');

class Test extends Component {
  submit = () => {
    const data = {
      password: "asdasdads",
      email: "goodfellaspie@gmail.com",
      fullName: "eliberto antunes"
    }
    axios.post('/api/register', data).then(res => { console.log(res) });
  }
    ;
  render() {
    
    return (
      <div style={{ fontFamily: 'roboto' }}>
        <a href="/auth/google">Login Google</a>
        <hr></hr>
        <a href="/auth/facebook">Login FaceBook</a>
        <hr></hr>
        <a href="/api/logout">Logout</a>
        <hr></hr>
        <button onClick={this.submit}>test local persistent</button>
      </div>
    )
  }

  
}


export default Test;