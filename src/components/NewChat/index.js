import React, { useState } from "react";
import { Container, Header, List, NewChatItem } from "./styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const NewChat = ({ user, chatlist, show, setShow }) => {
  const [list] = useState([
    {
      id: 123,
      avatar: "https://avatars.githubusercontent.com/u/41512408?v=4",
      name: "Wesley Guerra",
    },
    {
      id: 1234,
      avatar: "https://avatars.githubusercontent.com/u/41512408?v=4",
      name: "Wesley Guerra",
    },
    {
      id: 12345,
      avatar: "https://avatars.githubusercontent.com/u/41512408?v=4",
      name: "Wesley Guerra",
    },
    {
      id: 12356,
      avatar: "https://avatars.githubusercontent.com/u/41512408?v=4",
      name: "Wesley Guerra",
    },
  ]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Container style={{ left: show ? 0 : -415 }}>
      <Header>
        <div onClick={handleClose} className="backbutton">
          <ArrowBackIcon style={{ color: "#fff" }} />
        </div>
        <div className="headtitle">Nova Conversa</div>
      </Header>
      <List>
        {list.map((item, key) => (
          <NewChatItem key={key}>
            <img src={item.avatar} alt="" />
            <div className="item-name">{item.name}</div>
          </NewChatItem>
        ))}
      </List>
    </Container>
  );
};
