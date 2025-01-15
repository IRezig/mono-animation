import {makeScene2D, Rect, Txt, View2D} from '@motion-canvas/2d';
import {createRef, waitFor} from '@motion-canvas/core';
import {createChartScene} from '../helpers/create-graph';
import {createIndicator} from '../helpers/create-indicator';
import {Colors} from '../styles';

function addBackground(view: View2D) {
  view.add(
    <Rect
      fill={Colors.background}
      width={view.width()}
      height={view.height()}
    />,
  );
}

function addTitle(view: View2D) {
  const title = createRef<Txt>();

  view.add(
    <Txt
      ref={title}
      strokeFirst
      lineWidth={5}
      lineJoin={'round'}
      position={[-50, -300]}
      stroke={Colors.white}
      fill={Colors.PROPERTY}
      fontSize={92}
      fontWeight={500}
      // text="eza"
      fontFamily={'JetBrains Mono'}
    />,
  );

  return title;
}

export default makeScene2D(function* (view) {
  // Background
  addBackground(view);
  // Title
  const title = addTitle(view);
  yield* title().text('Crypto', 1);

  // Create waves and flags
  const indicator = createIndicator(view);
  const candleGraph = createChartScene(view);
  yield* waitFor(2);
  yield* indicator.line.fadeIn(1, 0.2);

  return null;
  // Animations
  // yield* all(...candleGraph.map(c => c.animate()));
  // yield* all(
  //   waves.mw2.fadeIn(1, 0.2),
  //   waves.mw3.fadeIn(1, 0.2),
  // );

  // yield* all(
  //   flags.mfGreen2.fadeIn(1, 0.2),
  //   flags.mfRed1.fadeIn(1, 0.2),
  //   flags.mfRed2.fadeIn(1, 0.2),
  // );

  // yield* waves.line().opacity(1, 1);
  // yield* waitFor(2);
});
