import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ModalTest1 from './Pages/ModalTest1';
import ModalTest2 from './Pages/ModalTest2';
import Modal from './Components/Modal';
import EmojiModal from './Components/EmojiModal';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/modaltest1' element={<ModalTest1 />} />
                <Route path='/modaltest2' element={<ModalTest2 />} />
                <Route path='/modal' element={<Modal />} />
                <Route path='/emojimodal' element={<EmojiModal />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;