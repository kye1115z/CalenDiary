import { useState } from "react";
import Modal from "../Components/Modal";
// 다이어리
function ModalTest2() {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(true);
    };
    const date = useState({
        year: 2023,
        month: 1,
        day: 1,
    });

    return (
        <>
            <div className="ModalWrap">
                <button onClick={onClick}>open Modal Diary</button>
                {isOpen && (
                    <Modal
                        open={isOpen}
                        onClose={() => {
                            setIsOpen(false);
                        }}
                        appname={"diary"}
                        date={date}
                    />
                )}
            </div>
        </>
    );
}

export default ModalTest2;
