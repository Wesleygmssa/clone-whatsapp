import React, { useState } from "react";
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
import { NewChat } from "./components/NewChat";

function App() {
  const [chatlist] = useState([
    {
      chatId: 1,
      title: "Wesley Guerra",
      avatar: "https://avatars.githubusercontent.com/u/41512408?v=4",
    },
    {
      chatId: 2,
      title: "Luana",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4NJrAgITT4xbcz5rr9EtObMHw5PgjcBeCA&usqp=CAU",
    },
    {
      chatId: 3,
      title: "Maria",
      avatar: "https://img.r7.com/images/2014/08/12/2ekxd7mfze_7m1aumtmx8_file",
    },
    {
      chatId: 4,
      title: "Fernanda",
      avatar:
        "https://i.pinimg.com/236x/bc/43/60/bc4360bac1e89a91999dc3a2ec3f5a4d.jpg",
    },
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 1234,
    avatar: "https://avatars.githubusercontent.com/u/41512408?v=4",
    name: "Wesley Guerra",
  });

  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  };

  return (
    <>
      <AppWindow>
        <SideBar>
          <NewChat
            chatlist={chatlist}
            user={user}
            show={showNewChat}
            setShow={setShowNewChat}
          />
          <Header>
            <img src={user.avatar} alt="" />
            <Button>
              <div>
                <DonutLargeIcon style={{ color: "#919191" }} />
              </div>
              <div onClick={handleNewChat}>
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
                data={item}
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={() => {
                  setActiveChat(chatlist[key]);
                }}
              />
            ))}
          </ChatList>
        </SideBar>
        <ContainerArea>
          {activeChat.chatId !== undefined && <ChatWindow user={user} />}

          {activeChat.chatId === undefined && <ChatIntro />}
        </ContainerArea>
      </AppWindow>
      <GlobalStyled />
    </>
  );
}

export default App;
