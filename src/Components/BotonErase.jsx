
import '../Styles/BotonErase.css'

function BotonErase({ handleClick }) {
    return (
        <button
            className='boton-erase'
            onClick={handleClick}>
            CE
        </button>
    );
}

export default BotonErase;