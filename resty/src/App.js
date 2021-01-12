import React from 'react';
import Header from './header';
import Footer from './footer';
import Form from './form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // words: '',
      // url: ''
    }
  }
  // handleWords = e => {
  //   let newWords = e.target.value;
  //   this.setState({ words: newWords });
  // }
  // handleClick = e => {
  //   e.preventDefault();
  //   let newWords = this.state.words;
  //   this.setState({ url: newWords });
  //   console.log(Form.state);
  // }
  

  render(){
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    )
  }
}

export default App;
