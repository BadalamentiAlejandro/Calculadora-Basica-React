
import '../Styles/Calculadora.css';
import Boton from './Boton';
import BotonClear from './BotonClear';
import Input from './Input';
import { useState } from 'react';

//Uso de librería externa para realizar los calculos matemáticos de forma automática.
import { evaluate } from 'mathjs';


function Calculadora() {

    const [input, setInput] = useState('');

    //Función que me permite renderizar el input a medida que cambia. Este se pasa por props al componente 'Input'.
    const addInput = val => {
        setInput(input + val);
    };

    //Como dice el nombre, esta función resetea el input.
    const clear = () => {
        setInput('');
    };

    //Función que permite realizar los cálculos matemáticos mediante la librería 'Mathjs'. Se utiliza el método 'evaluate'
    const evaluarResultado = () => {
        input ? setInput(evaluate(input)) : alert('Ingresa un número para hacer el cálculo');
    };

    //Función para desabilitar los botones de los operadores si ya fueron utilizados en el input. Esta se pasa por props al componente 'Boton'.
    const disableOperators = typeof input === 'string' ? input.includes('+') || input.includes('-') || input.includes('*') || input.includes('/') : false;

    return (
        <div className='contenedor-calculadora'>
            <Input input={input} />
            <div className='filas'>
                <Boton handleClick={addInput}>1</Boton>
                <Boton handleClick={addInput}>2</Boton>
                <Boton handleClick={addInput}>3</Boton>
                <Boton handleClick={addInput} disable={disableOperators}>/</Boton>
            </div>
            <div className='filas'>
                <Boton handleClick={addInput}>4</Boton>
                <Boton handleClick={addInput}>5</Boton>
                <Boton handleClick={addInput}>6</Boton>
                <Boton handleClick={addInput} disable={disableOperators}>*</Boton>
            </div>
            <div className='filas'>
                <Boton handleClick={addInput}>7</Boton>
                <Boton handleClick={addInput}>8</Boton>
                <Boton handleClick={addInput}>9</Boton>
                <Boton handleClick={addInput} disable={disableOperators}>-</Boton>
            </div>
            <div className='filas'>
                <Boton handleClick={evaluarResultado}>=</Boton>
                <Boton handleClick={addInput}>0</Boton>
                <Boton handleClick={addInput}>.</Boton>
                <Boton handleClick={addInput} disable={disableOperators}>+</Boton>
            </div>
            <BotonClear handleClick={clear} />
        </div>
    );
}

export default Calculadora;