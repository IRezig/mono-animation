import {makeProject} from '@motion-canvas/core';
import './global.css';

import Advantages from './scenes/Advantages?scene';
import chapter2 from './scenes/chapter2?scene';
import intro from './scenes/intro?scene';
import MultiBranch from './scenes/MultiBranch?scene';
import outro from './scenes/outro?scene';
import Rebase from './scenes/Rebase?scene';
import Works from './scenes/Works?scene';

// audio
import audio from './audio/git_rebase.mp3';

export default makeProject({
  scenes: [intro, MultiBranch, Rebase, Advantages, chapter2, Works, outro],
  audio,
});
