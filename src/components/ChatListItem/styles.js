import styled from "styled-components";

export const ChatListItems = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 70px;
  transition: all 0.2s;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 15px;
  }

  &:hover {
    background-color: #f5f5f5;
  }

  &.active {
    background-color: #ebebeb;
  }
`;

export const ChatListLines = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #eee;
  padding-right: 15px;
  margin-left: 15px;

  // tres ... LastMsg p
  flex-wrap: wrap;
  min-width: 0;
`;

export const ChatListLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  strong {
    font-size: 17px;
    color: #000;
  }

  span {
    font-size: 12px;
    color: #999;
  }
`;

export const LastMsg = styled.div`
  font-size: 14px;
  color: #999;
  display: flex;
  width: 100%;

  P {
    padding: 5px 0px;
    overflow: hidden; // esconder
    white-space: nowrap; // tudo sempre em uma linha
    text-overflow: ellipsis;
    margin: 0;
  }
`;
