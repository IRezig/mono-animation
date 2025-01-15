import {Node, View2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';

export interface GroupProps {
  children: Node[];
  position?: [number, number];
  opacity?: number;
}

const Group = (
  view: View2D,
  {children, position = [0, 0], opacity = 0}: GroupProps,
) => {
  const group = createRef<Node>();

  view.add(
    <Node ref={group} position={position} opacity={opacity}>
      {children}
    </Node>,
  );

  return {
    group,
    fadeIn: function* (targetOpacity = 1, duration = 1) {
      yield* group().opacity(targetOpacity, duration);
    },
    fadeOut: function* (targetOpacity = 0, duration = 1) {
      yield* group().opacity(targetOpacity, duration);
    },
  };
};

export const createGroup = (
  view: View2D,
  children: any[],
  position?: [number, number],
) => {
  return Group(view, {
    children,
    position,
    opacity: 0,
  });
};
