import React, { useState } from "react";
import {
  Container,
  Header,
  Main,
  Footer,
  GroupButtons,
  EmojiArea,
} from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import EmojiPicker from "emoji-picker-react";

const ChatWindow = () => {
  const [emojiOpen, setEmojiOpen] = useState(false);

  const handleEmojiClick = () => {};

  const handleOpenEmoji = () => {
    if (emojiOpen) {
      setEmojiOpen(false);
    } else {
      setEmojiOpen(true);
    }
  };

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  return (
    <Container>
      <Header>
        <div className="chatWindow-info">
          <img
            src="https://img.r7.com/images/2014/08/12/2ekxd7mfze_7m1aumtmx8_file"
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
      <EmojiArea style={{ height: emojiOpen ? "200px" : "0px" }}>
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </EmojiArea>
      <Footer>
        <div className="chatWindow-pre">
          <div
            className="chatWindow-btn"
            onClick={handleCloseEmoji}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow-btn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? "#009688" : "#919191" }}
            />
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
