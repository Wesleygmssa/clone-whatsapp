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
  }
`;

export const Main = styled.div``;
export const Footer = styled.div``;
