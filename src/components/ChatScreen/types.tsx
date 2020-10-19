import React from "react"

export type MessageType = string;

export type MessageBody = {
  authorId: string;
  message: string;
  type: MessageType;
}

export type Message = MessageBody & {
  id: string;
}

export type MessageList = Array<Message>

export type ChatContextConsumerProps = {
  chat: MessageList;
  hasLoaded: boolean;
  isLoading: boolean;
  getChat: (id: string) => Promise<void>;
  sendMessage: (message: MessageBody) => Promise<void>;
  error: Error | null;
}

export type ChatContextControllerProps = {
  children: React.ReactNode;
}