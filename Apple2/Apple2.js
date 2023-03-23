/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Apple2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("0-pixel", "./Apple2/costumes/0-pixel.svg", { x: 13, y: 18 }),
      new Costume("2-glow", "./Apple2/costumes/2-glow.svg", { x: 4, y: 9 }),
      new Costume("4-pixel", "./Apple2/costumes/4-pixel.svg", { x: 14, y: 19 }),
      new Costume("6-glow", "./Apple2/costumes/6-glow.svg", { x: 8, y: 9 }),
      new Costume("8-pixel", "./Apple2/costumes/8-pixel.svg", { x: 14, y: 19 })
    ];

    this.sounds = [new Sound("GOOD NUMBER", "./Apple2/sounds/GOOD NUMBER.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(this.sprites["Bowl"].andClones())) {
        yield* this.startSound("GOOD NUMBER");
        this.stage.vars.score += this.random(1, 2);
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

  *whenGreenFlagClicked2() {
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
}
