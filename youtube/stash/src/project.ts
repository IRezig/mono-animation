import {makeProject} from '@motion-canvas/core';
import './global.css';

import chapter2 from './scenes/chapter2?scene';
import intro from './scenes/intro?scene';
import MultiBranch from './scenes/MultiBranch?scene';
import outro from './scenes/outro?scene';
import UseCase from './scenes/UseCase?scene';
import Works from './scenes/Works?scene';

// audio
import audio from './audio/stash2.wav';

export default makeProject({
  scenes: [intro, MultiBranch, chapter2, Works, UseCase, outro],
  audio,
});
