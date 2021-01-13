import React from 'react';
import ReactJson from 'react-json-view';

class Results extends React.Component {
  render(){
    console.log('props from the results page', this.props)
    return (
      <>
        <p>Count: <span>{this.props.count}</span></p>
        <div id='headers'>
          <ReactJson src={this.props.headers} />
        </div>
        <div id="responseBody">
          <ReactJson src={this.props.results} />
        </div>
      </>
    )
  }
}



export default Results;