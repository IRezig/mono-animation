import {View2D} from '@motion-canvas/2d';
import Candle from '../components/Candle';
import Wave from '../components/Wave';

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

  return movements.map((isUp, index) => {
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
