import {Circle, View2D} from '@motion-canvas/2d';
import {all} from '@motion-canvas/core';
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
}
export default function (
  view: View2D,
  {color, nodePosition, circleSize, borderWidth}: LinkProps,
) {
  const circ = createRef<Circle>();

  view.add(
    <Circle
      scale={0.2}
      opacity={0}
      ref={circ}
      size={circleSize}
      fill={color}
      lineWidth={borderWidth}
      position={nodePosition}
    />,
  );
  return {
    animate: function* (waitingTime = 0) {
      yield* all(circ().opacity(1, 0.1), circ().scale(1, 0.1));
    },
  };
}
