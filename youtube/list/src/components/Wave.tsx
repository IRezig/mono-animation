import {Path, View2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';

export interface GraphProps {
  data: string;
  strokeColor: string;
  fillColor: string;
  position?: [number, number];
  isFilled?: boolean;
}
const Wave = (
  view: View2D,
  {data, strokeColor, fillColor, position, isFilled = true}: GraphProps,
) => {
  const path = createRef<Path>();
  view.add(
    <Path
      ref={path}
      lineWidth={4}
      stroke={strokeColor}
      data={data}
      position={position}
      scale={0.5}
      start={0}
      opacity={1}
      end={1}
      fill={isFilled ? fillColor : undefined}
    />,
  );

  return {
    animate: function* (duration = 0) {
      yield* path().end(1, duration);
      yield* path().fill(fillColor, duration);
    },
    fadeIn: function* (targetOpacity = 1, duration = 1) {
      yield* path().end(1, duration);
      yield* path().opacity(targetOpacity, duration);
    },
    fadeOut: function* (targetOpacity = 0, duration = 1) {
      yield* path().opacity(targetOpacity, duration);
    },
  };
};

export const createWave = (
  view: View2D,
  position: [number, number],
  fillColor: string,
  data: string,
) => {
  return Wave(view, {
    data,
    fillColor,
    strokeColor: fillColor,
    position,
  });
};
