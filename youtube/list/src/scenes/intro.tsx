import {Line, makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {all, createRef, waitFor} from '@motion-canvas/core';
import {createCandleGraph} from '../helpers/create-graph';
import {createFlags, createWaves} from '../helpers/create-indicator';
import {Colors} from '../styles';

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  const line = createRef<Line>();

  view.add(
    <>
      <Rect
        fill={Colors.background}
        width={view.width()}
        height={view.height()}
      />
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
        fontFamily={'JetBrains Mono'}
      />
      <Line
        points={[
          [-400, 200],
          [400, 200],
        ]}
        stroke={Colors.white}
        lineWidth={2}
        lineDash={[3, 3]}
      />
    </>,
  );

  const movements = [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
  ];

  const candleGraph = createCandleGraph(view, movements, -410, 0, 100, 30, 20);

  const waves = createWaves(view);
  const flags = createFlags(view);

  yield* all(...candleGraph.map(c => c.animate()));
  yield* title().text('Crypto', 1);
  yield* all(
    waves.mw1.fadeIn(1, 0.2),
    waves.mw2.fadeIn(1, 0.2),
    waves.mw3.fadeIn(1, 0.2),
  );

  yield* all(
    flags.mfGreen2.fadeIn(1, 0.2),
    flags.mfRed1.fadeIn(1, 0.2),
    flags.mfRed2.fadeIn(1, 0.2),
  );

  view.add(
    <>
      <Line
        ref={line}
        opacity={0}
        points={[
          [200, 160],
          [100, 50],
        ]}
        stroke={'ffb703'}
        lineWidth={4}
        radius={40}
      />
      <Line
        points={[
          [-400, 200],
          [400, 200],
        ]}
        stroke={Colors.white}
        lineWidth={2}
        lineDash={[3, 3]}
      />
    </>,
  );

  yield* line().opacity(1, 1);
  yield* waitFor(2);
});
