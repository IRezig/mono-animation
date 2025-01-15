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

  // Create indicator
  const indicator = createIndicator(view);
  const candleGraph = createChartScene(view);
  yield* indicator.animate();

  yield* waitFor(2);

  // Animations
  yield* candleGraph.fadeIn();

  yield* waitFor(2);
});
