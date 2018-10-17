import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  state = {list: []}

  componentDidMount() {
    fetch('/list')
      .then(res => res.json())
      .then(list => this.setState({ list }));
  }

   render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default App;