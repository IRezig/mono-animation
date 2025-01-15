import {Path, View2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';

export interface GraphProps {
  data: string;
  strokeColor: string;
  fillColor: string;
  x?: number;
  y?: number;
  isFilled?: boolean;
}
export default function (
  view: View2D,
  {data, strokeColor, fillColor, x, y, isFilled = true}: GraphProps,
) {
  const path = createRef<Path>();

  view.add(
    <Path
      ref={path}
      lineWidth={4}
      stroke={fillColor}
      data={data}
      position={[x, y]}
      scale={0.5}
      start={0}
      opacity={0}
      end={0}
      fill={isFilled ? strokeColor : undefined}
    />,
  );

  return {
    animate: function* (duration = 0) {
      yield* path().end(1, duration);
      yield* path().fill(strokeColor, duration);
    },
    fadeIn: function* (targetOpacity = 1, duration = 1) {
      yield* path().end(1, duration);
      yield* path().opacity(targetOpacity, duration);
    },
    fadeOut: function* (targetOpacity = 0, duration = 1) {
      yield* path().opacity(targetOpacity, duration);
    },
  };
}
