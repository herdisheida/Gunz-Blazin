import { addAnimationClass, addShot } from "./common";
import { subscribe } from "./observer";

export function laserGun() {
  subscribe("machine_gun_done", () => {
    addAnimationClass("laser-gun");

    // 10 lasers
    for (let i = 0; i < 10; i++) {
      addShot("laser", "laser-gun", 10, "left", i * 1000 + 500);
    }
  });

  // no publish
  // it's the last gun
}
