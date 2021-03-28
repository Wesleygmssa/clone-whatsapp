import styled from "styled-components";

export const Container = styled.div`
  width: 35%;
  max-width: 415px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  transition: all ease 0.3s;
`;

export const Header = styled.div`
  display: flex;
  background-color: #00bfa5;
  align-items: center;
  padding: 60px 15px 15px 15px;

  .backbutton {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .headtitle {
    font-size: 19px;
    height: 40px;
    line-height: 40px;
    flex: 1;
    font-weight: bold;
    color: #fff;
    margin-left: 20px;
  }
`;
export const List = styled.div`
  flex: 1;
  overflow-y: auto;

  .chatWindow-pre {
    display: flex;
    margin: 0 15px;
  }

  .chatWindow-inputarea {
    flex: 1;
  }
`;

export const NewChatItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }

  .item-name {
    font-size: 17px;
    color: #000;
  }
`;
