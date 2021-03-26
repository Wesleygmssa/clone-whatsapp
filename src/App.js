import React, { useState, useEffect } from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/Chatwindow";
import {
  AppWindow,
  SideBar,
  ContainerArea,
  Header,
  Search,
  ChatList,
  Button,
  SearchInput,
} from "./styles";
import { GlobalStyled } from "./styles/global";

function App() {
  const [chatlist, setChatList] = useState([
    {
      chatId: 1,
      title: "Fulano de tal",
      image: "https://avatars.githubusercontent.com/u/41512408?v=4",
    },
    {
      chatId: 2,
      title: "Fulano de tal",
      image: "https://avatars.githubusercontent.com/u/41512408?v=4",
    },
    {
      chatId: 3,
      title: "Fulano de tal",
      image: "https://avatars.githubusercontent.com/u/41512408?v=4",
    },
    {
      chatId: 4,
      title: "Fulano de tal",
      image: "https://avatars.githubusercontent.com/u/41512408?v=4",
    },
  ]);
  const [activeChat, setActiveChat] = useState({});
  console.log(activeChat);
  return (
    <>
      <AppWindow>
        <SideBar>
          <Header>
            <img
              src="https://avatars.githubusercontent.com/u/41512408?v=4"
              alt=""
            />
            <Button>
              <div>
                <DonutLargeIcon style={{ color: "#919191" }} />
              </div>
              <div>
                <ChatIcon style={{ color: "#919191" }} />
              </div>
              <div>
                <MoreVertIcon style={{ color: "#919191" }} />
              </div>
            </Button>
          </Header>
          <Search>
            <SearchInput>
              <SearchIcon fontSize="small" style={{ color: "#919191" }} />
              <input
                type="search"
                placeholder="Procurar ou começar uma nova conversa"
              />
            </SearchInput>
          </Search>
          <ChatList>
            {chatlist.map((item, key) => (
              <ChatListItem
                key={key}
                onClick={() => {
                  setActiveChat(chatlist[key]);
                }}
              />
            ))}
          </ChatList>
        </SideBar>
        <ContainerArea>
          {activeChat.chatId !== undefined && <ChatWindow />}

          {activeChat.chatId === undefined && <ChatIntro />}
        </ContainerArea>
      </AppWindow>
      <GlobalStyled />
    </>
  );
}

export default App;
