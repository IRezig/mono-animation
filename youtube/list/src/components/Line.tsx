import {Line as MotionLine, View2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';
import {Colors} from '../styles';

export interface LineProps {
  points: [number, number][];
  stroke: string;
  lineWidth?: number;
  radius?: number;
  opacity?: number;
}

const Line = (
  view: View2D,
  {points, stroke, lineWidth = 4, radius = 0, opacity = 0}: LineProps,
) => {
  const line = createRef<MotionLine>();

  view.add(
    <MotionLine
      ref={line}
      points={points}
      stroke={stroke}
      lineWidth={lineWidth}
      radius={radius}
      opacity={opacity}
    />,
  );

  return {
    line,
    fadeIn: function* (targetOpacity = 1, duration = 1) {
      yield* line().opacity(targetOpacity, duration);
    },
    fadeOut: function* (targetOpacity = 0, duration = 1) {
      yield* line().opacity(targetOpacity, duration);
    },
  };
};

export const createLine = (view: View2D, points: [number, number][]) => {
  return Line(view, {
    points,
    stroke: Colors.green,
    opacity: 1,
  });
};
