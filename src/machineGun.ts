import {
  addAnimationClass,
  addShot,
  publishTopicAfterXSeconds,
} from "./common";
import { subscribe } from "./observer";

export function machineGun() {
  subscribe("uzi_done", () => {
    addAnimationClass("machine-gun");

    // 10 bullets
    for (let i = 0; i < 10; i++) {
      addShot("bullet", "machine-gun", 75, "right", i * 400);
    }

    publishTopicAfterXSeconds("machine_gun_done", 4000);
  });
}
