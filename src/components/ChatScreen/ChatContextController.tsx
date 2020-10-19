import React, {useState} from "react";
import { ChatContext } from "./ChatContext"
import { MessageList, ChatContextControllerProps, MessageBody, Message } from "./types";

export function ChatContextController(props: ChatContextControllerProps) {
  const { children } = props;
  const [chat, setChat] = useState<MessageList>([]);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  async function getChat(id: string) {
    try {
      setIsLoading(true)
      setHasLoaded(false)
      setError(null)
      // await data
      await new Promise((resolve) => {setTimeout(resolve, 300)}) // fake request
      setChat([
        {
          id: "1",
          authorId: "1",
          message: "Hi guys",
          type: "string"
        },{
          id: "2",
          authorId: "2",
          message: "Hi",
          type: "string"
        }, {
          id: "3",
          authorId: "1",
          message: "What are you upto?",
          type: "string"
        }, {
          id: "4",
          authorId: "2",
          message: "I am planning my next trip. How about you?",
          type: "string"
        }, {
          id: "5",
          authorId: "1",
          message: "I am reading the autobiography of a yogi",
          type: "string"
        }
      ])
      setHasLoaded(true)
      setIsLoading(false)
      // unset isLoading
    } catch (error) {
      // unset isLoading
      // set hasLoaded
      // set error
    }
  }

  async function sendMessage(messageBody: MessageBody) {
    try {
      setIsLoading(true)
      setHasLoaded(false)
      setError(null)
      // await data
      await new Promise((resolve) => { setTimeout(resolve, 300) }) // fake request
      const message: Message = { ...messageBody, id: `${Math.random()}` }
      setChat([...chat, message])
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
