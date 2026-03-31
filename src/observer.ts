/* Here you should implement the observer pattern */

type Callback = (message?: any) => void;

const topics: Record<string, Callback[]> = {};

// subscribe to a topic with a callback function
export function subscribe(topic: string, fn: Callback) {
  if (!topics[topic]) {
    topics[topic] = [];
  }
  topics[topic].push(fn);
}

// publish a message to a topic
export function publish(topic: string, message?: any) {
  if (!topics[topic]) return;

  topics[topic].forEach((fn) => fn(message));
}
