
import '../Styles/BotonClear.css'

function BotonClear({ handleClick }) {
    return (
        <div className='boton-clear'
            onClick={handleClick}>
            Clear
        </div>
    );
}

export default BotonClear;