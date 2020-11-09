import { createSubscriptionProps, Subscription } from "./types";

export function createSubscription(props: createSubscriptionProps): Subscription {
  const { onData } = props;

  const next = (message: string) => {
    onData(message)
  }

  return {
    next
  }
}
