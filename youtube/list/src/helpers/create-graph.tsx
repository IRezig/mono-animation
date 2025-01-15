import {View2D} from '@motion-canvas/2d';
import {createCandle} from '../components/Candle';
import {createGroup} from '../components/Group';
import myGraph from '../mygraph.json';

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
  const randomize = () => Array.from({length: 50}, () => Math.random() > 0.5);
  const movements = myGraph;
  console.log(JSON.stringify(movements));

  return createCandleGraph(view, movements, -410, 0, 100, 30, 20);
};
