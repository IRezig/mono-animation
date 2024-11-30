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
  lineDown?: LineProps;
}
export default function (
  view: View2D,
  {color, nodePosition, lineUp, lineDown, circleSize, borderWidth}: LinkProps,
) {
  const circ = createRef<Circle>();
  const linkUp = createRef<Line>();
  const linkDown = createRef<Line>();

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
          radius={lineUp.radius}
          stroke={lineUp.color}
          lineWidth={lineUp.lineWidth}
          end={0}
          points={lineUp.points.map(p => [
            p[0],
            p[1] - (circleSize / 2 + borderWidth / 2),
          ])}
        />
      )}
      {lineDown && (
        <Line
          ref={linkDown}
          position={[0, 0]}
          stroke={lineDown.color}
          radius={lineDown.radius}
          lineWidth={lineDown.lineWidth}
          end={0}
          points={lineDown.points.map(p => [
            p[0],
            p[1] + (circleSize / 2 + borderWidth / 2),
          ])}
        />
      )}
      {/* <Circle size={5} fill={'red'} position={[0, 0]} /> */}
    </Node>,
  );
  return {
    animate: function* (waitingTime = 0) {
      if (waitingTime) yield* waitFor(waitingTime);
      if (lineDown) yield* linkDown().end(1, 0.2);
      yield* all(circ().opacity(1, 0.2), circ().scale(1, 0.2));
      if (lineUp) yield* linkUp().end(1, 0.2);
    },
    fade: function* (opacity: number, duration: number) {
      if (lineUp) yield* linkUp().end(0, duration);
      if (lineDown) yield* linkDown().end(0, duration);
      yield* all(circ().opacity(opacity, duration));
    },
  };
}
