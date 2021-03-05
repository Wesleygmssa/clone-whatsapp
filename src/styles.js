import styled from 'styled-components';

export const AppWindow = styled.div`
    display: flex;
    height: 100vh;
    background-color: #EDEDED;
`;

export const SideBar = styled.div`
    width: 35%;
    max-width: 415px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ddd;
`;

export const ContainerArea = styled.div`
    flex: 1;
`;

export const Header = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    
    img{
        width: 40px;
        height: 40px;
        border-radius: 20px;
        cursor: pointer;
    }
`;

export const Search = styled.div`
    background-color: #f6f6f6;
    border-bottom: 1px solid #eee;
    padding: 5px 15px;
`;

export const SearchInput = styled.div`
    background-color: #fff;
    height: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 10px;

    input{
        flex: 1;
        border: 0;
        outline: 0;
        background-color: transparent;
        margin-left: 10px;
    }
`;  

export const ChatList = styled.div`
    flex: 1;
    background-color: #fff;
    overflow-y: auto; // barra de rolagem

    &::-webkit-scrollbar{ // bara de rolagem
        width: 6px;
        height: 6px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: rgba(0,0,0,0.2)
    }
`;

export const Button = styled.div`
    display: flex;
    
    div{
        width: 40px;
        height: 40px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 5px;

    }

`;

export const Chatwindow = styled.div`

`;