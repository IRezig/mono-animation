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
  lineRight?: LineProps;
  lineLeft?: LineProps;
}
export default function (
  view: View2D,
  {
    color,
    nodePosition,
    lineUp,
    lineRight,
    lineLeft,
    circleSize,
    borderWidth,
  }: LinkProps,
) {
  const circ = createRef<Circle>();
  const linkUp = createRef<Line>();
  const linkRight = createRef<Line>();

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
      {lineRight && (
        <Line
          ref={linkRight}
          position={[0, 0]}
          stroke={lineRight.color}
          lineWidth={lineRight.lineWidth}
          end={0}
          radius={lineRight.radius}
          points={lineRight.points.map(p => [
            p[0] + (circleSize / 2 + borderWidth / 2),
            p[1],
          ])}
        />
      )}
      {lineLeft && (
        <Line
          ref={linkUp}
          position={[0, 0]}
          stroke={lineLeft.color}
          radius={lineLeft.radius}
          lineWidth={lineLeft.lineWidth}
          end={0}
          points={lineLeft.points.map(p => [
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
      if (lineRight) yield* linkRight().end(1, 0.3);
      if (lineLeft) yield* linkUp().end(1, 0.3);
    },
  };
}
