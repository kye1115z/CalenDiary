import React from "react";
import styled from "styled-components";
import {BsEmojiSunglasses} from "react-icons/bs"

function EmojiModal({ onClose }) {
  const handleClose = () => {
    onClose?.();
  };

  
  return (
      <div>
        <ModalWrap>
          <Contents>
              <Button onClick={handleClose}>
                <BsEmojiSunglasses />
              </Button>
              <Button onClick={handleClose}>
                <BsEmojiSunglasses />
              </Button>
              <Button onClick={handleClose}>
                <BsEmojiSunglasses />
              </Button>
              <Button onClick={handleClose}>
                <BsEmojiSunglasses />
              </Button>
              <Button onClick={handleClose}>
                <BsEmojiSunglasses />
              </Button>
          </Contents>
        </ModalWrap>
      </div>
  );
}


const ModalWrap = styled.div`
  width: 290px;
  height: 50px;
  border-radius: 15px;
  background-color: #EFEFEF;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1%;
  left: 102%;
`;

const Contents = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    text-shadow: 1px 1px 1px gray;
  }
`;
export default EmojiModal;