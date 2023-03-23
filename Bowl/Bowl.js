/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bowl extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bowl-a", "./Bowl/costumes/bowl-a.svg", { x: 30, y: 15 })
    ];

    this.sounds = [
      new Sound("boing", "./Bowl/sounds/boing.wav"),
      new Sound("water drop", "./Bowl/sounds/water drop.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.x += 10;
      }
      if (this.keyPressed("left arrow")) {
        this.x -= 10;
      }
      yield;
    }
  }
}
