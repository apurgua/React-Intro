import { useState } from 'react';
import './App.css';

function App() {

  // Estado inicial
  const [mensaje, setMensaje] = useState("¡Hola Mundo en React!"); 

  return (
    <div className="App">
      <div className="App"> 
       <h1 className="Letra">  {mensaje}  </h1>
       <div>
       <button className="boton" onClick={() => setMensaje("¡Hola Mundo en React Dinamico!")} >Cambiar Mensaje</button>;
       </div>
      </div>
    </div>
  );
}
export default App;

