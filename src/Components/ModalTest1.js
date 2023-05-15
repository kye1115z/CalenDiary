import {useState} from 'react'
import Modal from './Modal';
// 캘린더
function ModalTest1() {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(true);
    };

     return (
        <>
            <div className="ModalWrap">
              <button onclick={onClick}>open Modal</button>
              {isOpen && (<Modal
                open={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
                appname={"calendar"}
                />)}
            </div>
        </>
    );
}

export default ModalTest1;
