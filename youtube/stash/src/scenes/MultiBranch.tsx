import {makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {createRef, waitFor} from '@motion-canvas/core';
import Buble, {BubleProps} from '../components/chain/Buble';
import Link, {LinkProps} from '../components/chain/Link';
import {Colors} from '../styles';

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  view.add(
    <>
      <Rect fill={Colors.background} width={view.width} height={view.height} />,
      <Txt
        ref={title}
        strokeFirst
        fontSize={62}
        lineJoin={'round'}
        fontFamily={'JetBrains Mono'}
        lineWidth={8}
        x={250}
        y={600}
        stroke={Colors.PROPERTY}
        fill={Colors.white}
      />
      ,
    </>,
  );

  const lineSize = 100;
  const lineSize2 = 200;
  const lineSize3 = 300;
  const bubleSize = 50;
  const circleSize = 60;
  const lineWidth = 8;
  const borderWidth = 8;
  const radius = 40;
  const mainBY = -300;
  const branch1Y = -166;
  const branch2Y = -66;
  const branch3Y = 36;

  const p1pos: [number, number] = [mainBY, 600];
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
        [0, -lineSize],
      ],
    },
    lineDown: {
      lineWidth,
      radius,
      color: Colors.mainBranch,
      points: [
        [0, 0],
        [0, lineSize / 2],
      ],
    },
  };
  const p11pos: [number, number] = [mainBY, p1pos[1] - (lineSize + circleSize)];
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
        [0, -lineSize],
      ],
    },
  };
  const p111pos: [number, number] = [
    mainBY,
    p11pos[1] - (lineSize + circleSize),
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
        [0, -lineSize - 50],
      ],
    },
  };
  const p1111pos: [number, number] = [
    mainBY,
    p111pos[1] - (lineSize + 50 + circleSize),
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
        [0, -lineSize2 * 3],
      ],
    },
  };

  const p3pos: [number, number] = [
    branch1Y,
    p11pos[1] - (lineSize / 2 + circleSize / 2),
  ];
  const p3: LinkProps = {
    color: Colors.featureBranch,
    circleSize,
    borderWidth,
    nodePosition: p3pos,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.featureBranch,
      points: [
        [0, 0],
        [0, -lineSize],
      ],
    },
    lineDown: {
      lineWidth,
      radius,
      color: Colors.featureBranch,
      points: [
        [0, 0],
        [0, lineSize / 2],
        [-lineSize, lineSize / 2],
      ],
    },
  };

  const p33pos: [number, number] = [
    branch1Y,
    p3pos[1] - (lineSize + circleSize),
  ];
  const p33: LinkProps = {
    color: Colors.featureBranch,
    circleSize,
    borderWidth,
    nodePosition: p33pos,
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

  const p333pos: [number, number] = [
    branch1Y,
    p33pos[1] - (lineSize2 + circleSize),
  ];
  const p333: LinkProps = {
    color: Colors.featureBranch,
    circleSize,
    borderWidth,
    nodePosition: p333pos,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.featureBranch,
      points: [
        [0, 0],
        [0, -lineSize2],
        [-lineSize - 10, -lineSize2],
      ],
    },
  };

  const p4pos: [number, number] = [
    branch2Y,
    p11pos[1] - (lineSize2 + 10 + circleSize / 2),
  ];
  const p4: LinkProps = {
    color: Colors.bugfixBranch,
    circleSize,
    borderWidth,
    nodePosition: p4pos,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.bugfixBranch,
      points: [
        [0, 0],
        [0, -lineSize3],
      ],
    },
    lineDown: {
      lineWidth,
      radius,
      color: Colors.bugfixBranch,
      points: [
        [0, 0],
        [0, lineSize / 2],
        [-lineSize2, lineSize / 2],
      ],
    },
  };
  const p44pos: [number, number] = [
    branch2Y,
    p4pos[1] - (lineSize3 + 30 + circleSize / 2),
  ];
  const p44: LinkProps = {
    color: Colors.bugfixBranch,
    circleSize,
    borderWidth,
    nodePosition: p44pos,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.bugfixBranch,
      points: [
        [0, 0],
        [0, -lineSize2 - 50],
        [-lineSize2 - 10, -lineSize2 - 50],
      ],
    },
  };

  const p2pos: [number, number] = [
    branch3Y,
    p11pos[1] - (lineSize2 * 2 + circleSize + 40),
  ];
  const p2: LinkProps = {
    color: Colors.shinyYellow,
    circleSize,
    borderWidth,
    nodePosition: p2pos,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.shinyYellow,
      points: [
        [0, 0],
        [0, -lineSize3],
      ],
    },
    lineDown: {
      lineWidth,
      radius,
      color: Colors.shinyYellow,
      points: [
        [0, 0],
        [0, lineSize2 / 2],
        [-lineSize3, lineSize2 / 2],
      ],
    },
  };
  const p22pos: [number, number] = [
    branch3Y,
    p2pos[1] - (lineSize3 + circleSize),
  ];
  const p22: LinkProps = {
    color: Colors.shinyYellow,
    circleSize,
    borderWidth,
    nodePosition: p22pos,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.shinyYellow,
      points: [
        [0, 0],
        [0, -lineSize],
        [-lineSize3 - 12, -lineSize],
      ],
    },
  };

  const b3pos: [number, number] = [mainBY, -290];
  const b3: BubleProps = {
    color: Colors.featureBranch,
    nodePosition: b3pos,
    bubleSize,
  };
  const b4pos: [number, number] = [mainBY, -440];
  const b4: BubleProps = {
    color: Colors.bugfixBranch,
    nodePosition: b4pos,
    bubleSize,
  };
  const b2pos: [number, number] = [mainBY, -555];
  const b2: BubleProps = {
    color: Colors.shinyYellow,
    nodePosition: b2pos,
    bubleSize,
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
  const b3ref = Buble(view, b3);
  const b4ref = Buble(view, b4);
  const b2ref = Buble(view, b2);

  yield* title().text('Git Stash', 1);
  yield* p1refs.animate();
  yield* p11refs.animate();
  yield* p3refs.animate();
  yield* p111refs.animate();
  yield* p4refs.animate();
  yield* p33refs.animate();
  yield* p1111refs.animate();
  yield* p2refs.animate();
  yield* p333refs.animate();
  yield* b3ref.animate();
  yield* p44refs.animate();
  yield* b4ref.animate();
  yield* p22refs.animate();
  yield* b2ref.animate();

  yield* waitFor(2);
});
