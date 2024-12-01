import {makeProject} from '@motion-canvas/core';
import './global.css';

// import ChapterTitle from './scenes/ChapterTitle?scene';
// import focusSmall from './scenes/focusSmall?scene';
// import outro from './scenes/outro?scene';
// import TestsTitle from './scenes/TestsTitle?scene';

import Advantages from './scenes/Advantages';
import chapter2 from './scenes/chapter2';
import intro from './scenes/intro?scene';
import MultiBranch from './scenes/MultiBranch?scene';
import outro from './scenes/outro';
import Rebase from './scenes/Rebase?scene';
import Works from './scenes/Works';

// audio
import git_rebase from './audio/git_rebase.mp3';

export default makeProject({
  scenes: [intro, MultiBranch, Rebase, Advantages, chapter2, Works, outro],
  audio: [git_rebase],
});
