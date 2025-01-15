import {makeProject} from '@motion-canvas/core';
import './global.css';

import intro from './scenes/intro?scene';

// audio

export default makeProject({
  scenes: [intro],
});
