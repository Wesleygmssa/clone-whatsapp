import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const Header = styled.div`
  display: flex;
  height: 60px;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  align-items: center;

  .chatWindow-info {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .chatWindow-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 15px;
    margin-right: 15px;
  }

  .chatWindow-name {
    font-size: 17px;
    color: #000;
  }
`;
export const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;

  .chatWindow-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all ease 0.3s;
  }
`;

export const Main = styled.div`
  flex: 1;
  overflow-y: auto;
  background: #e5ddd5;
  background-size: cover;
  background-position: center;
  background-image: url("https://external-preview.redd.it/rEwFriCkfAtjOb5b-23b4tGGVcuvfaBhttps://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.pngqamYNJrgxnLM.png?auto=webp&s=f3bf0b5c90e4c5fda12ff2139781c854554fd198");
  padding: 20px 30px;
`;

export const MessageItem = styled.div``;

export const Footer = styled.div`
  height: 62px;
  display: flex;
  align-items: center;

  .chatWindow-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    transition: all ease 0.3s;
  }

  .chatWindow-pre {
    display: flex;
    margin: 0 15px;
  }

  .chatWindow-inputarea {
    flex: 1;

    input {
      width: 100%;
      height: 40px;
      border: 0;
      outline: 0;
      background-color: #fff;
      border-radius: 20px;
      font-size: 15px;
      color: #4a4a4a;
      padding-left: 15px;
    }
  }

  .chatWindow-pos {
    display: flex;
    margin: 0 15px;
  }
`;
export const EmojiArea = styled.div`
  height: 200px;
  overflow-y: hidden;
  transition: all ease 0.3s;
  aside.emoji-picker-react {
    width: auto;
    background: none;
  }
  .emoji-picker-react .emoji-group:before {
    background: none;
  }
`;
