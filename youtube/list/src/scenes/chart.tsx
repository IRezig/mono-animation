import {View2D} from '@motion-canvas/2d';
import {createCandleGraph} from '../helpers/create-graph';

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
