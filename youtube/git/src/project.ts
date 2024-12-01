import {makeProject} from '@motion-canvas/core';
import './global.css';

// import ChapterTitle from './scenes/ChapterTitle?scene';
// import focusSmall from './scenes/focusSmall?scene';
// import outro from './scenes/outro?scene';
// import TestsTitle from './scenes/TestsTitle?scene';

import Advantages from './scenes/Advantages';
import intro from './scenes/intro?scene';
import MultiBranch from './scenes/MultiBranch?scene';
import Rebase from './scenes/Rebase?scene';

// audio
import git_rebase from './audio/git_rebase.mp3';

export default makeProject({
  scenes: [intro, MultiBranch, Rebase, Advantages],
  audio: [git_rebase],
});
