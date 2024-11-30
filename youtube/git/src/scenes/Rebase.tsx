import {makeScene2D, Rect} from '@motion-canvas/2d';
import {all} from '@motion-canvas/core';
import Link, {LinkProps} from '../components/chain/Link';

export default makeScene2D(function* (view) {
  view.add(<Rect fill={'#27262f'} width={view.width} height={view.height} />);

  const lineSize = 100;
  const lineSize2 = 200;
  const circleSize = 80;
  const lineWidth = 10;
  const borderWidth = 10;
  const radius = 40;
  const mainBranchColor = '#76389b';
  const branch1Color = '#08a0bc';
  const branch2Color = '#36ba96';
  const branch3Color = '#f7c744';

  const p1pos: [number, number] = [-300, 600];
  const p1: LinkProps = {
    color: mainBranchColor,
    nodePosition: p1pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: mainBranchColor,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
  };
  const p11pos: [number, number] = [
    p1pos[0],
    p1pos[1] - (lineSize2 + circleSize),
  ];
  const p11: LinkProps = {
    color: mainBranchColor,
    nodePosition: p11pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: mainBranchColor,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
    linesRight: [
      {
        radius,
        color: branch2Color,
        lineWidth,
        points: [
          [0, 0],
          [lineSize2, 0],
          [lineSize2, -lineSize],
        ],
      },
    ],
  };
  const p111pos: [number, number] = [
    p11pos[0],
    p11pos[1] - (lineSize2 + circleSize),
  ];
  const p111: LinkProps = {
    color: mainBranchColor,
    nodePosition: p111pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: mainBranchColor,
      points: [
        [0, 0],
        [0, -lineSize2 - 50],
      ],
    },
  };
  const p1111pos: [number, number] = [
    p111pos[0],
    p111pos[1] - (lineSize2 + 50 + circleSize),
  ];
  const p1111: LinkProps = {
    color: mainBranchColor,
    nodePosition: p1111pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: mainBranchColor,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
  };

  const p3pos: [number, number] = [
    p11pos[0] + (lineSize2 + circleSize / 2 + lineWidth / 2),
    p11pos[1] - (lineSize2 / 2 + circleSize / 2),
  ];
  const p3: LinkProps = {
    color: branch2Color,
    circleSize,
    borderWidth,
    nodePosition: p3pos,
    lineUp: {
      lineWidth,
      radius,
      color: branch2Color,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
  };

  const p33pos: [number, number] = [
    p3pos[0],
    p3pos[1] - (lineSize2 + circleSize),
  ];
  const p33: LinkProps = {
    color: branch2Color,
    circleSize,
    borderWidth,
    nodePosition: p33pos,
    lineUp: {
      lineWidth,
      radius,
      color: branch2Color,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
  };

  const p333pos: [number, number] = [
    p33pos[0],
    p33pos[1] - (lineSize2 + circleSize),
  ];
  const p333: LinkProps = {
    color: branch2Color,
    circleSize,
    borderWidth,
    nodePosition: p333pos,
  };

  const p1refs = Link(view, p1);
  const p11refs = Link(view, p11);
  const p111refs = Link(view, p111);
  const p1111refs = Link(view, p1111);
  const p3refs = Link(view, p3);
  const p33refs = Link(view, p33);
  const p333refs = Link(view, p333);

  yield* p1refs.animate();
  yield* p11refs.animate();
  yield* p111refs.animate();
  yield* all(p3refs.animate(), p33refs.animate(), p333refs.animate());
  yield* p1111refs.animate();
});
