import {Line, makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {all, createRef, waitFor} from '@motion-canvas/core';
import Link, {LinkProps} from '../components/chain/Link';
import {Colors} from '../styles';

export default makeScene2D(function* (view) {
  const mainBranch = createRef<Txt>();
  const featureBranch = createRef<Txt>();
  const highLight = createRef<Line>();

  const lineSize = 100;
  const lineSize2 = 200;
  const circleSize = 80;
  const lineWidth = 10;
  const borderWidth = 10;
  const radius = 40;

  view.add(
    <Rect fill={Colors.background} width={view.width} height={view.height} />,
  );
  const p1pos: [number, number] = [-300, 850];
  const p1: LinkProps = {
    color: Colors.mainBranch,
    nodePosition: p1pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.mainBranch,
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
    color: Colors.mainBranch,
    nodePosition: p11pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.mainBranch,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
  };
  const p111pos: [number, number] = [
    p11pos[0],
    p11pos[1] - (lineSize2 + circleSize),
  ];
  const p111: LinkProps = {
    color: Colors.mainBranch,
    nodePosition: p111pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.mainBranch,
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
    color: Colors.mainBranch,
    nodePosition: p1111pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.mainBranch,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
  };

  const pn21pos: [number, number] = [
    p1111pos[0],
    p1111pos[1] - (lineSize2 + circleSize),
  ];
  const pn21: LinkProps = {
    color: Colors.shinyYellow,
    nodePosition: pn21pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.shinyYellow,
      points: [
        [0, 0],
        [0, -lineSize],
      ],
    },
  };

  const pn22pos: [number, number] = [
    pn21pos[0],
    pn21pos[1] - (lineSize + circleSize),
  ];
  const pn22: LinkProps = {
    color: Colors.shinyYellow,
    nodePosition: pn22pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.shinyYellow,
      points: [
        [0, 0],
        [0, -lineSize],
      ],
    },
  };
  const pn23pos: [number, number] = [
    pn22pos[0],
    pn22pos[1] - (lineSize + circleSize),
  ];
  const pn23: LinkProps = {
    color: Colors.shinyYellow,
    nodePosition: pn23pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.shinyYellow,
      points: [
        [0, 0],
        [0, -lineSize],
      ],
    },
  };

  const p2pos: [number, number] = [
    p11pos[0] + (lineSize2 + circleSize / 2 + lineWidth / 2),
    p11pos[1] - (lineSize2 / 2 + circleSize / 2),
  ];
  const p2: LinkProps = {
    color: Colors.featureBranch,
    circleSize,
    borderWidth,
    nodePosition: p2pos,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.featureBranch,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
    lineDown: {
      lineWidth,
      radius,
      color: Colors.featureBranch,
      points: [
        [0, 0],
        [0, lineSize2 / 2],
        [-lineSize2, lineSize2 / 2],
      ],
    },
  };

  const p22pos: [number, number] = [
    p2pos[0],
    p2pos[1] - (lineSize2 + circleSize),
  ];
  const p22: LinkProps = {
    color: Colors.featureBranch,
    circleSize,
    borderWidth,
    nodePosition: p22pos,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.featureBranch,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
  };

  const p222pos: [number, number] = [
    p22pos[0],
    p22pos[1] - (lineSize2 + circleSize),
  ];
  const p222: LinkProps = {
    color: Colors.featureBranch,
    circleSize,
    borderWidth,
    nodePosition: p222pos,
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
        position={[200, -150]}
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
          [p2pos[0] - 100, p2pos[1] + 100],
          [p222pos[0] - 100, p222pos[1] - 100],
          [p222pos[0] + 100, p222pos[1] - 100],
          [p2pos[0] + 100, p2pos[1] + 100],
          [p2pos[0] - 100, p2pos[1] + 100],
        ]}
      />
    </>,
  );

  const p1refs = Link(view, p1);
  const p11refs = Link(view, p11);
  const p111refs = Link(view, p111);
  const p1111refs = Link(view, p1111);
  const p2refs = Link(view, p2);
  const p22refs = Link(view, p22);
  const p222refs = Link(view, p222);
  const pn21refs = Link(view, pn21);
  const pn22refs = Link(view, pn22);
  const pn23refs = Link(view, pn23);

  yield* p1refs.animate();
  yield* p11refs.animate();
  yield* p111refs.animate();
  yield* p2refs.animate();
  yield* p22refs.animate();
  yield* p222refs.animate();
  yield* p1111refs.animate();
  yield* mainBranch().text('main', 0.3);
  yield* featureBranch().text('New Feature', 0.3);
  yield* highLight().end(1, 0.5);

  yield* pn21refs.animate();
  yield* pn22refs.animate();
  yield* pn23refs.animate();

  yield* all(
    featureBranch().opacity(0, 0.2),
    p2refs.fade(0, 0.2),
    p22refs.fade(0, 0.2),
    p222refs.fade(0, 0.2),
    highLight().opacity(0, 0.5),

    pn21refs.colorize(Colors.mainBranch, 0.5),
    pn22refs.colorize(Colors.mainBranch, 0.5),
    pn23refs.colorize(Colors.mainBranch, 0.5),
  );

  yield* all(
    featureBranch().x(-100, 0.2),
    featureBranch().y(-800, 0.2),
    featureBranch().opacity(1, 0.2),
    waitFor(2),
  );

  yield* waitFor(2);
});
