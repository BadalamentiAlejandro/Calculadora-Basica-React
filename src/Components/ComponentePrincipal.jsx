
import '../Styles/ComponentePrincipal.css';
import Calculadora from './Calculadora';

function ComponentePrincipal() {

    return(
        <div className='componente-principal'>
            <h1 className='componente-principal-titulo'>Calculadora</h1>
            <div>
                <Calculadora />
            </div>
        </div>
    );
}

export default ComponentePrincipal;