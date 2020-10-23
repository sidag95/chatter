import { useEffect, useState } from "react";
import { RealtimeConnectionProps } from "./types";

export function useRealtimeConnection(props: RealtimeConnectionProps) {
  const { onData } = props;
  const [connection, setConnection] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  useEffect(() => {
    if (!connection) {
      setIsConnected(false)
      setIsPending(true)
      setConnection(setupConnection())
    } else {
      if (isConnected) {
        if (isPending) {
          attachEventHandlers(connection, setIsConnected, setIsPending)
        }
      } else {
        attachEventHandlers(connection, setIsConnected, setIsPending)
      }
    }
  }, [connection, isConnected, isPending]) //eslint-disable-line

  useEffect(() => {
    if (connection) {
      connection.onmessage = (event: MessageEvent) => {
        onData(event.data)
      }
    }
  }, [connection, onData])

  const sendMessage = (message: string) => {
    if (connection && isConnected && !isPending) {
      connection.send(message)
    } 
  }

  return sendMessage
}

function setupConnection() {
  return new WebSocket("wss://echo.websocket.org")
}

function attachEventHandlers(connection: WebSocket, setIsConnected: (flag: boolean) => void, setIsPending: (flag: boolean) => void) {
  connection.onopen = () => {
    setIsConnected(true)
    setIsPending(false)
  }
  
  connection.onclose = (event) => {
    setIsConnected(false)
    setIsPending(false)
    console.log("Close", event)
  }

  connection.onerror = (event) => {
    setIsConnected(false)
    setIsPending(false)
    console.error("Error", event)
  }
}