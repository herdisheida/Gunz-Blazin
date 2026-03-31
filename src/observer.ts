/* Here you should implement the observer pattern */

type Callback = (message?: any) => void;

const topics: Record<string, Callback[]> = {};

// subscribe to a topic with a callback function
export function subscribe(topic: string, fn: Callback) {
  if (!topics[topic]) {
    // create topic
    topics[topic] = [];
  }
  // add func to topic
  topics[topic].push(fn);
}

// publish a message to a topic
export function publish(topic: string, message?: string) {
  if (!topics[topic]) return; // no listener

  // run all functions for topic
  topics[topic].forEach((fn) => fn(message));
}
