import {Line, View2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';
import {Colors} from '../styles';
import {createWave} from './create-graph';

export const createIndicator = (view: View2D) => {
  const line = createRef<Line>();

  const mw1 = createWave(
    view,
    [-220, -20],
    Colors.grey,
    'M 70 440 C 70 440 200 1450 210 590 C 410 940 410 440 410 440',
  );
  const mw2 = createWave(
    view,
    [-20, -56],
    Colors.grey,
    'M 516 512 h -13.189 c -10.833 -7.615 -61.041 -44.109 -81.776 -80.309 c -21.035 -33.691 -29.277 -81.504 -38.636 -127.229 c -17.268 -84.381 -35.111 -171.601 -117.832 -173.634 c -0.259 -0.024 -0.523 -0.036 -0.789 -0.036 h -2.189 c -0.169 0 -0.335 0.005 -0.502 0.015 c -0.167 -0.01 -0.333 -0.015 -0.502 -0.015 h -2.189 c -0.267 0 -0.529 0.012 -0.79 0.036 c -82.708 2.042 -100.564 89.258 -117.832 173.636 c -9.358 45.726 -19.034 93.007 -38.635 127.228 c -16.45 28.718 -51.531 57.676 -70.695 72.193 C 8.172 511.96 8.581 512 9.002 512 h 478.166 h 15.829 z z',
  );
  const mw3 = createWave(
    view,
    [200, -20],
    Colors.grey,
    'M 70 440 C 70 440 123.125 1000 240 1000 C 356.875 1000 410 440 410 440',
  );

  // Add indicator line
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
    </>,
  );

  view.add(
    <Line
      points={[
        [-400, 200],
        [400, 200],
      ]}
      stroke={Colors.white}
      lineWidth={2}
      lineDash={[3, 3]}
    />,
  );

  const mfGreen1 = createWave(
    view,
    [0, -160],
    Colors.green,
    'M 520 600 a 43.6 43.6 0 0 1 40 0 l 40 80 h 0 L 640 640 a 40 40 0 0 1 40 40 L 720 720 H 320 Z',
  );
  const mfGreen2 = createWave(
    view,
    [-40, 20],
    Colors.green,
    'M 160 260 c 0 -20 0 -20 40 -20 q 40 -80 100 -40 c 20 -60 80 0 120 20 Q 440 220 440 260 c 20 -20 80 20 60 40 C 520 320 520 360 520 360 H 100 Z',
  );
  const mfRed1 = createWave(
    view,
    [-200, 135],
    Colors.red + '90',
    'M304.8,360a21.8,21.8,0,0,1,-40,0l-56,-110.6h0L180,314.6a20,20,0,0,1,-36,0L60,132.6H420Z',
  );
  const mfRed2 = createWave(
    view,
    [200, 135],
    Colors.red + '90',
    'M304.8,360a21.8,21.8,0,0,1,-40,0l-56,-110.6h0L180,314.6a20,20,0,0,1,-36,0L60,132.6H420Z',
  );

  return {mfGreen1, mfGreen2, mfRed1, mfRed2, mw1, mw2, mw3, line};
};
