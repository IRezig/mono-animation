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
  color?: string;
  nodePosition: [number, number];
  circleSize?: number;
  borderWidth?: number;
  lineUp?: LineProps;
  lineRight?: LineProps;
}
export default function (
  view: View2D,
  {
    color,
    nodePosition,
    lineUp,
    lineRight,
    circleSize = 120,
    borderWidth = 8,
  }: LinkProps,
) {
  const circ = createRef<Circle>();
  const linkUp = createRef<Line>();
  const linkRight = createRef<Line>();
  const defaultLineWidth = 8;

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
          lineWidth={lineUp.lineWidth ?? defaultLineWidth}
          end={0}
          points={lineUp.points.map(p => [
            p[0],
            p[1] - (circleSize / 2 + borderWidth / 2),
          ])}
        />
      )}
      {lineRight && (
        <Line
          ref={linkRight}
          position={[0, 0]}
          stroke={lineRight.color}
          lineWidth={lineRight.lineWidth ?? defaultLineWidth}
          end={0}
          radius={lineRight.radius}
          points={lineRight.points.map(p => [
            p[0] + (circleSize / 2 + borderWidth / 2),
            p[1],
          ])}
        />
      )}
      {/* <Circle size={5} fill={'red'} position={[0, 0]} /> */}
    </Node>,
  );
  return {
    animate: function* (waitingTime = 0) {
      if (waitingTime) yield* waitFor(waitingTime);
      yield* all(circ().opacity(1, 0.35), circ().scale(1, 0.35));
      if (lineUp) yield* linkUp().end(1, 0.6);
      if (lineRight) yield* linkRight().end(1, 0.6);
    },
  };
}