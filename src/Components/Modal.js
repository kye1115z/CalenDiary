import React from "react";
import { useState } from 'react';
import styled from "styled-components";
import {BiHappyAlt} from "react-icons/bi"
import EmojiModal from "./EmojiModal";

function Modal({ onClose, appname, date }) {
  const handleClose = () => {
    onClose?.();
  };

  //박스 이동하기
  const [box, setBox] = useState({left:35, top: 200});
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({x:0, y:0})

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const offsetX = e.clientX - box.left;
    const offsetY = e.clientY - box.top;
    setOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newLeft = e.clientX - offset.x;
      const newTop = e.clientY - offset.y;
      setBox({
        left: newLeft,
        top: newTop
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  //입력값
  const [text, setText] = useState("")
  const handleSubmit = (e) => {
    
  };
  const handleChange = (e) => {
    setText(e.target.value);
  }

  //인풋 입력값
  const [textareaHeight, setTextareaHeight] = useState({
    row: 1,
    lineBreak: {},
  });

  const resizeTextarea = e => {
    const { scrollHeight, clientHeight, value } = e.target;
    
    // 줄바꿈이 일어날 때
    if (scrollHeight > clientHeight) {
      setTextareaHeight(prev => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [value.length - 1]: true },
      }));
    }
  
    // 텍스트 지워서 줄바꿈 지점에 도달했을 때
    if (textareaHeight.lineBreak[value.length]) {
      setTextareaHeight(prev => ({
        row: prev.row - 1,
        lineBreak: { ...prev.lineBreak, [value.length]: false },
      }));
    }
  };

  const onKeyEnter = e => {
    if (e.code === 'Enter') {
      setTextareaHeight(prev => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [e.target.value.length]: true },
      }));
    }
  };

  //인풋 클릭시
  let [isInputClicked, setIsInputClicked] = useState(false);

  //이모티콘 오픈
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
      setIsOpen(true);
  };

  return (
      <div>
        <ModalWrap
          style={{ left: box.left, top: box.top }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}>
          {appname === 'calendar' ? (
          <Contents>
             <Button onClick={handleClose}>닫기</Button>
            <div className="Header" style={{marginBottom: "0.3rem"}}>
              <button 
                onClick={onClick}
                style={{border:"none",
                        margin: "0",
                        padding: "0",
                        cursor:"pointer"}}>
              </button>
              <p>캘린더 일정 어떻게 추가?</p>
            </div>
            <div className="dateBox">
                <p className="dateName">{date[0].year}년 {date[0].month}월 {date[0].day}일</p>
            </div>
          </Contents>
          ) :
          (<Contents>
            <Button onClick={handleClose}>닫기</Button>
            <div className="Header" style={{marginBottom: "0.3rem"}}>
              <button 
                onClick={onClick}
                style={{border:"none",
                        margin: "0",
                        padding: "0",
                        cursor:"pointer"}}>
                <BiHappyAlt 
                  style={{width: "1.8em",
                          height: "1.88em", 
                          marginRight:"0.5rem",}}/>
              </button>
              {isOpen && (<EmojiModal
                open={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
                appname={"diary"}
                date={date}
                />)}
              <p>내가 해냄</p>
              <div className="dateBox">
              <p className="dateName">{date[0].year}년 {date[0].month}월 {date[0].day}일</p>
            </div>
            </div>
              <form onSubmit={handleSubmit}
                    style={{height: "100px"}}>
                <Input
                  type="text"
                  name="note"
                  placeholder={isInputClicked === true ? "" : "Write note here..."}
                  values={text}
                  onChange={handleChange}
                  autoComplete="off"
                  onInput={resizeTextarea}
                  onKeyDown={onKeyEnter}
                  row={textareaHeight.row}
                  onFocus={() => {
                    setIsInputClicked(true);
                  }}
                  onBlur={() => {
                    setIsInputClicked(false);
                  }}

                  />
              </form>
          </Contents>
          )
          }
        </ModalWrap>
      </div>
  );
}


const ModalWrap = styled.div`
  width: 290px;
  height: 190px;
  border-radius: 24px;
  background-color: #EFEFEF;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grabbing;
`;

const Contents = styled.div`
  width: 95%;
  height: 90%;
  margin-top: 10px;
  margin-left: 15px;
  p {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: bold;
    font-size: 1.35rem;
  }
  .dateBox {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1%;
  }
  .dateName {
    font-size: 0.7rem;

  }
  .Header {
    display: flex;

  }
`;
const Button = styled.button`
  float: right;
  margin-top: 8px;
  margin-right: 15px;
  border: none;
  color: black;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    text-shadow: 1px 1px 1px gray;
  }
`;

const Input = styled.textarea`
  all: unset;
  display: block;
  width: 90%;
  /* height: ${({ row, theme }) => + theme.listSize * row + 20 }px; */
  height: 100px;
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  resize: none;
  margin-top: 5%;
  background-color: transparent;
  border: none;
  color: #A0A0A0;
  outline: none;
  cursor: auto;
`;
export default Modal;