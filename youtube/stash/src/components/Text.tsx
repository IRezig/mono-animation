import {Txt, View2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core/lib/utils';

export interface TextProps {
  position: [number, number];
  color: string;
  fontSize?: number;
  text: string;
}
export default function (
  view: View2D,
  {position, color, fontSize = 42, text}: TextProps,
) {
  const ref = createRef<Txt>();

  view.add(
    <Txt
      ref={ref}
      opacity={0}
      fontSize={fontSize}
      fill={color}
      position={position}
      text={text}
    />,
  );
  return {
    fadeIn: function* () {
      yield* ref().opacity(1, 0.5);
    },
    fadeOut: function* () {
      yield* ref().opacity(0, 0.5);
    },
  };
}
