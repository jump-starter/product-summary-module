import React from 'react';
import ReactDOM from 'react-dom';
import sampleData from '../../db/sampleData';
import Title from './components/Title.js';
import MainImage from './components/MainImage.js';
import Footer from './components/Footer.js';
import Stats from './components/Stats.js';
/************************************************************************/
class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const style = {
      borderStyle:'solid',
      borderWidth: '1px',
      borderColor: 'blue',
    }
    return (
      <div className="App">
        <h1 style={style}>App</h1>
        <Title style={style} />
        <MainImage />
        <Footer />
        <Stats />
      </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('root'));
