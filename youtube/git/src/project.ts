import {makeProject} from '@motion-canvas/core';
import './global.css';

// import ChapterTitle from './scenes/ChapterTitle?scene';
// import focusSmall from './scenes/focusSmall?scene';
// import outro from './scenes/outro?scene';
// import TestsTitle from './scenes/TestsTitle?scene';

import MultiBranch from './scenes/MultiBranch?scene';
import Rebase from './scenes/Rebase?scene';

// audio

export default makeProject({
  scenes: [MultiBranch, Rebase],
});
