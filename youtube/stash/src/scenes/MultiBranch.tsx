import {makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {createRef, waitFor} from '@motion-canvas/core';
import Buble, {BubleProps} from '../components/chain/Buble';
import Link, {LinkProps} from '../components/chain/Link';
import Stash, {StashProps} from '../components/Stash';
import Text, {TextProps} from '../components/Text';
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
  const bubleSize = 50;
  const circleSize = 60;
  const lineWidth = 8;
  const borderWidth = 8;
  const radius = 40;
  const mainBY = -300;
  const branch2Y = -66;

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

  const p2pos: [number, number] = [
    branch2Y,
    p11pos[1] - (lineSize / 2 + circleSize / 2),
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
        [-lineSize2, lineSize / 2],
      ],
    },
  };

  const p22pos: [number, number] = [
    branch2Y,
    p2pos[1] - (lineSize + circleSize),
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
    branch2Y,
    p22pos[1] - (lineSize2 + circleSize),
  ];
  const p222: LinkProps = {
    color: Colors.featureBranch,
    circleSize,
    borderWidth,
    nodePosition: p222pos,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.featureBranch,
      points: [
        [0, 0],
        [0, -lineSize2],
        [-lineSize2 - 10, -lineSize2],
      ],
    },
  };

  const b2pos: [number, number] = [mainBY, -290];
  const b2: BubleProps = {
    color: Colors.featureBranch,
    nodePosition: b2pos,
    bubleSize,
  };
  const stashModalPosition: StashProps = {
    nodePosition: [250, -50],
  };

  const text: TextProps = {
    position: [250, -200],
    color: Colors.red,
    text: 'Not Committed Changes',
  };
  const txt = Text(view, text);
  const p1refs = Link(view, p1);
  const p11refs = Link(view, p11);
  const p111refs = Link(view, p111);
  const p1111refs = Link(view, p1111);
  const p2refs = Link(view, p2);
  const p22refs = Link(view, p22);
  const p222refs = Link(view, p222);
  const b2ref = Buble(view, b2);
  const stashModal = Stash(view, stashModalPosition);

  yield* title().text('Git Stash', 1);
  yield* p1refs.animate();
  yield* p11refs.animate();
  yield* p2refs.animate();
  yield* p111refs.animate();
  yield* p22refs.animate();
  yield* p1111refs.animate();
  yield* stashModal.fadeIn();
  yield* txt.fadeIn();
  yield* waitFor(2);
  yield* txt.fadeOut();
  yield* stashModal.fadeOut();
  yield* p222refs.animate();
  yield* b2ref.animate();

  yield* waitFor(4);
});
