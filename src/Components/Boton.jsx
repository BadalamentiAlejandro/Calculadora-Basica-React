
import '../Styles/Boton.css'

function Boton(props) {

    //Esta función, llama a otra función pasada por props de nombre 'addInput', declarada en 'Calculadora.jsx'. También se puede hacer sin esta función, directamente llamando a 'addInput' en el eventListener 'onClick'.
    const handleClick = () => {
        props.handleClick(props.children)
    };

    //Mediante esta función se decide cual va a ser el nombre de la clase de los botones, dependiendo de si es operador o no.
    const esOperador = valor => {
        return(isNaN(valor) && (valor !== '.') && (valor !== '='));
    };

    return (
        <button className={`boton-contenedor-${esOperador(props.children) ? 'operador' : 'no-operador'}`}
        // Esta es la otra manera de llamar a 'addInput'. Se necesita la sintaxis de función flecha para que react entienda que debe utilizar la función en esta linea.
        // onClick={() => props.handleClick(props.children)}
        onClick={handleClick}
        disabled={props.disable}
        >
            {props.children}
        </button>
    );
};

export default Boton;