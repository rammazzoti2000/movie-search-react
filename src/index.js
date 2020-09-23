import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/style.css'

class Main extends React.Component {
  render() {
    return (
      <h1>Hello World updated</h1>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));