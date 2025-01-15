import {Line, View2D} from '@motion-canvas/2d';
import {createCandleGraph} from '../helpers/create-graph';
import {Colors} from '../styles';

export const createChartScene = (view: View2D) => {
  // Background and baseline
  view.add(
    <Line
      points={[
        [-400, 200],
        [400, 200],
      ]}
      stroke={Colors.white}
      lineWidth={2}
      lineDash={[3, 3]}
    />,
  );

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
