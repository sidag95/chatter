import React from "react";
import { ChatContextConsumerProps } from "./types";

const defaultChatContext = {
  chat: [],
  hasLoaded: false,
  isLoading: false,
  getChat: async function () { },
  sendMessage: async function () {},
  error: null
}

export const ChatContext = React.createContext<ChatContextConsumerProps>(defaultChatContext)