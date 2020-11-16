import { useMemo } from "react";
import { createSubscription } from "./createSubscription";
import { useRealtimeConnection } from "./useRealtimeConnnection";
import { useSubscriptionCache } from "./useSubscriptionCache";

export function useRealtime(onData: (data: any) => void, params: string) {
  const connection = useRealtimeConnection();
  const subscription = useMemo(() => createSubscription({ onData }), [onData, params]); //eslint-disable-line
  const { sendMessage, unsubscribe } = useSubscriptionCache({ connection, subscription, params });

  return { sendMessage, unsubscribe };
}
