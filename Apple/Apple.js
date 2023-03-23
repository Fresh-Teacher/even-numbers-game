/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Apple extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1-pixel", "./Apple/costumes/1-pixel.svg", { x: 7, y: 20 }),
      new Costume("3-glow", "./Apple/costumes/3-glow.svg", { x: 19, y: 25 }),
      new Costume("5-pixel", "./Apple/costumes/5-pixel.svg", { x: 12, y: 19 }),
      new Costume("7-glow", "./Apple/costumes/7-glow.svg", { x: 18, y: 18 }),
      new Costume("9-pixel", "./Apple/costumes/9-pixel.svg", { x: 12, y: 20 })
    ];

    this.sounds = [new Sound("BAD NUMBER", "./Apple/sounds/BAD NUMBER.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      )
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.y -= 5;
      if (this.compare(this.y, -170) < 0) {
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.y = 180;
        this.costume = this.random(1, 5);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Bowl"].andClones())) {
        yield* this.startSound("BAD NUMBER");
        this.stage.vars.score += this.random(-1, -2);
        this.costume = this.random(1, 5);
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.y = 180;
      }
      yield;
    }
  }

  *whenKeySpacePressed() {
    this.stage.vars.score = 0;
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.y = 180;
  }
}
