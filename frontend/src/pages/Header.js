import React, { Component } from 'react';


class Header extends Component {
   handleClick(evt){
    //No logre encontrar como hacer trigger del formulario desde afuera en react.
  }
  render() {
    return (<div className="Buscador">
      <div className="container">
        <div className="row">
          <div className="col-sm-1 offset-md-1">
            <img src={require('./Assets/Logo_ML.png')} alt="logo"/>
          </div>
          <div className="col-sm-9">
            <div className="search">
            <form action="/items" method="GET" name="pepe" id="search-form">
              <input type="text" placeholder="Nunca dejes de buscar" className="form-control" name="search"></input>
              <div  id="Lupa"><img src={require('./Assets/ic_Search.png')} alt="Nunca dejes de buscar" onClick={this.handleClick}/></div>
            </form>
            </div>          
          </div>
        </div>
      </div>
      
      </div>);
  }
}
export default Header;