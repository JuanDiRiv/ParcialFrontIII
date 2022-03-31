import data from './data.json';
import React, { Component } from 'react';
import Opciones from './Opciones';
import Historial from './Historial';

class Historia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historial: [],
      contador: 0,
      seleccionAnterior: "",
    };
  }

  

  click = (e) => {
    const id = e.target.id;
    if (this.state.contador >= 7) {
      alert("Fin.");
    } else if (id === "A" && this.state.seleccionAnterior !== "A") {
      this.setState({
        contador: this.state.contador + 1,
        seleccionAnterior: "A",
      });
    } else if (id === "A" && this.state.seleccionAnterior === "A") {
      this.setState({
        contador: this.state.contador + 2,
      });
    } else if (id === "B" && this.state.seleccionAnterior === "A") {
      this.setState({
        contador: this.state.contador + 3,
        seleccionAnterior: "B",
      });
    } else if (id === "B") {
      this.setState({
        contador: this.state.contador + 2,
        seleccionAnterior: "B",
      });
    }
  };
  
  componentDidUpdate( ) {
   
    this.state.historial.push(this.state.seleccionAnterior);
  
}
  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Opciones
          click={this.click}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <Historial
          seleccionAnterior={this.state.seleccionAnterior}
          historial={this.state.historial.map(
            (e, i) => (
              <li key={i}>{e}</li>
            ),
            data[this.state.contador].id
          )}
        />
      </div>
    );
  }
}
export default Historia;