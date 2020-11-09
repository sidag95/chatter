import { useState, useCallback } from "react";
import { MessageList, UseChatContext, UseChatContextProps } from "./types";

export function useChatContext(props: UseChatContextProps): UseChatContext {
  const { id } = props;
  const [chatData, setChatData] = useState<{ [key: string]: MessageList }>({});

  const setChat = useCallback((message: MessageList, cursor: number) => {
    setChatData(chat => {
      const chatForId = chat[id] || [];
      debugger;
      // use cursor to figure out chat position
      return { ...chat, [id]: [...chatForId, ...message] }
    });
  }, [id]) // eslint-disable-line

  return {
    chat: chatData[id] || [],
    setChat
  }
  
}