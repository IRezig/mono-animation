import {parser} from '@lezer/javascript';
import {
  Circle,
  Code,
  LezerHighlighter,
  lines,
  makeScene2D,
  Rect,
} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';
import {waitFor, waitUntil} from '@motion-canvas/core/lib/flow';
import {slideTransition} from '@motion-canvas/core/lib/transitions';
import {Direction} from '@motion-canvas/core/lib/types';
import {Style} from '../components/Code';
import {Colors} from '../styles';

Code.defaultHighlighter = new LezerHighlighter(parser, Style);

const WIDTH = 700;
const HEIGHT = 600;
const C_SIZE = 25;
const C_Y = -300;
const C_X = -WIDTH + 380;

const fileColor = '#13141E';
const topBarColor = '#49475e';
export default makeScene2D(function* (view) {
  const code = createRef<Code>();
  const navigator = createRef<Rect>();
  view.add(
    <Rect fill={Colors.background} width={view.width} height={view.height} />,
  );

  yield view.add(
    <Rect
      ref={navigator}
      width={WIDTH}
      height={HEIGHT}
      fill={fileColor}
      x={0}
      y={-200}
      radius={10}
    >
      {/* top bar */}
      <Rect
        width={WIDTH}
        height={50}
        fill={topBarColor}
        x={0}
        y={C_Y}
        radius={10}
      />
      <Circle width={C_SIZE} height={C_SIZE} fill="red" x={C_X} y={C_Y} />
      <Circle
        width={C_SIZE}
        height={C_SIZE}
        fill="green"
        x={C_X + 40}
        y={C_Y}
      />
      <Circle
        width={C_SIZE}
        height={C_SIZE}
        fill="yellow"
        x={C_X + 80}
        y={C_Y}
      />
      <Code
        ref={code}
        fontSize={34}
        lineHeight={36}
        x={-200}
        y={-100}
        fontFamily={'JetBrains Mono'}
        code={`





            git stash
            

            git stash list


            git stash apply


            git stash stash@{1}


            git stash clear
        `}
      />
    </Rect>,
  );

  yield* slideTransition(Direction.Bottom, 1);
  yield* waitUntil('signal');
  yield* code().selection(lines(6), 3);
  yield* code().selection(lines(9), 8);
  yield* code().selection(lines(12), 5);
  yield* code().selection(lines(15), 4);
  yield* code().selection(lines(18), 4);
  yield* waitFor(4);
});
