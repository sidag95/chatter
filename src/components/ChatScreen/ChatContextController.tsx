import React, {useState} from "react";
import { ChatContext } from "./ChatContext"
import { MessageList, ChatContextControllerProps, MessageBody, Message } from "./types";

export function ChatContextController(props: ChatContextControllerProps) {
  const { children } = props;
  const [chat, setChat] = useState<MessageList>([]);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  async function getChat(id: string, currentUserId: string) {
    try {
      setIsLoading(true)
      setHasLoaded(false)
      setError(null)
      // await data
      await new Promise((resolve) => { setTimeout(resolve, 300) }) // fake request
      // const defaultChatList = getDefaultChatMessages(id, currentUserId)
      // setChat(defaultChatList)
      setHasLoaded(true)
      setIsLoading(false)
      // unset isLoading
    } catch (error) {
      // unset isLoading
      // set hasLoaded
      // set error
    }
  }

  async function sendMessage(currentUserId: string, messageBody: MessageBody) {
    try {
      setIsLoading(true)
      setHasLoaded(false)
      setError(null)
      // await data
      // send(currentUserId, messageBody.message)
      await new Promise((resolve) => { setTimeout(resolve, 300) }) // fake request
      const message: Message = { ...messageBody, id: `${Math.random()}` }
      setChat(chat => [...chat, message])
      setHasLoaded(true)
      setIsLoading(false)
      // unset isLoading
    } catch (error) {
      // unset isLoading
      // set hasLoaded
      // set error
    }
  }

  const chatContext = {
    chat,
    hasLoaded,
    isLoading,
    getChat,
    sendMessage,
    error
  }

  return (
    <ChatContext.Provider value={chatContext}>
      {children}
    </ChatContext.Provider>
  )
}
