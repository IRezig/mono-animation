import {Img, makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {all, createRef} from '@motion-canvas/core';
import Link, {LinkProps} from '../components/chain/Link';
import subscribe from '../images/subscribe.png';
import {Colors} from '../styles';

export default makeScene2D(function* (view) {
  const mainBranch = createRef<Txt>();
  const featureBranchTitle = createRef<Txt>();
  const subs = createRef<Img>();

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
        fill={Colors.white}
        fontSize={40}
        position={[-400, 850]}
        ref={mainBranch}
      />
      ,
      <Txt
        fill={Colors.white}
        fontSize={50}
        position={[180, -220]}
        ref={featureBranchTitle}
      />
      <Img
        opacity={0}
        ref={subs}
        src={subscribe}
        width={200}
        height={200}
        position={[200, 700]}
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

  yield* all(
    p1refs.animate(),
    p11refs.animate(),
    p111refs.animate(),
    p2refs.animate(),
    p22refs.animate(),
    p222refs.animate(),
    p1111refs.animate(),

    featureBranchTitle().x(-100, 2),
    featureBranchTitle().y(-200, 2),
    featureBranchTitle().opacity(1, 2),
    subs().opacity(1, 1),
    subs().scale(1.2, 1),
  );
});
