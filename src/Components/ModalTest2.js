import {useState} from 'react'
import Modal from './Modal';
// 다이어리
function ModalTest2() {
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
                appname={"diary"}
                />)}
            </div>
        </>
    );
}

export default ModalTest2;
