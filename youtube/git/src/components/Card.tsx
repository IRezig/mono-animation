import {Rect, Txt, View2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';
import {Colors} from '../styles';

export interface CardProps {
  title: string;
  color: string;
  position: [number, number];
}

export default function (view: View2D, {title, color, position}: CardProps) {
  const txt = createRef<Txt>();
  const card = createRef<Rect>();

  view.add(
    <Rect
      opacity={0}
      ref={card}
      fill={color}
      width={170}
      height={60}
      radius={10}
      position={position}
    >
      <Txt
        ref={txt}
        text={title}
        fill={Colors.white}
        fontSize={42}
        fontFamily={'JetBrains Mono'}
      />
    </Rect>,
  );

  return {
    animate: function* () {
      yield* card().opacity(1, 0.5);
    },
    fade: function* () {
      yield* card().opacity(0, 0.2);
    },
    changeText: function* (newText: string) {
      yield* txt().text(newText, 0.2);
    },
  };
}
