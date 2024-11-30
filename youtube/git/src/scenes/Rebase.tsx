import {Line, makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {all, createRef, waitFor} from '@motion-canvas/core';
import Link, {LinkProps} from '../components/chain/Link';

export default makeScene2D(function* (view) {
  const mainBranch = createRef<Txt>();
  const featureBranch = createRef<Txt>();
  const highLight = createRef<Line>();
  view.add(<Rect fill={'#27262f'} width={view.width} height={view.height} />);

  const lineSize = 100;
  const lineSize2 = 200;
  const circleSize = 80;
  const lineWidth = 10;
  const borderWidth = 10;
  const radius = 40;
  const mainBranchColor = '#76389b';
  const branch2Color = '#36ba96';

  const p1pos: [number, number] = [-300, 850];
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

  view.add(
    <>
      <Txt
        fill={'white'}
        fontSize={40}
        position={[-400, 850]}
        ref={mainBranch}
      />
      ,
      <Txt
        fill={'white'}
        fontSize={50}
        position={[200, -400]}
        ref={featureBranch}
      />
      <Line
        ref={highLight}
        stroke={'#f00'}
        lineWidth={10}
        lineDash={[10, 10]}
        radius={20}
        end={0}
        points={[
          [p3pos[0] - 100, p3pos[1] + 100],
          [p333pos[0] - 100, p333pos[1] - 100],
          [p333pos[0] + 100, p333pos[1] - 100],
          [p3pos[0] + 100, p3pos[1] + 100],
          [p3pos[0] - 100, p3pos[1] + 100],
        ]}
      />
    </>,
  );

  const p1refs = Link(view, p1);
  const p11refs = Link(view, p11);
  const p111refs = Link(view, p111);
  const p1111refs = Link(view, p1111);
  const p2refs = Link(view, p3);
  const p22refs = Link(view, p33);
  const p222refs = Link(view, p333);

  yield* p1refs.animate();
  yield* p11refs.animate();
  yield* p111refs.animate();
  yield* all(p2refs.animate(), p22refs.animate(), p222refs.animate());
  yield* p1111refs.animate();
  yield* mainBranch().text('main', 0.3);
  yield* featureBranch().text('New Feature', 0.3);
  yield* highLight().end(1, 0.5);
  yield* waitFor(10);
});
