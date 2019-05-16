
import React from 'react';

import './formularios.css';



class Formulario extends React.Component {


constructor(){

super();

this.state={
dato_introducido:null,
  totales:null,
host:null,
mask:null,
mask3:255,
mask2:255,
mask1:255

};

this.handleInput=this.handleInput.bind(this);

this.handleSubmit=this.handleSubmit.bind(this);
}




 handleInput(a){

var dato=a.target.value;
 
this.setState({

dato_introducido:dato

})


}

handleSubmit(e){

e.preventDefault();

//console.log(this.state.dato_introducido);

if(this.state.dato_introducido>23 && this.state.dato_introducido<33){


  var o=32;

  var calculo1=o-this.state.dato_introducido;
  
  var calculo2=Math.pow(2,calculo1);
  var calculo3=calculo2-2;
  var calculo4=256-calculo2;
  


  this.setState({
    totales:calculo2,
    host:calculo3,
    mask3:255,
    mask2:255,
    mask1:255,
    mask:calculo4
   
    })
  }



  if(this.state.dato_introducido>15 && this.state.dato_introducido<24){


    var o=32;

    var calculo1=o-this.state.dato_introducido;
    var calculoips=Math.pow(2,calculo1);
    var calculoresto=calculo1-8;
    var calculo2=Math.pow(2,calculoresto);

    var calculo3=calculoips-2;
    var calculo4=256-calculo2;
    


    this.setState({
      totales:calculoips,
      host:calculo3,
      mask1:255,
      mask2:255,
      mask:0,
      mask3:calculo4
     
      })
    }


    if(this.state.dato_introducido>7 && this.state.dato_introducido<16){


    
      var o=32;

      var calculo1=o-this.state.dato_introducido;
      var calculoips=Math.pow(2,calculo1);
      var calculoresto=calculo1-16;
      var calculo2=Math.pow(2,calculoresto);
  
      var calculo3=calculoips-2;
      var calculo4=256-calculo2;
      
  

      this.setState({
        totales:calculoips,
        host:calculo3,
        mask:0,
        mask3:0,
        mask1:255,
        mask2:calculo4
       
        })
      }
  
      if(this.state.dato_introducido>0 && this.state.dato_introducido<9){

        var o=32;

        var calculo1=o-this.state.dato_introducido;
        var calculoips=Math.pow(2,calculo1);
        var calculoresto=calculo1-24;
        var calculo2=Math.pow(2,calculoresto);
    
        var calculo3=calculoips-2;
        var calculo4=256-calculo2;



        this.setState({
          totales:calculoips,
          host:calculo3,
          mask:0,
          mask3:0,
          mask2:0,
          mask1:calculo4

         
          })
        }



//ASIGNANDO VALORES A LOS STATE


console.log(this.state.totales);

}


componentWillMount(){

//AQUI VA LA PANTALLA DE CARGA
}






  render() {

const formatos=(<form>
<p className="h2 texto mb-2">{this.props.titulo1}</p>
    <input type="text" name="barra" onChange={this.handleInput}></input>
    <br></br>
    <br></br>
    <input type="submit" value="Calcular" className="" onClick={this.handleSubmit}></input>
    </form>); 
console.log(this.state);
const octeto4=(<span className="texto">{this.state.mask}</span>);
const octeto3=(<span className="texto">{this.state.mask3}</span>);
const octeto2=(<span className="texto">{this.state.mask2}</span>);
const octeto1=(<span className="texto">{this.state.mask1}</span>);



const resultados=(<div className="text-aling-center">
<p className="h2 text-primary">Ips Totales=<span className="texto">{this.state.totales}</span></p>
<br></br>
<p className="h2 text-primary">Ips de Host=<span className="texto">{this.state.host}</span></p>
<br></br>
<p className="h2 text-primary">Mask={octeto1}.{octeto2}.{octeto3}.{octeto4}</p>
</div>);



  return(
<div className="">

{formatos}
<br></br>
{resultados}
<br></br>

    </div>
  );



 
}
}
export default Formulario;
