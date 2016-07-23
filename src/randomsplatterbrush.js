import Brush from './brush'

let vsSource = require('./shaders/brushes/randomsplatter/brush.vs');
let waterFsSource = require('./shaders/brushes/randomsplatter/water.fs');
let wetFsSource = require('./shaders/brushes/randomsplatter/wet.fs');
let dryFsSource = require('./shaders/brushes/randomsplatter/dry.fs');

class RandomSplatterBrush {
  constructor(opt) {
    this._brush = new Brush({
      simulator: opt.simulator,
      vsSource: vsSource,
      fsSources: {
        water: waterFsSource,
        wet: wetFsSource,
        dry: dryFsSource
      }     
    });
    this._simulator = opt.simulator;
  }
  apply() {
    let size = this._simulator.size();
    this._brush.apply({
      splatPosition: [size[0] * Math.random(), size[1] * Math.random()],
      splatWater: Math.random(),
      splatSize: 4 + Math.random() * 4,
      splatColor: [Math.random(), Math.random(), Math.random()],
      concentration: Math.random()
    });
  }
}

module.exports = RandomSplatterBrush;