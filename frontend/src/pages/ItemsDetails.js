import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  state = {item: [], desc:[], cats:[]}

  componentDidMount() {
    console.log(this.props.match.params.id);
    fetch('/itemsDetails/'+this.props.match.params.id)
      .then(res => res.json())
      .then(item => this.setState({ "item":item }))
      .then(item=>
      fetch('/itemsDetails/Cat/'+this.state.item.category_id)
            .then(res => res.json())
            .then(cats => this.setState({ "cats":cats }))
      );
    fetch('/itemsDetails/Desc/'+this.props.match.params.id)
      .then(res => res.json())
      .then(desc => this.setState({ "desc":desc }));
    

  }

   render() {
    const { item } = this.state;
    const { desc } = this.state;
    const { cats } = this.state;
    {this.i=0}
     // console.log(asd.toArray());
    // var sillyString = asd.substr(1).substr(1).slice(0, -1).toString();
     // var dsa=JSON.parse(sillyString);
   
     // console.log(typeof(asd)); 
     return (
      <div className="App">
      <div className="body">
        {/* Check to see if any items are found*/}
        {item && desc && cats.path_from_root && item.attributes && item.pictures ? (
          <div>
      <div className="Migajas">
              {cats.path_from_root.map((cat) => {
              {this.i++}
              return(
              <div key="{cat.id}" className="inline"> 
              {cat.name}
              {this.i!=cats.path_from_root.length ? (
                <div className="inline">&nbsp;&nbsp;>&nbsp;&nbsp;</div>
                ):(
                <div className="inline"></div>)
              } 
              </div>
              
              );
            })}

      &nbsp;<span></span>
      </div>
                <div key={item.id} className="container Articulo">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-6">
                          {item.pictures && item.pictures.length? (
                          <img src={item.pictures[0].url} alt={item.title} className="col-sm-12"/>
                          ) :(
                          <div>No hay imagen disponible</div>
                          )}
                          </div>
                          <div className="col-md-4 Izquierda">
                          {console.log(item.attributes)}
                          <div className="fs14">{item.attributes.find(attribute => attribute.id === "ITEM_CONDITION").value_name} - {item.sold_quantity} vendidos</div>
                          <div className="row"><div className="col-md-8"><div className="fs24 Negrita Izquierda">{item.title}</div></div></div>
                          <div className="fs46">${item.price}</div>
                          <div className="fs46"><a id="submit" className="btn btn-info col-md-12" href="">Comprar</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="fs28 Negrita Izquierda">Descripción</div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="fs16 Izquierda">{desc.plain_text}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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