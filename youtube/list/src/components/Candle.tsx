import {Line, Rect, View2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core/lib/utils';
import {Colors} from '../styles';

export interface CandleProps {
  entry: number;
  close: number;
  high: number;
  low: number;
  x?: number;
  y?: number;
  width?: number;
}

const Candle = (
  view: View2D,
  {entry, close, high, low, width = 20, x = 0, y = 0}: CandleProps,
) => {
  const candleBody = createRef<Rect>();
  const wickLine = createRef<Line>();

  const isGreen = close > entry;
  const candleColor = isGreen ? Colors.green : Colors.red;

  // Calculate heights and positions
  const bodyHeight = Math.abs(close - entry);
  const bodyY = y - (close + entry) / 2;

  view.add(
    <>
      <Line
        ref={wickLine}
        points={[
          [x, y - high],
          [x, y - low],
        ]}
        stroke={candleColor}
        opacity={0}
        lineWidth={2}
      />
      <Rect
        ref={candleBody}
        fill={candleColor}
        opacity={0}
        width={width}
        height={bodyHeight}
        x={x}
        y={bodyY}
      />
    </>,
  );

  return {
    animate: function* () {
      yield* wickLine().opacity(1, 0.3);
      yield* candleBody().opacity(1, 0.3);
    },
  };
};

export const createCandle = (
  view: View2D,
  x: number,
  y: number,
  isGreen: boolean,
  basePrice = 100,
  volatility = 20,
) => {
  const bodySize = Math.max(100, Math.random() * volatility);
  const wickSize = Math.random() * (volatility / 2);

  const entry = basePrice;
  const close = isGreen ? entry + bodySize : entry - bodySize;
  const high = Math.max(entry, close) + wickSize;
  const low = Math.min(entry, close) - wickSize;

  const candle = Candle(view, {
    entry,
    close,
    high,
    low,
    x,
    y,
    width: 20,
  });

  return {
    ...candle,
    close,
  };
};
