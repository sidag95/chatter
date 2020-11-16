import { useEffect } from "react";
import { MessageBody } from "../ChatScreen/types";
import type { Connection, Subscription, SubscriptionCache, UseSubscriptionCache, UseSubscriptionCacheProps } from "./types"

let subscriptionCache: SubscriptionCache = {}

let messageQueue = new Set<string>();

function get(params: string): Subscription {
  return subscriptionCache[params];
}

function set(params: string, subscription: Subscription, connectionObject: Connection): void {
  const { isConnected } = connectionObject;
  const connectionRequest = JSON.stringify([params, "subscribe"])
  if (isConnected) {
    sendSubscriptionRequest(connectionObject, connectionRequest)
  } else {
    messageQueue.add(connectionRequest)
  }
  subscriptionCache[params] = subscription;
}

function remove(params: string): void { 
  // const subscription = subscriptionCache[key];
  // subscription.complete();
  delete subscriptionCache[params];
}

function sendSubscriptionRequest(connectionObject: Connection, connectionRequest?: string) {
  const { isConnected, connection } = connectionObject;
  if (isConnected) {
    if (connectionRequest) {
      connection.send(connectionRequest);
    }
    const pendingConnectionRequests = Array.from(messageQueue.values());
    for (const pendingConnectionRequest of pendingConnectionRequests) {
      connection.send(pendingConnectionRequest);
      messageQueue.delete(pendingConnectionRequest);
    }
  }
}

function resetSubscriptionCache(connectionObject: Connection): void {
  const { unsubscribe } = connectionObject;
  // Object.values(subscriptionCache).forEach((subscription: Subscription) => {
  //   subscription.unsubscribe(connection);
  // })
  subscriptionCache = {};
  removeEventHandlers(connectionObject);
  unsubscribe();
}

function send(connectionObject: Connection, message: string, params: string): void {
  const { connection, isConnected } = connectionObject;
  const messageRequest = JSON.stringify([params, message])
  if (isConnected) {
    connection.send(messageRequest)
  } else {
    messageQueue.add(messageRequest)
  }
}

function attachEventHandlers(connectionObject: Connection) {
  const { connection, setIsConnected } = connectionObject;
  connection.onopen = () => {
    setIsConnected(true)
    sendSubscriptionRequest(connectionObject)
  }

  connection.onmessage = ((event: MessageEvent) => {
    const { data } = event;
    let message = []
    try {
      message = JSON.parse(data)
    } catch (error) {
      console.error(error)
    }
    const [ params, messageData ] = message;
    const subscription = get(params)
    const parsedMessageData = JSON.parse(messageData)
    subscription.next(parsedMessageData)
  })
  
  connection.onclose = (event) => {
    setIsConnected(false)
    resetSubscriptionCache(connectionObject);
  }

  connection.onerror = (event) => {
    setIsConnected(false)
    resetSubscriptionCache(connectionObject);
  }
}

function removeEventHandlers(connectionObject: Connection) {
  const { connection } = connectionObject;
  connection.onopen = null;
  connection.onmessage = null;
  connection.onerror = null;
  connection.onclose = null;
}

export function useSubscriptionCache(props: UseSubscriptionCacheProps): UseSubscriptionCache {
  const { connection: connectionObject, subscription, params } = props;
  const { connection } = connectionObject;
  useEffect(() => {
    if (!get(params)) {
      set(params, subscription, connectionObject);
    }
  }, [subscription, params, connection]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (connection) {
      attachEventHandlers(connectionObject)
    }
  }, [connection]) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    sendMessage: (messageParams: string, message: MessageBody) => {
      const stringifiedMessage = JSON.stringify(message)
      send(connectionObject, stringifiedMessage, messageParams)
    },
    unsubscribe: (messageParams: string) => {
      remove(messageParams);
    },
    clearSubscriptionCache: () => {
      resetSubscriptionCache(connectionObject)
    }
  }
}
