import {useState} from 'react'
import Modal from '../Components/Modal';
// 캘린더
function ModalTest1() {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(true);
    };
    const date = useState({
        year: 2023,
        month: 1,
        day: 1
    })

     return (
        <>
            <div className="ModalWrap">
            <button onClick={onClick}>open Modal Calendar</button>
              {isOpen && (<Modal
                open={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
                appname={"calendar"}
                date={date}
                />)}
            </div>
        </>
    );
}

export default ModalTest1;
