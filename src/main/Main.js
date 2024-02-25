// import React from 'react'
import Counter from './Counter';
import img from'./img/Paisaje.jpg';
import './css/Counter.css';


function Main(){
    return(
        <div>
            <Counter datos={['Brissa Valeria Ramírez Cruz', '20991', '5°A']} />
            <img src={img} alt="Paisaje.jpg"/>
            
        </div>
    )
}

export default Main