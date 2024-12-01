import {Circle, View2D} from '@motion-canvas/2d';
import {all} from '@motion-canvas/core';
import {createRef} from '@motion-canvas/core/lib/utils';

export interface BubleProps {
  color: string;
  bubleSize: number;
  nodePosition: [number, number];
}

export interface BubleProps {
  color: string;
  bubleSize: number;
  nodePosition: [number, number];
}
export default function (
  view: View2D,
  {color, bubleSize, nodePosition}: BubleProps,
) {
  const circ = createRef<Circle>();

  view.add(
    <Circle
      scale={0.2}
      opacity={0}
      ref={circ}
      size={bubleSize}
      fill={color}
      position={nodePosition}
    />,
  );
  return {
    animate: function* (waitingTime = 0) {
      yield* all(circ().opacity(1, 0.1), circ().scale(1, 0.1));
    },
  };
}
