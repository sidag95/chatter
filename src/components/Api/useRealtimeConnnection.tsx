import { useState } from "react";
import { Connection} from "./types";

function setupConnection(): WebSocket {
  return new WebSocket("wss://echo.websocket.org")
}

let connectionCache: WebSocket | null = null;

export function useRealtimeConnection(): Connection {
  const [isConnected, setIsConnected] = useState<boolean>(false)

 function unsubscribe() {
    if (connectionCache) {
      connectionCache.close();
      setIsConnected(false);
    }
  }

  if (connectionCache) {
    return { connection: connectionCache, isConnected, setIsConnected, unsubscribe };
  }

  connectionCache = setupConnection();

  return {connection: connectionCache, isConnected, setIsConnected, unsubscribe};
}