import { useCallback } from "react";
import { useRealtime } from "../Api/useRealtime";
import { useRestApi } from "../Api/useRestApi";
import { UseChatProps, UseChat, MessageBody } from "./types";
import { useChatContext } from "./useChatContext";

export function useChat(props: UseChatProps): UseChat {
  const { id, currentUserId } = props;
  const { chat, setChat } = useChatContext({ id });

  const onData = useCallback(
    (message: MessageBody) => {
      setChat([{ ...message, authorId: id, id: `${Math.random()}` }], 0)
    },
    [id, setChat], // eslint-disable-line
  )

  const { sendMessage: send, unsubscribe } = useRealtime(onData, id);
  const { getChat } = useRestApi()

  const fetchMessages = async (cursor: number) => {
    const chatData = await getChat(id, cursor)
    setChat(chatData, cursor);
  }

  const sendMessage = (messageParams: string, message: MessageBody) => {
    setChat([{...message, authorId: currentUserId, id: `${Math.random()}`}], 0)
    send(messageParams, message)
  }

  const populateMessages = async () => {
    if (!chat.length) {
      fetchMessages(0);
    }
  }

  return {chat, sendMessage, fetchMessages, populateMessages, unsubscribe}
}
