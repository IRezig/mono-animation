import {makeScene2D, Rect} from '@motion-canvas/2d';
import Link, {LinkProps} from '../components/chain/Link';

export default makeScene2D(function* (view) {
  view.add(<Rect fill={'#27262f'} width={view.width} height={view.height} />);

  const lineSize = 200;
  const p1pos: [number, number] = [-100, 300];
  const circleSize = 120;
  const lineWidth = 8;

  const p1: LinkProps = {
    color: '#76389b',
    nodePosition: p1pos,
    lineUp: {
      color: '#76389b',
      points: [
        [0, 0],
        [0, -lineSize],
      ],
    },
  };
  const p2pos: [number, number] = [
    p1pos[0],
    p1pos[1] - (lineSize + circleSize),
  ];
  const p2: LinkProps = {
    color: '#08a0bc',
    nodePosition: p2pos,
    lineRight: {
      color: '#08a0bc',
      points: [
        [0, 0],
        [lineSize, 0],
        [lineSize, -lineSize],
      ],
      radius: 40,
    },
  };
  const p3: LinkProps = {
    color: '#36ba96',
    nodePosition: [
      p2pos[0] + (lineSize + circleSize / 2 + lineWidth / 2),
      p2pos[1] - (lineSize + circleSize / 2),
    ],
    lineUp: {
      color: '#36ba96',
      points: [
        [0, 0],
        [0, -lineSize],
      ],
    },
  };

  const p1refs = Link(view, p1);
  const p2refs = Link(view, p2);
  const p3refs = Link(view, p3);
  yield* p1refs.animate();
  yield* p2refs.animate();
  yield* p3refs.animate(0.2);
});
