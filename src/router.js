import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ModalTest1 from './Components/ModalTest1';
import ModalTest2 from './Components/ModalTest2';
import Modal from './Components/Modal';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/modaltest1' element={<ModalTest1 />} />
                <Route path='/modaltest2' element={<ModalTest2 />} />
                <Route path='/modal' element={<Modal />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;