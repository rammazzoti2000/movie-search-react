import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/style.css'

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));