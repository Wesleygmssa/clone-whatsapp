import React from "react";
import { Container, Header, Main, Footer, GroupButtons } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
          <div className="chatWindow-name">Wesley Guerra</div>
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
      <Footer></Footer>
    </Container>
  );
};

export default ChatWindow;
