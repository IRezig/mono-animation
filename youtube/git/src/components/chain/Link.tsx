import {Circle, Line, Node, View2D} from '@motion-canvas/2d';
import {waitFor} from '@motion-canvas/core';
import {createRef} from '@motion-canvas/core/lib/utils';

export interface LinkProps {
  color?: string;
  nodePosition: [number, number];
  direction: 'up' | 'down';
  circleSize?: number;
  borderWidth?: number;
  lineUp?: {
    color: string;
    size: number;
    points: number[];
  };
}
export default function (
  view: View2D,
  {
    color,
    nodePosition,
    direction,
    lineUp,
    circleSize = 60,
    borderWidth = 8,
  }: LinkProps,
) {
  const circ = createRef<Circle>();
  const link = createRef<Line>();

  view.add(
    <Node position={nodePosition}>
      <Circle
        scale={0.2}
        ref={circ}
        size={circleSize}
        stroke={color}
        lineWidth={borderWidth}
        position={[0, 0]}
      />
      {lineUp && (
        <Line
          ref={link}
          position={[0, 0]}
          stroke={color}
          lineWidth={8}
          end={0}
          points={[
            [0, -(circleSize / 2 + borderWidth / 2)],
            [0, -(circleSize / 2 + lineUp.size)],
          ]}
        />
      )}
      {/* <Circle size={5} fill={'red'} position={[0, 0]} /> */}
    </Node>,
  );
  return {
    animate: function* (waitingTime = 0) {
      if (waitingTime) yield* waitFor(waitingTime);
      yield* circ().scale(1, 0.5);
      yield* link().end(1, 0.6);
    },
  };
}
