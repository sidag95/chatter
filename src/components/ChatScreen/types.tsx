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
  getChat: (id: string, currentUserId: string) => Promise<void>;
  sendMessage: (currentUserId: string, message: MessageBody) => Promise<void>;
  error: Error | null;
}

export type ChatContextControllerProps = {
  children: React.ReactNode;
}

export type UseChatProps = {
  id: string;
  currentUserId: string;
}

export type UseChat = {
  chat: MessageList;
  sendMessage: (currentUserId: string, message: MessageBody) => void;
  fetchMessages: (cursor: number) => Promise<void>;
  unsubscribe: (sub: string) => void;
  populateMessages: () => Promise<void>;
}

export type UseChatContextProps = {
  id: string;
}

export type UseChatContext = {
  chat: MessageList;
  setChat: (message: MessageList, cursor: number) => void;
}
