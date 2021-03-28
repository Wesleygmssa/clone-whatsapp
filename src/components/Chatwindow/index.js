import React, { useEffect, useRef, useState } from "react";
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
import EmojiPicker from "emoji-picker-react";
import MicIcon from "@material-ui/icons/Mic";
import { MessageItem } from "../MessageItem";

const ChatWindow = ({ user }) => {
  const body = useRef();

  let recognition = null;
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([
    {
      author: 123,
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      author: 123,
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      author: 1234,
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      author: 123,
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      author: 123,
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      author: 1234,
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },

    {
      author: 123,
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      author: 123,
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      author: 1234,
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },

    {
      author: 123,
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      author: 123,
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      author: 1234,
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ]);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

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

  const handleSendClick = () => {};

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      };

      recognition.start();
    }
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
      <Main ref={body}>
        {list.map((item, key) => (
          <MessageItem key={key} data={item} user={user} />
        ))}
      </Main>
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
          <input
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="chatWindow-pos" onClick={handleMicClick}>
          {text === "" && (
            <div className="chatWindow-btn">
              <MicIcon style={{ color: listening ? "#126ece" : "#919191" }} />
            </div>
          )}

          {text !== "" && (
            <div className="chatWindow-btn" onClick={handleSendClick}>
              <SendIcon style={{ color: "#919191" }} />
            </div>
          )}
        </div>
      </Footer>
    </Container>
  );
};

export default ChatWindow;
