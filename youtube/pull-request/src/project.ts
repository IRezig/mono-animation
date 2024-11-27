import {makeProject} from '@motion-canvas/core';
import './global.css';

import ChapterTitle from './scenes/ChapterTitle?scene';
import errors from './scenes/errors?scene';
import focusSmall from './scenes/focusSmall?scene';
import intro from './scenes/intro?scene';
import outro from './scenes/outro?scene';
import TestsTitle from './scenes/TestsTitle?scene';
import Title from './scenes/Title?scene';

// audio
import final from './audio/final.mp3';

export default makeProject({
  scenes: [intro, errors, ChapterTitle, Title, focusSmall, TestsTitle, outro],
  audio: [final],
});
