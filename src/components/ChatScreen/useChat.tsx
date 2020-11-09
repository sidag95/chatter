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
      setChat([{ ...message, id }], 0)
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
    setChat([{...message, id: currentUserId, message: "hi"}], 0)
    send(messageParams, message)
  }

  return {chat, sendMessage, fetchMessages, unsubscribe}
}
