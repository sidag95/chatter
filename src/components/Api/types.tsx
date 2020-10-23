import React from "react"

export type ApiControllerProps = {
  children: React.ReactNode;
}

export type Subscriber = {}

export type SubscriptionCache = {
  [key: string]: {
    subscribers: Array<Subscriber>;
  }
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
}