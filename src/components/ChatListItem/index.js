import React from "react";

import { ChatListItems, ChatListLines, ChatListLine, LastMsg } from "./styles";

const ChatListItem = ({ onClick, active, data }) => {
  return (
    <ChatListItems onClick={onClick} className={`${active ? "active" : ""}`}>
      <img src={data.avatar} alt="" />
      <ChatListLines>
        <ChatListLine>
          <strong>{data.title}</strong>
          <span>19:00</span>
        </ChatListLine>
        <ChatListLine>
          <LastMsg>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </LastMsg>
        </ChatListLine>
      </ChatListLines>
    </ChatListItems>
  );
};

export default ChatListItem;
