import React from "react";
import { Container, MessageItemContent } from "./styles";

export const MessageItem = ({ data, key }) => {
  return (
    <Container style={{ justifyContent: "flex-end" }}>
      <MessageItemContent>
        <div className="messageText">{data.body}</div>
        <div className="messageDate">13:00</div>
      </MessageItemContent>
    </Container>
  );
};
