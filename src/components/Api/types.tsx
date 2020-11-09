import React from "react"
import { MessageBody } from "../ChatScreen/types"

export type ApiControllerProps = {
  children: React.ReactNode;
}

// TODO: Update
export type RealtimeSubscriptionCacheProps = {
  subscriptionName: string;
  subscriptionOptions: Object;
  subscriber: Function
}

export type RealtimeApiProps = {
  subscriptionName: string;
  subscriptionOptions: Object;
  onData?: (data: Object) => void,
  children: (data: object) => React.ReactNode
}

export type RealtimeConnectionProps = {
  onData: (message: any) => void;
  id: string;
  hasAuthorized: (message: string) => boolean;
}

export type SubscriptionProps = {
  id: string; // id for the subscription
  url: string;
  onData: (data: any) => void; // callback called on receiving data over the subscription
};

export type SubscriptionManager = () => void; // unsubscription handler

export type createSubscriptionProps = {
  onData: (data: any) => void;
}

export type Subscription = {
  next: (message: string) => void;
}

export type SubscriptionCache = {
  [key: string]: Subscription
}

export type Connection = {
  connection: WebSocket;
  isConnected: boolean;
  setIsConnected: (flag: boolean) => void;
  unsubscribe: () => void;
}

export type UseSubscriptionCacheProps = {
  connection: Connection;
  subscription: Subscription;
  params: string;
}

export type UseSubscriptionCache = {
  sendMessage: (params: string, message: MessageBody) => void;
  unsubscribe: (params: string) => void;
  clearSubscriptionCache: () => void;
}

export type CreateSubscriptionProps = {
  connection: Object;
  id: string;
  onData: (data: any) => void;
}
