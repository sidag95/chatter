import { useState, useCallback } from "react";
import { MessageList, UseChatContext, UseChatContextProps } from "./types";

const chatData: {[key: string]: MessageList} = {}

export function useChatContext(props: UseChatContextProps): UseChatContext {
  const { id } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dummy, setDummy] = useState<number>(0); // HACK! dummy var to re render component

  const setChat = useCallback((message: MessageList, cursor: number) => {
    const chatForId = chatData[id] || [];
    // use cursor to figure out chat position
    chatData[id] = [...chatForId, ...message]
    setDummy((dum: number) => dum + 1);
  }, [id]) // eslint-disable-line

  return {
    chat: chatData[id] || [],
    setChat
  }
}