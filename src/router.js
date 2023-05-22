import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ModalTest1 from "./Pages/ModalTest1";
import ModalTest2 from "./Pages/ModalTest2";
import Modal from "./Components/Modal";
import EmojiModal from "./Components/EmojiModal";
import Main from "./Main";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Calendar from "./Calendar";
import Diary from "./Diary";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/modaltest1" element={<ModalTest1 />} />
                <Route path="/modaltest2" element={<ModalTest2 />} />
                <Route path="/modal" element={<Modal />} />
                <Route path="/emojimodal" element={<EmojiModal />} />
                <Route path="/" element={<Main />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/Calendar" element={<Calendar />} />
                // 수정된 부분
                <Route path="/Diary" element={<Diary />} /> // 수정된 부분
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
