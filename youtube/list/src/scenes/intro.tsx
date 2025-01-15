import {Line, makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {all, createRef, waitFor} from '@motion-canvas/core';
import {CandleProps} from '../components/Candle';
import Graph from '../components/Graph';
import {Colors} from '../styles';

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  const line = createRef<Line>();
  view.add(
    <>
      <Rect fill={Colors.background} width={view.width} height={view.height} />
      <Txt
        ref={title}
        strokeFirst
        lineWidth={5}
        lineJoin={'round'}
        position={[20, -300]}
        stroke={Colors.white}
        fill={Colors.PROPERTY}
        fontSize={92}
        fontWeight={500}
        fontFamily={'JetBrains Mono'}
      />
      ,
    </>,
  );

  const i1: CandleProps = {
    value: 42,
    x: 0,
    y: 200,
  };

  const mw1 = Graph(view, {
    data: 'M 70 440 C 70 440 200 1450 210 590 C 410 940 410 440 410 440',
    strokeColor: Colors.grey,
    fillColor: Colors.grey,
    position: [-220, 0],
  });
  const mw2 = Graph(view, {
    data: 'M 516 512 h -13.189 c -10.833 -7.615 -61.041 -44.109 -81.776 -80.309 c -21.035 -33.691 -29.277 -81.504 -38.636 -127.229 c -17.268 -84.381 -35.111 -171.601 -117.832 -173.634 c -0.259 -0.024 -0.523 -0.036 -0.789 -0.036 h -2.189 c -0.169 0 -0.335 0.005 -0.502 0.015 c -0.167 -0.01 -0.333 -0.015 -0.502 -0.015 h -2.189 c -0.267 0 -0.529 0.012 -0.79 0.036 c -82.708 2.042 -100.564 89.258 -117.832 173.636 c -9.358 45.726 -19.034 93.007 -38.635 127.228 c -16.45 28.718 -51.531 57.676 -70.695 72.193 C 8.172 511.96 8.581 512 9.002 512 h 478.166 h 15.829 z z',
    strokeColor: Colors.grey,
    fillColor: Colors.grey,
    position: [-20, -40],
  });
  const mw3 = Graph(view, {
    data: 'M 70 440 C 70 440 123.125 1000 240 1000 C 356.875 1000 410 440 410 440',
    strokeColor: Colors.grey,
    fillColor: Colors.grey,
    position: [200, 0],
  });

  const mf1 = Graph(view, {
    data: 'M 520 600 a 43.6 43.6 0 0 1 40 0 l 40 80 h 0 L 640 640 a 40 40 0 0 1 40 40 L 720 720 H 320 Z',
    strokeColor: Colors.greenWave,
    fillColor: Colors.green,
    position: [80, 36],
  });
  const mf2 = Graph(view, {
    data: 'M 1890 4050 c 89.991 -89.991 270 -270 540 -270 q 810 -540 1080 0 c 270 -540 810 270 810 270 Q 4320 4050 4320 4050 c 270 -270 270 270 270 270 C 4590 4320 4860 4590 4860 4860 H 1350 Z',
    strokeColor: Colors.red,
    fillColor: Colors.red,
    position: [-100, 155],
  });
  const mf3 = Graph(view, {
    data: 'M304.8,360a21.8,21.8,0,0,1,-40,0l-56,-110.6h0L180,314.6a20,20,0,0,1,-36,0L60,132.6H420Z',
    strokeColor: Colors.red,
    fillColor: Colors.red,
    position: [-250, 155],
  });

  yield* title().text('Crypto', 1);
  yield* all(mw1.fadeIn(0.2), mw2.fadeIn(0.2), mw3.fadeIn(0.2));

  yield* all(mf1.fadeIn(0.2), mf2.fadeIn(0.2), mf3.fadeIn(0.2));
  view.add(
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
    />,
  );
  yield* line().opacity(1, 1);

  yield* waitFor(2);
});
