import {Rect, Txt, View2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core/lib/utils';
import {Colors} from '../styles';

export interface CandleProps {
  value: string | number;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
}

export default function (
  view: View2D,
  {value, width = 80, height = 80, x = 0, y = 0}: CandleProps,
) {
  const rect = createRef<Rect>();

  view.add(
    <Rect
      ref={rect}
      fill={Colors.lightGrey}
      stroke={Colors.white}
      lineWidth={2}
      width={width}
      height={height}
      radius={10}
      x={x}
      y={y}
      opacity={1}
    >
      <Txt
        text={value.toString()}
        fill={Colors.white}
        fontSize={40}
        fontFamily={'JetBrains Mono'}
      />
    </Rect>,
  );
  return {
    animate: function* (waitingTime = 0) {
      yield* rect().opacity(1, 0.3);
    },
  };
}
