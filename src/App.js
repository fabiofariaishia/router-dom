import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';

console.log(window.location);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/sobremim" element={<SobreMim />} />
                <Route path='*' element={<h1>Página não encontrada.</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
