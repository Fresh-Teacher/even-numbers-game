import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Apple from "./Apple/Apple.js";
import Bowl from "./Bowl/Bowl.js";
import Apple2 from "./Apple2/Apple2.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Apple: new Apple({
    x: -92,
    y: 60,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Bowl: new Bowl({
    x: 162,
    y: -138.05,
    direction: 90,
    costumeNumber: 1,
    size: 125.00000000000003,
    visible: true,
    layerOrder: 2
  }),
  Apple2: new Apple2({
    x: -221,
    y: -110,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Sprite1: new Sprite1({
    x: -22,
    y: -23,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
