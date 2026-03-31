import { publish } from "./observer";

type animatedClass = "pistol" | "uzi" | "machineGun" | "laserGun";

type directionFrom = "left" | "right";

export const addAnimationClass = (className: animatedClass): void => {
  const element = document.getElementsByClassName(className)[0];
  element.classList.add(`${className}-animated`);
};

export const addShot = (
  type: string,
  className: animatedClass,
  topPosition: number,
  direction: directionFrom,
  delayInMs: number,
): void => {
  const gunContainer = document.getElementsByClassName(className)[0].parentNode;
  const element = document.createElement("div");
  element.classList.add(type);
  element.style.top = topPosition + "px";
  (gunContainer as HTMLElement).appendChild(element);

  setTimeout(() => {
    let animationClass;
    if (type === "bullet") {
      animationClass = "bullet-animated-from-" + direction;
    } else {
      animationClass = "laser-animated";
    }
    element.classList.add(animationClass);
  }, delayInMs);
};

export const publishTopicAfterXSeconds = (
  topic: string,
  milliSeconds: number,
): void => {
  setTimeout(() => {
    publish(topic);
  }, milliSeconds);
};
