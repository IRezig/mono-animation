import {Circle, Line, Node, View2D} from '@motion-canvas/2d';
import {all, waitFor} from '@motion-canvas/core';
import {createRef} from '@motion-canvas/core/lib/utils';

export interface LineProps {
  color: string;
  points: number[][];
  radius?: number;
  lineWidth?: number;
}

export interface LinkProps {
  color: string;
  nodePosition: [number, number];
  circleSize: number;
  borderWidth: number;
  lineUp?: LineProps;
  linesRight?: LineProps[];
  lineLeft?: LineProps;
}
export default function (
  view: View2D,
  {
    color,
    nodePosition,
    lineUp,
    linesRight,
    lineLeft,
    circleSize,
    borderWidth,
  }: LinkProps,
) {
  const circ = createRef<Circle>();
  const linkUp = createRef<Line>();
  const linkRight: Line[] = [];

  view.add(
    <Node position={nodePosition}>
      <Circle
        scale={0.2}
        opacity={0}
        ref={circ}
        size={circleSize}
        stroke={color}
        lineWidth={borderWidth}
        position={[0, 0]}
      />
      {lineUp && (
        <Line
          ref={linkUp}
          position={[0, 0]}
          stroke={lineUp.color}
          lineWidth={lineUp.lineWidth}
          end={0}
          points={lineUp.points.map(p => [
            p[0],
            p[1] - (circleSize / 2 + borderWidth / 2),
          ])}
        />
      )}
      {/* <Circle size={5} fill={'red'} position={[0, 0]} /> */}
    </Node>,
  );
  return {
    animate: function* (waitingTime = 0) {
      if (waitingTime) yield* waitFor(waitingTime);
      yield* all(circ().opacity(1, 0.3), circ().scale(1, 0.3));
      if (lineUp) yield* linkUp().end(1, 0.3);
      if (linesRight) {
        for (const l of linkRight) {
          yield* l.end(1, 0.3);
          yield* waitFor(0.5);
        }
      }
      if (lineLeft) yield* linkUp().end(1, 0.3);
    },
  };
}
