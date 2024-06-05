import { BrowserRouter } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';

console.log(window.location);

const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />;

function App() {
    return (
        <BrowserRouter>
            
        </BrowserRouter>
    );
}

export default App;
