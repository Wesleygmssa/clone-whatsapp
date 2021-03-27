import React from "react";
import { Container, Header, Main, Footer, GroupButtons } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";

const ChatWindow = () => {
  return (
    <Container>
      <Header>
        <div className="chatWindow-info">
          <img
            src="https://avatars.githubusercontent.com/u/63751937?v=4"
            alt=""
            className="chatWindow-avatar"
          />
          <div className="chatWindow-name">Laila Amorim</div>
        </div>

        <GroupButtons>
          <div className="chatWindow-btn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow-btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow-btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </GroupButtons>
      </Header>
      <Main></Main>
      <Footer>
        <div className="chatWindow-pre">
          <div className="chatWindow-btn">
            <EmojiEmotionsIcon style={{ color: "#919191" }} />
          </div>
        </div>
        <div className="chatWindow-inputarea">
          <input type="text" placeholder="Digite uma mensagem" />
        </div>
        <div className="chatWindow-pos">
          <div className="chatWindow-btn">
            <SendIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </Footer>
    </Container>
  );
};

export default ChatWindow;
