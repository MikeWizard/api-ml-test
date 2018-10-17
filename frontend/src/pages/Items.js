import React, { Component } from 'react';
import queryString from 'query-string';
import './App.css';

class App extends Component {
  state = {items: []}

  componentDidMount() {
    fetch('/items/'+queryString.parse(this.props.location.search).search)
      .then(res => res.json())
      .then(items => this.setState({ items }));
  }

   render() {
    const { items } = this.state;

    return (
      <div className="App">
      <div className="body container">
        {/* Check to see if any items are found*/}
        {items.length ? (
          <div>
            {/* Render the list of items */}
            {items.slice(0,4).map((item) => {
              {console.log(item)}
              return(
                <div key={item.id} className="container Articulo">
                  <div className="row">
                    <div className="col-sm-10 offset-md-1">
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-2"><a href={"items/"+item.id}><img src={item.thumbnail} alt="items.thumbnail"/></a>
                          </div>
                          <div className="col-sm-6 Izquierda">
                            <div className="Precio fs24">${item.price} {item.shipping.free_shipping?(<img src={require('./Assets/ic_shipping.png')} alt="Envío gratis"/>):(<div></div>)}</div>
                            <div className="fs18">{item.title}</div>
                          </div>
                          <div className="col-sm-2 fs12">{item.address.state_name}
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
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
      </div>
    );
  }
}

export default App;