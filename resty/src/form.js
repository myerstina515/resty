import React from 'react';
import './form.scss';

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            method: '',
            words: '',
            url: ''
            }
    }
      handlePost = e => {
        e.preventDefault();
        let newWords = 'POST';
        this.setState({ method: newWords });
        console.log(this.state.method);
      }
      handleGet = e => {
        e.preventDefault();
        let newWords = 'GET';
        this.setState({ method: newWords });
      }
      handlePut = e => {
        e.preventDefault();
        let newWords = 'PUT';
        this.setState({ method: newWords });
      }
      handleDelete = e => {
        e.preventDefault();
        let newWords = 'DELETE';
        this.setState({ method: newWords });
      }
      handleWords = e => {
        let newWords = e.target.value;
        this.setState({ words: newWords });
      }
      handleClick = e => {
        e.preventDefault();
        let newWords = this.state.words;
        this.setState({ url: newWords });
      }
    render(){
        return(
            <>
            <div id='url'>
            URL<input onChange={this.handleWords} />
            <button onClick={this.handleClick}>Click Me!</button>
            </div>
            <div id='radioButtons'>
            <button onClick={this.handlePost}>POST</button>
            <button onClick={this.handleGet}>GET</button>
            <button onClick={this.handlePut}>PUT</button>
            <button onClick={this.handleDelete}>DELETE</button>
            </div>
            <div id='textReturn'><p><b>{this.state.method}</b>  {this.state.url}</p></div>
            </>
        )
    }
}


export default Form;