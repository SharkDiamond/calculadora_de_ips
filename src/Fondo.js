
import React from 'react';
import Formularios from   './Formularios';
import backend from "./backend.json";



class fondo extends React.Component {


constructor(){

super();

this.state={
backend

}



}


  render() {
    
   const titulo=<p className="display-1 font-weight-normal text-primary">{this.props.title}</p>

  return(

<div className="m-5 bg-dark rounded">


{titulo}
<hr></hr>
<br></br>
<Formularios titulo1="Por Favor Introduzca El / A Calcular" titulo2="Mask" titulo3="Ips Totales" titulo4="Ips De Host"/>



 

    </div>
  );



 
}
}
export default fondo;
