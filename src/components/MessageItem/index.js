import React from "react";
import { Container, MessageItemContent } from "./styles";

export const MessageItem = ({ data, user }) => {
  return (
    <Container
      style={{
        justifyContent: user.id === data.author ? "flex-end" : "flex-start",
      }}
    >
      <MessageItemContent>
        <div className="messageText">{data.body}</div>
        <div className="messageDate">13:00</div>
      </MessageItemContent>
    </Container>
  );
};
