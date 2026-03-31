import {
  addAnimationClass,
  addShot,
  publishTopicAfterXSeconds,
} from "./common";
import { subscribe } from "./observer";

export function uzi() {
  subscribe("pistol_done", () => {
    addAnimationClass("uzi");

    // 10 bullets
    for (let i = 0; i < 10; i++) {
      addShot("bullet", "uzi", 60, "left", i * 200);
    }

    publishTopicAfterXSeconds("uzi_done", 2100);
  });
}
