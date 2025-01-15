import {View2D} from '@motion-canvas/2d';
import {createCandle} from '../components/Candle';
import {createGroup} from '../components/Group';

export const createCandleGraph = (
  view: View2D,
  movements: boolean[],
  startX: number,
  startY: number,
  basePrice = 100,
  spacing = 30,
  volatility = 20,
) => {
  let previousClose = basePrice;

  const candles = movements.map((isUp, index) => {
    const candle = createCandle(
      view,
      startX + index * spacing,
      startY,
      isUp,
      previousClose,
      volatility,
    );

    previousClose = candle.close;
    return candle;
  });
  return createGroup(
    view,
    candles.map(candle => candle.component),
  );
};

export const createChartScene = (view: View2D) => {
  // Create candle chart
  const movements = [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
  ];

  return createCandleGraph(view, movements, -410, 0, 100, 30, 20);
};
