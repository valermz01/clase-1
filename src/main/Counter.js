import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import  './css/Counter.css'

function Counter({datos}){
    console.log(datos);
    const [contador, setContador] = useState(0);

    const incrementarContador = () => { 
        setContador(contador + 1);
    };

    const DecrementarContador = () => { 
        setContador(contador - 1);
    };

    const ResetContador = () => { 
        setContador(0);
    };

    return (
        <div>
            
            {datos.map((datos, index)=> {
                return(
                    <div key= {index}>
                       <h1>{datos}</h1>
                    </div>

                );
            })}
            <Button variant="success" className="btn-margin" onClick={incrementarContador}>Increment</Button>
            <Button variant="success" className="btn-margin" onClick={DecrementarContador}>Decrement</Button>
            <Button variant="success" className="btn-margin" onClick={ResetContador}>Reset</Button>

            
            <h2>Contador: {contador}</h2>
        </div>
    )
}

export default Counter;