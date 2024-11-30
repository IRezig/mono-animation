import {makeScene2D, Rect} from '@motion-canvas/2d';
import {all} from '@motion-canvas/core';
import Link, {LinkProps} from '../components/chain/Link';

export default makeScene2D(function* (view) {
  view.add(<Rect fill={'#27262f'} width={view.width} height={view.height} />);

  const lineSize = 100;
  const lineSize2 = 200;
  const lineSize3 = 300;
  const circleSize = 60;
  const lineWidth = 8;
  const borderWidth = 8;
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
        [0, -lineSize],
      ],
    },
  };
  const p11pos: [number, number] = [
    p1pos[0],
    p1pos[1] - (lineSize + circleSize),
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
        [0, -lineSize],
      ],
    },
    linesRight: [
      {
        radius,
        color: branch2Color,
        lineWidth,
        points: [
          [0, 0],
          [lineSize, 0],
          [lineSize, -lineSize / 2],
        ],
      },
      {
        radius,
        color: branch1Color,
        lineWidth,
        points: [
          [0, 0],
          [lineSize2, 0],
          [lineSize2, -lineSize2],
        ],
      },
    ],
  };
  const p111pos: [number, number] = [
    p11pos[0],
    p11pos[1] - (lineSize + circleSize),
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
        [0, -lineSize - 50],
      ],
    },
  };
  const p1111pos: [number, number] = [
    p111pos[0],
    p111pos[1] - (lineSize + 50 + circleSize),
  ];
  const p1111: LinkProps = {
    color: mainBranchColor,
    nodePosition: p1111pos,
    circleSize,
    borderWidth,
    linesRight: [
      {
        radius,
        color: branch3Color,
        lineWidth,
        points: [
          [0, 0],
          [lineSize3, 0],
          [lineSize3, -lineSize],
        ],
      },
    ],
    lineUp: {
      lineWidth,
      radius,
      color: mainBranchColor,
      points: [
        [0, 0],
        [0, -lineSize2 * 3],
      ],
    },
  };

  const p3pos: [number, number] = [
    p11pos[0] + (lineSize + circleSize / 2 + lineWidth / 2),
    p11pos[1] - (lineSize / 2 + circleSize / 2),
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
        [0, -lineSize],
      ],
    },
  };

  const p33pos: [number, number] = [
    p3pos[0],
    p3pos[1] - (lineSize + circleSize),
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
    lineLeft: {
      lineWidth,
      radius,
      color: branch2Color,
      points: [
        [0, 0],
        [0, -lineSize2 - 50],
        [-lineSize2 / 2, -lineSize2 - 50],
      ],
    },
  };

  const p4pos: [number, number] = [
    p11pos[0] + (lineSize2 + circleSize / 2 + lineWidth / 2),
    p11pos[1] - (lineSize2 + circleSize / 2),
  ];
  const p4: LinkProps = {
    color: branch1Color,
    circleSize,
    borderWidth,
    nodePosition: p4pos,
    lineUp: {
      lineWidth,
      radius,
      color: branch1Color,
      points: [
        [0, 0],
        [0, -lineSize3],
      ],
    },
  };
  const p44pos: [number, number] = [
    p4pos[0],
    p4pos[1] - (lineSize3 + circleSize),
  ];
  const p44: LinkProps = {
    color: branch1Color,
    circleSize,
    borderWidth,
    nodePosition: p44pos,
    lineLeft: {
      lineWidth,
      radius,
      color: branch1Color,
      points: [
        [0, 0],
        [0, -lineSize2 - 50],
        [-lineSize2, -lineSize2 - 50],
      ],
    },
  };

  const p2pos: [number, number] = [
    p11pos[0] + (lineSize3 + circleSize / 2 + lineWidth / 2),
    p11pos[1] - (lineSize2 * 2 + circleSize + 40),
  ];
  const p2: LinkProps = {
    color: branch3Color,
    circleSize,
    borderWidth,
    nodePosition: p2pos,
    lineUp: {
      lineWidth,
      radius,
      color: branch3Color,
      points: [
        [0, 0],
        [0, -lineSize3],
      ],
    },
  };
  const p22pos: [number, number] = [
    p2pos[0],
    p2pos[1] - (lineSize3 + circleSize),
  ];
  const p22: LinkProps = {
    color: branch3Color,
    circleSize,
    borderWidth,
    nodePosition: p22pos,
    lineLeft: {
      lineWidth,
      radius,
      color: branch3Color,
      points: [
        [0, 0],
        [0, -lineSize],
        [-lineSize3, -lineSize],
      ],
    },
  };

  const p1refs = Link(view, p1);
  const p11refs = Link(view, p11);
  const p111refs = Link(view, p111);
  const p1111refs = Link(view, p1111);
  const p2refs = Link(view, p2);
  const p22refs = Link(view, p22);
  const p3refs = Link(view, p3);
  const p33refs = Link(view, p33);
  const p333refs = Link(view, p333);
  const p4refs = Link(view, p4);
  const p44refs = Link(view, p44);

  yield* p1refs.animate();
  yield* p11refs.animate();
  yield* all(p3refs.animate(), p4refs.animate());
  yield* p111refs.animate();
  yield* all(p33refs.animate());
  yield* p1111refs.animate();
  yield* p2refs.animate();
  yield* all(p22refs.animate(), p333refs.animate(), p44refs.animate());
});
