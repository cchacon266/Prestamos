import React, { Fragment, useState } from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";

function App() {

   //DEFINIR EL STATE
   const [cantidad, guardarCantidad] = useState(0);
   const [plazo, guardarPlazo] = useState('');
   const [total,guardarTotal] = useState(0)

  return (
    <Fragment>
      <Header titulo="cotizador de prestamos" />

      <div className="container">
        <Formulario
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo = {plazo}
        guardarPlazo={guardarPlazo}
        total={total}
        guardarTotal={guardarTotal}

        
        />
       
       <p>Total a pagar: ${total}</p>


      </div>
    </Fragment>
  );
}

export default App;