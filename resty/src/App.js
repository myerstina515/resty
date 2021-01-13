import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Form from './form/form';
import Results from './results/results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [],
      count: 0,
      results: []
      }
  }
  newResults = (apiResults) => {
    this.setState({ headers: apiResults.headers });
    this.setState({ results: apiResults });
    this.setState({ count: apiResults.length });
  }

  render(){
    return (
      <>
        <Header/>
        <Form 
          // url={'https://swapi.co/api/people'}
          apiResults={this.newResults}
        />
        <Results
          count={this.state.count}
          results={this.state.results}
        />
        <Footer />
      </>
    )
  }
}

export default App;
