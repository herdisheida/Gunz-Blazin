import {
  addAnimationClass,
  addShot,
  publishTopicAfterXSeconds,
} from "./common";

export function pistol() {
  addAnimationClass("pistol");

  // 2 bullets
  addShot("bullet", "pistol", 50, "right", 0);
  addShot("bullet", "pistol", 50, "right", 650);

  publishTopicAfterXSeconds("pistol_done", 1200);
}
